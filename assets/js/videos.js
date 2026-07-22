function initScrollVideos() {

    const videos = document.querySelectorAll("video[data-autoplay]");

    if (!videos.length) return;

    const reduceMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)");

    /* 動きを抑えたい設定のユーザーにはポスター画像のままにする */
    if (reduceMotion.matches) return;

    const visibleVideos = new Set();

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            const video = entry.target;

            if (entry.isIntersecting) {

                visibleVideos.add(video);

                video.play().catch(() => {});

            } else {

                visibleVideos.delete(video);

                video.pause();

            }

        });

    }, {

        threshold: 0.25

    });

    videos.forEach((video) => {

        observer.observe(video);

    });

    /* タブ復帰時にブラウザが自動再開しない場合に備える */
    document.addEventListener("visibilitychange", () => {

        if (document.hidden) return;

        visibleVideos.forEach((video) => {

            if (video.paused) video.play().catch(() => {});

        });

    });

}
