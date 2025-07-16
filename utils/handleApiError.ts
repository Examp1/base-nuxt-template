export function handleApiError(error: any) {
    const statusCode = error?.statusCode || 500;
    const statusMessage = error?.statusMessage || "Something went wrong";

    if (import.meta.server) {
        throw createError({ statusCode, statusMessage, fatal: true });
    } else {
        showError({ statusCode, statusMessage });
    }
}
