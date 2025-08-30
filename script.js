const music = document.getElementById('bg-music');
const btn = document.getElementById('music-btn');

// Try autoplay on page load
window.addEventListener('load', () => {
    music.play().then(() => {
        btn.textContent = "🎵 Pause Music";
    }).catch(() => {
        btn.textContent = "🎵 Play Music";
    });
});

// Toggle play/pause
btn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        btn.textContent = "🎵 Pause Music";
    } else {
        music.pause();
        btn.textContent = "🎵 Play Music";
    }
});