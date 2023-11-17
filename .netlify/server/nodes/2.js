import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.3f842e20.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.2226f978.js","_app/immutable/chunks/Bouton.41dc0e43.js"];
export const stylesheets = ["_app/immutable/assets/2.117fc0cb.css","_app/immutable/assets/Bouton.d96fac2e.css"];
export const fonts = [];
