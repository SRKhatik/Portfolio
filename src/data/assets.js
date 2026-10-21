// Maps the image keys used in profile.js to optimised (WebP) assets.
// To add an image: drop it in src/assets/opt and register it here.
const files = import.meta.glob("../assets/opt/*.webp", { eager: true, import: "default" });

export const img = (key) => (key ? files[`../assets/opt/${key}.webp`] : undefined);
