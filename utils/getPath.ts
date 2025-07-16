import { MEDIA_PATH_PREFIX, BASE_URL, FILE_PATH_PREFIX } from "../constants";
export function getPath(path: string) {
    if (!path) return "";
    if (
        path.includes("jpg") ||
        path.includes("png") ||
        path.includes("webp") ||
        path.includes("svg")
    ) {
        return `${BASE_URL}/${MEDIA_PATH_PREFIX}${path}`;
    } else {
        return `${BASE_URL}/${FILE_PATH_PREFIX}${path}`;
    }
}
