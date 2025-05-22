import { ref, onMounted, onUnmounted } from "vue";

export default function useVideoControl(
    videoRef,
    isCtaBock = false,
    selector = ".block-sisi-dev-cta",
) {
    const isFullSize = ref(false);
    const isShow = ref(true);
    const isClose = ref(false);
    const isPlay = ref(true);

    let targetBlock = null;

    const playVideo = () => videoRef.value?.play();
    const pauseVideo = () => videoRef.value?.pause();

    const playOrPause = () => {
        isPlay.value = !isPlay.value;
        isPlay.value ? pauseVideo() : playVideo();
    };

    const openOnFullSize = () => {
        isFullSize.value = !isFullSize.value;
        if (videoRef.value) {
            videoRef.value.muted = !isFullSize.value;
        }
    };

    const defaultScrollHandler = () => {
        if (targetBlock) {
            const offset = targetBlock.getBoundingClientRect().top;
            if (offset - 1000 > 0) {
                isShow.value = window.scrollY > 1500;
            } else {
                isShow.value = false;
            }
        }
    };

    const ctaScrollHandler = () => {
        if (targetBlock) {
            const elOffest = targetBlock.getBoundingClientRect().top;
            isShow.value = elOffest - 700 < 0;
        }
    };

    const scrollHandler = () => {
        isCtaBock ? ctaScrollHandler : defaultScrollHandler();
    };

    onMounted(() => {
        targetBlock = document.querySelector(selector);
        window.addEventListener("scroll", scrollHandler);
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", scrollHandler);
    });

    return {
        isFullSize,
        isShow,
        isPlay,
        isClose,
        playVideo,
        pauseVideo,
        playOrPause,
        openOnFullSize,
    };
}
