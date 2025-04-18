document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const videoContainer = document.querySelector('.video-container');
    const musicInfo = document.querySelector('.music-info');

    // Add hover effect to title
    title.addEventListener('mouseover', () => {
        title.style.transform = 'scale(1.05)';
        title.style.transition = 'transform 0.3s ease';
    });

    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
    });

    // Add pulsing effect to music info
    setInterval(() => {
        musicInfo.style.transform = 'scale(1.02)';
        musicInfo.style.transition = 'transform 0.5s ease';
        
        setTimeout(() => {
            musicInfo.style.transform = 'scale(1)';
        }, 500);
    }, 3000);

    // Add smooth scroll animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});