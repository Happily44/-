// 評価表示とコメント入力画面に遷移する処理を追加
function handleNext() {
    // 選択された評価を取得
    const selectedRating = document.querySelector('input[name="rating"]:checked');

    if (!selectedRating) {
        alert('評価を選んでください。');
        return;
    }

    const selectedRatingValue = selectedRating.value;

    // "非常に満足" (5) または "満足" (4) の場合、Googleマップ案内画面に遷移
    if (selectedRatingValue === "5" || selectedRatingValue === "4") {
        document.getElementById('surveySection').style.display = 'none';
        document.getElementById('googleMapSection').style.display = 'block'; // Googleマップ案内画面を表示

        // 数秒後に自動でGoogleマップのレビュー画面に遷移
        setTimeout(() => {
            window.location.href = 'https://www.google.com/maps/place/your-business-location'; // 適切なURLを入力してください
        }, 5000); // 5秒後に遷移
    } else {
        // それ以外の評価ではコメント入力画面に遷移
        document.getElementById('surveySection').style.display = 'none';
        document.getElementById('commentSection').style.display = 'block';

        // 選択した評価を表示
        const selectedRatingText = selectedRating.parentElement.textContent.trim(); // 評価のテキストを取得
        document.getElementById('selectedRatingDisplay').textContent = `${selectedRatingText}`;
    }
}

function submitComment() {
    const comment = document.getElementById('commentBox').value;

    // コメントが入力されていない場合のエラーチェック
    if (!comment) {
        alert('コメントを入力してください。');
        return;
    }

    // Thank you画面に遷移
    document.getElementById('commentSection').style.display = 'none';
    document.getElementById('thankYouSection').style.display = 'block';
}

function redirectToGoogle() {
    // Googleマップの評価ページにリダイレクト
    window.location.href = 'https://www.google.com/maps/place/YOUR_BUSINESS_PLACE'; // YOUR_BUSINESS_PLACEを実際の場所に置き換えてください
}
