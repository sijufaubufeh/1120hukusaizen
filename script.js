window.onload = function() {
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.querySelector('.time').textContent = timeString;
    }
    setInterval(updateTime, 1000);
    updateTime();
};
function disableScroll() {
    document.documentElement.style.overflow = 'hidden'; // htmlのスクロールを無効化
    document.body.style.overflow = 'hidden'; // bodyのスクロールを無効化
}

function enableScroll() {
    document.documentElement.style.overflow = ''; // デフォルトに戻す
    document.body.style.overflow = '';
}

// 実行例
disableScroll(); // スクロールを無効化
enableScroll();  // スクロールを有効化