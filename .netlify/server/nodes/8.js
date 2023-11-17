

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/saga/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.5ef837e0.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.2226f978.js","_app/immutable/chunks/FilAriane.0e0b4448.js"];
export const stylesheets = ["_app/immutable/assets/8.0e7452c6.css","_app/immutable/assets/FilAriane.bd523b4f.css"];
export const fonts = [];
