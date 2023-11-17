

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.3a79b29c.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.2226f978.js"];
export const stylesheets = ["_app/immutable/assets/0.74775d1c.css"];
export const fonts = ["_app/immutable/assets/Montserrat-Regular.c3fb0280.ttf","_app/immutable/assets/Branch.ad3f0f9a.ttf"];
