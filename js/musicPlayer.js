window.addEventListener("load", function () {
    const audio = document.querySelector("audio");
    const playPause = document.querySelector(".playPause");

    // song list
    const songList = [
        {
            // 音乐的路径
            path: "../audio/欧冠主题曲.mp3",
            // 音乐的名字
            songName: "欧冠主题曲",
        },
    ];

    let songPlaying = false;

    //play song
    const playSong = () => {
        songPlaying = true;
        audio.play();
        playPause.classList.add("active");
        playPause.style.webkitAnimationPlayState = "running";
        playPause.style.color = "#0397dc";
        // playPause.classList.romove("stop");
        // playPause.innerHTML = '<span class="material-icons">pause</span>';
        playPause.innerHTML =
            '<span class="iconfont icon-yinlemusic215"></span>';
    };

    //pause song
    const pauseSong = () => {
        songPlaying = false;
        audio.pause();
        playPause.classList.remove("active");
        playPause.style.color = "#6f96c2";
        playPause.style.webkitAnimationPlayState = "paused";
        // playPause.style.transform = "rotate(0deg)";
    };

    //play/pause song
    playPause.addEventListener("click", () =>
        songPlaying ? pauseSong() : playSong()
    );

    // load song
    const loadSong = (songList) => {
        // title.textContent = songList.songName;
        audio.src = songList.path;
    };
    let i = 0;
    loadSong(songList[i]);
});
