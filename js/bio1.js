document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    const overlay = document.getElementById('overlay');
    const container = document.getElementById('container');

    function startSite() {
        overlay.style.display = 'none';
        container.style.display = 'block';
        fadeIn(music, 1);
    }

    function fadeIn(audio, duration) {
        audio.volume = 0;
        audio.play();

        let fadeTime = duration * 1000;
        let step = 0.1;
        let interval = setInterval(() => {
            if (audio.volume < 1.0) {
                audio.volume = parseFloat((audio.volume + step).toFixed(1));
            } else {
                clearInterval(interval);
            }
        }, fadeTime * step);

        audio.addEventListener('ended', function() {
            fadeOut(audio, 1);
            setTimeout(() => audio.play(), 1000);
        });
    }

    function fadeOut(audio, duration) {
        let fadeTime = duration * 1000;
        let step = 0.1;
        let interval = setInterval(() => {
            if (audio.volume > 0.1) {
                audio.volume = parseFloat((audio.volume - step).toFixed(1));
            } else {
                audio.volume = 0;
                clearInterval(interval);
                audio.pause();
                audio.currentTime = 0;
            }
        }, fadeTime * step);
    }

    overlay.onclick = startSite;

    function createDot() {
        const dot = document.createElement('div');
        dot.className = 'decorative-dot';
        dot.style.left = Math.random() * window.innerWidth + 'px';
        dot.style.top = '-10px';

        document.body.appendChild(dot);

        let velocityY = 5 + Math.random() * 5;

        function update() {
            const currentTop = dot.offsetTop;
            dot.style.top = currentTop + velocityY + 'px';

            if (currentTop >= window.innerHeight - 5) {
                clearInterval(interval);
                dot.style.top = window.innerHeight - 5 + 'px';
                dot.classList.add('fade-out');
                setTimeout(() => {
                    document.body.removeChild(dot);
                }, 2000);
            }
        }

        const interval = setInterval(update, 10);
    }

    setInterval(createDot, 100);

    const title = "@monkeydestroyer87";
    let index = 0;
    let addingText = true;

    function updateTitle() {
        if (addingText) {
            if (index < title.length) {
                document.title = title.slice(0, index + 1);
                index++;
                setTimeout(updateTitle, 300);
            } else {
                addingText = false;
                setTimeout(updateTitle, 500);
            }
        } else {
            if (index > 0) {
                document.title = title.slice(0, index);
                index--;
                setTimeout(updateTitle, 300);
            } else {
                addingText = true;
                setTimeout(updateTitle, 1000);
            }
        }
    }

    updateTitle();
});
