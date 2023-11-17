import { c as create_ssr_component } from "./ssr.js";
const GridImage_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-k0dkau{margin-top:5rem;padding-bottom:5vh;display:grid;grid-template-columns:1fr 1fr 1fr;justify-items:center;row-gap:3rem}@media screen and (max-width: 820px){div.svelte-k0dkau{grid-template-columns:1fr 1fr}}@media screen and (max-width: 578px){div.svelte-k0dkau{grid-template-columns:1fr}}",
  map: null
};
const GridImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="svelte-k0dkau">${slots.default ? slots.default({}) : ``}</div>`;
});
const mecanique = ["/images/painting/mecanique/1.webp", "/images/painting/mecanique/2.webp", "/images/painting/mecanique/3.webp"];
const leshuiles = ["/images/painting/leshuiles/1.webp", "/images/painting/leshuiles/2.webp", "/images/painting/leshuiles/3.webp"];
const lesnoirsetblancs = ["/images/painting/lesnoirsetblancs/1.webp", "/images/painting/lesnoirsetblancs/2.webp", "/images/painting/lesnoirsetblancs/3.webp"];
const paysage = ["/images/painting/paysage/1.webp", "/images/painting/paysage/2.webp", "/images/painting/paysage/3.webp"];
export {
  GridImage as G,
  lesnoirsetblancs as a,
  leshuiles as l,
  mecanique as m,
  paysage as p
};
