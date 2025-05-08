import { MEDIA_PATH_PREFIX, FILE_PREFIX, BASE_URL } from "~/constants";

export default function useUtils() {
    const getMediaPath = (path) => {
        if (!path) return "";
        if (
            path.includes("jpg") ||
            path.includes("png") ||
            path.includes("webp") ||
            path.includes("svg")
        ) {
            return `${BASE_URL}/${MEDIA_PATH_PREFIX}${path}`;
        } else {
            return `${BASE_URL}/${FILE_PREFIX}${path}`;
        }
    };

    return {
        getMediaPath,
    };
}
