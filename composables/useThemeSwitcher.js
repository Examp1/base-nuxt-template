// composables/useThemeSwitcher.js
export function useThemeSwitcher() {
    onMounted(() => {
      const sections = document.querySelectorAll("section");
      const themeHTML = `
        <div data-theme="bg-light" class="sisi-dev-theme bg-light"></div>
        <div data-theme="bg-light-2" class="sisi-dev-theme bg-light-2"></div>
        <div data-theme="bg-dark" class="sisi-dev-theme bg-dark"></div>
        <div data-theme="bg-color" class="sisi-dev-theme bg-color"></div>
      `;
      sections.forEach((section) => {
        if (section.classList.contains("block-first-screen")) return;
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
          const updated = currentClassList.replace(/\bbg-[^\s]+/, newBgClass);
          parent.className = updated.trim();
        }
      });
    }
  }
  