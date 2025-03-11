export function useImagePath() {
    const getImagePath = (folder, name) =>
        new URL(`/resources/images/${folder}/${name}`, import.meta.url).href;
    return { getImagePath };
}
