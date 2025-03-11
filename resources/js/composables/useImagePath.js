export function useImagePath(folder) {
    const getImagePath = (name) =>
        new URL(`/resources/images/${folder}/${name}`, import.meta.url).href;
    return { getImagePath };
}
