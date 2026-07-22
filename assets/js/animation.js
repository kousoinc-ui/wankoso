function initAnimation() {

    const items = document.querySelectorAll("[data-fade]");

    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold:0.15

    });

    items.forEach((item) => {

        observer.observe(item);

    });

}