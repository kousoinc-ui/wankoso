function initMenu() {

    const button = document.querySelector(".menu-button");

    const nav = document.querySelector(".global-nav");

    if (!button || !nav) return;

    const close = () => {

        document.body.classList.remove("menu-open");

        button.setAttribute("aria-expanded", "false");

    };

    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", () => {

        const isOpen = document.body.classList.toggle("menu-open");

        button.setAttribute("aria-expanded", String(isOpen));

    });

    nav.addEventListener("click", (event) => {

        if (event.target.closest("a")) close();

    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") close();

    });

}
