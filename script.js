window.onload = function() {
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.querySelector('.time').textContent = timeString;
    }
    setInterval(updateTime, 1000);
    updateTime();
};
