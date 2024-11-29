window.onload = function() {
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.querySelector('.time').textContent = timeString;
    }
    setInterval(updateTime, 1000);
    updateTime();
};
// circle-container内でスクロールイベントを禁止
const circleContainer = document.querySelector('.circle-container');

circleContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // ホイールスクロールを無効化
});

circleContainer.addEventListener('touchmove', (event) => {
    event.preventDefault(); // タッチスクロールを無効化
}, { passive: false });
