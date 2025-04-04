const slideUp = (target: HTMLElement, duration: number = 500) => {
    const nextSibling = target.nextElementSibling;
    if (
        nextSibling instanceof HTMLElement &&
        !nextSibling.classList.contains("_slide")
    ) {
        target.classList.remove("active");
        nextSibling.classList.add("_slide");
        nextSibling.style.transitionProperty = "height, margin, padding";
        nextSibling.style.transitionDuration = duration + "ms";
        nextSibling.style.height = nextSibling.offsetHeight + "px";
        // eslint-disable-next-line no-unused-expressions
        nextSibling.offsetHeight;
        nextSibling.style.overflow = "hidden";
        nextSibling.style.height = "0";
        nextSibling.style.paddingTop = "0";
        nextSibling.style.paddingBottom = "0";
        nextSibling.style.marginTop = "0";
        nextSibling.style.marginBottom = "0";
        window.setTimeout(() => {
            nextSibling.hidden = true;
            nextSibling.style.removeProperty("height");
            nextSibling.style.removeProperty("padding-top");
            nextSibling.style.removeProperty("padding-bottom");
            nextSibling.style.removeProperty("margin-top");
            nextSibling.style.removeProperty("margin-bottom");
            nextSibling.style.removeProperty("overflow");
            nextSibling.style.removeProperty("transition-duration");
            nextSibling.style.removeProperty("transition-property");
            nextSibling.classList.remove("_slide");
        }, duration);
    }
};

const slideDown = (target: HTMLElement, duration: number = 500) => {
    const nextSibling = target.nextElementSibling;
    if (
        nextSibling instanceof HTMLElement &&
        !nextSibling.classList.contains("_slide")
    ) {
        target.classList.add("active");
        nextSibling.classList.add("_slide");
        if (nextSibling.hidden) {
            nextSibling.hidden = false;
        }
        const height = nextSibling.offsetHeight;
        nextSibling.style.overflow = "hidden";
        nextSibling.style.height = "0";
        nextSibling.style.paddingTop = "0";
        nextSibling.style.paddingBottom = "0";
        nextSibling.style.marginTop = "0";
        nextSibling.style.marginBottom = "0";
        nextSibling.offsetHeight;
        nextSibling.style.transitionProperty = "height, margin, padding";
        nextSibling.style.transitionDuration = duration + "ms";
        nextSibling.style.height = height + "px";
        // ie fix
        nextSibling.style.removeProperty("padding-top");
        nextSibling.style.removeProperty("padding-bottom");
        nextSibling.style.removeProperty("margin-top");
        nextSibling.style.removeProperty("margin-bottom");
        window.setTimeout(() => {
            nextSibling.style.removeProperty("height");
            nextSibling.style.removeProperty("overflow");
            nextSibling.style.removeProperty("transition-duration");
            nextSibling.style.removeProperty("transition-property");
            nextSibling.classList.remove("_slide");
        }, duration);
    }
};

export const slideToggle = (target: HTMLElement, duration: number = 500) => {
    const nextSibling = target.nextElementSibling;
    if (nextSibling instanceof HTMLElement && nextSibling.hidden) {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
};
