// composables/useThemeSwitcher.js
export function useThemeSwitcher() {
    onMounted(() => {
        const sections = document.querySelectorAll("section");
        const themeHTML = `
      <svg
                width="45"
                height="45"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.895508"
                    width="45"
                    height="45"
                    rx="16"
                    fill="white"
                />
                <path
                    data-theme="bg-light-2"
                    class="sisi-dev-theme"
                    d="M4.89551 16C4.89551 14.4241 5.2059 12.8637 5.80895 11.4078C6.41201 9.95189 7.29592 8.62902 8.41023 7.51471C9.52453 6.40041 10.8474 5.5165 12.3033 4.91344C13.7592 4.31039 15.3197 4 16.8955 4L16.8955 16L4.89551 16Z"
                />
                <path
                    data-theme="bg-light"
                    class="sisi-dev-theme"
                    d="M16.8955 28C15.3196 28 13.7592 27.6896 12.3033 27.0866C10.8474 26.4835 9.52453 25.5996 8.41022 24.4853C7.29592 23.371 6.41201 22.0481 5.80895 20.5922C5.2059 19.1363 4.89551 17.5759 4.89551 16L16.8955 16L16.8955 28Z"
                />
                <path
                    data-theme="bg-dark"
                    class="sisi-dev-theme"
                    d="M28.8955 16C28.8955 17.5759 28.5851 19.1363 27.9821 20.5922C27.379 22.0481 26.4951 23.371 25.3808 24.4853C24.2665 25.5996 22.9436 26.4835 21.4877 27.0866C20.0318 27.6896 18.4714 28 16.8955 28L16.8955 16L28.8955 16Z"
                />
                <path
                    data-theme="bg-color"
                    class="sisi-dev-theme"
                    d="M16.8955 4C18.4714 4 20.0318 4.31039 21.4877 4.91345C22.9436 5.5165 24.2665 6.40042 25.3808 7.51472C26.4951 8.62903 27.379 9.9519 27.9821 11.4078C28.5851 12.8637 28.8955 14.4241 28.8955 16L16.8955 16V4Z"
                />
            </svg>`;
        sections.forEach((section) => {
            if (section.classList.contains("block-first-screen") || section.classList.contains("block-spotify-widget")) return;
            const div = document.createElement("div");
            div.classList.add("theme-switch");
            div.innerHTML = themeHTML;
            section.insertAdjacentElement("beforeend", div);
        });
    });

    if (typeof window !== "undefined") {
        document.addEventListener("click", ({ target }) => {
            if (target.classList.contains("sisi-dev-theme")) {
                const parent = target.closest("section");
                if (!parent) return;
                const currentClassList = parent.className;
                const newBgClass = target.dataset.theme;
                const updated = currentClassList.replace(
                    /\bbg-[^\s]+/,
                    newBgClass,
                );
                parent.className = updated.trim();
            }
        });
    }
}
