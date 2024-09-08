// 評価を選択した後の処理
function handleNext() {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
        const selectedRatingValue = selectedRating.value;
        document.getElementById('selectedRatingDisplay').textContent = `選択した評価: ${selectedRating.nextSibling.textContent.trim()}`;
        document.getElementById('surveySection').style.display = 'none';

        if (selectedRatingValue === "5" || selectedRatingValue === "4") {
            // 非常に満足 または 満足 の場合、Googleマップ案内画面に遷移
            document.getElementById('googleMapSection').style.display = 'block'; // Googleマップ案内画面を表示

            // 数秒後に自動でGoogleマップのレビュー画面に遷移
            setTimeout(() => {
                window.location.href = 'https://search.google.com/local/writereview?placeid=ChIJBWueYZaPQTURzBI1Tcb36Uw'; // Place IDを設定
            }, 3000); // 3秒後に遷移
        } else {
            // それ以外の評価ではコメント入力画面に遷移
            document.getElementById('commentSection').style.display = 'block';
        }
    } else {
        alert('評価を選択してください。');
    }
}

// コメントを送信する処理
function submitComment() {
    const selectedRating = document.querySelector('input[name="rating"]:checked').value;
    const comment = document.getElementById('commentBox').value;

    if (!comment) {
        alert('コメントを入力してください。');
        return;
    }

    // Google Apps ScriptのURLにPOSTリクエストを送信
    fetch('https://script.google.com/macros/s/AKfycby-_gYqGZGVT9zXZ0kJRqmbo0i7M6Y1WzO1wkk0Kep0ifa249GoqXsorJvHaZA57N7p/exec', {
        method: 'POST',
        body: JSON.stringify({ rating: selectedRating, comment: comment }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
        document.getElementById('commentSection').style.display = 'none';
        document.getElementById('thankYouSection').style.display = 'block';
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('エラーが発生しました。もう一度お試しください。');
    });
}

// Googleマップにリダイレクトする処理
function redirectToGoogle() {
    setTimeout(() => {
        window.location.href = 'https://search.google.com/local/writereview?placeid=ChIJBWueYZaPQTURzBI1Tcb36Uw'; // Place IDを設定
    }, 3000); // 3秒後に遷移
}

