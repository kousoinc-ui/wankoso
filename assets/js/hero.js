function initHeroVideo() {

    const video = document.querySelector(".hero-video");

    if (!video) return;

    const reduceMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {

        video.removeAttribute("autoplay");

        video.pause();

        return;

    }

    const show = () => {
        video.classList.add("is-ready");
    };

    if (video.readyState >= 3) {

        show();

    } else {

        video.addEventListener("canplay", show, { once: true });

    }

    /* タブ復帰時にブラウザが自動再開しない場合に備える */
    document.addEventListener("visibilitychange", () => {

        if (!document.hidden && video.paused) {

            video.play().catch(() => {});

        }

    });

}
