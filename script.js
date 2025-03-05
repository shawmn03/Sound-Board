const sounds = ['yay', 'sad', 'laughing', 'magic', 'sus', 'clock'];

function stopSounds() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    document.getElementById('buttons').appendChild(btn);

    btn.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play();
    });
});
