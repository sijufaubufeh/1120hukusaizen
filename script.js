window.onload = function() {
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.querySelector('.time').textContent = timeString;
    }
    setInterval(updateTime, 1000);
    updateTime();
};
// スクロール禁止
function preventScroll(e) {
    e.preventDefault();
}

// スクロールを無効化
function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.addEventListener('touchmove', preventScroll, { passive: false });
}

// スクロールを有効化
function enableScroll() {
    document.body.style.overflow = 'auto';
    document.removeEventListener('touchmove', preventScroll);
}

// ページロード時に無効化
disableScroll();