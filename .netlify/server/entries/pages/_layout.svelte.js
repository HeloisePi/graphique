import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const HeaderMobile_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".headershow.svelte-1obiku1 .active.svelte-1obiku1{display:block}.hamburger.svelte-1obiku1.svelte-1obiku1{display:none}.cross.svelte-1obiku1.svelte-1obiku1{display:none}.menu.svelte-1obiku1.svelte-1obiku1{width:3rem;height:3rem;position:absolute;right:1rem}.menu.svelte-1obiku1 img.svelte-1obiku1{width:100%;height:100%}.headermobile.svelte-1obiku1.svelte-1obiku1{top:0;left:0;z-index:3;position:fixed}.headershow.svelte-1obiku1.svelte-1obiku1{height:70px;width:100vw;display:flex;justify-content:space-between;align-items:center;border:1px solid black;padding:1rem;z-index:4}.blur.svelte-1obiku1.svelte-1obiku1{z-index:3;position:fixed;top:0;width:100vw;height:70px;-webkit-filter:blur(10px);-moz-filter:blur(10px);-o-filter:blur(10px);-ms-filter:blur(10px);filter:blur(10px);backdrop-filter:blur(10px)}.toggle.svelte-1obiku1.svelte-1obiku1{width:3rem;height:3rem;z-index:100}.logo.svelte-1obiku1.svelte-1obiku1{width:4rem;height:fit-content}.close.svelte-1obiku1.svelte-1obiku1{transform:translateX(100%)}.slide.svelte-1obiku1.svelte-1obiku1{background-color:white;height:100vh;width:50vw;right:0;position:absolute;padding:5%;display:flex;flex-direction:column;gap:1rem}a.svelte-1obiku1.svelte-1obiku1{color:black}",
  map: null
};
const HeaderMobile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="blur svelte-1obiku1"></div> <header class="headermobile svelte-1obiku1" data-svelte-h="svelte-wnz6fq"><div class="headershow svelte-1obiku1"><a href="../../" class="svelte-1obiku1"><img class="logo svelte-1obiku1" src="/images/logo.webp" alt="logo"></a> <div class="toggle svelte-1obiku1"></div> <div class="menu svelte-1obiku1"><img class="hamburger active svelte-1obiku1" src="/images/logo/hamburger.svg" alt="hamburger menu"> <img class="cross svelte-1obiku1" src="/images/logo/cross.svg" alt="cross menu"></div></div> <div class="slide close svelte-1obiku1"><a class="close-menu svelte-1obiku1" href="../saga"><p>La Saga</p></a> <a class="close-menu svelte-1obiku1" href="../creationSerge"><p>Les Créations de Serge</p></a> <a class="close-menu svelte-1obiku1" href="../#about"><p>Qui sommes nous ?</p></a> <a class="close-menu svelte-1obiku1" href="../#contact"><p>Contact</p></a></div> </header>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-4zdhj3{display:flex;justify-content:space-between;align-items:center;padding:1rem;border-bottom:1px solid black;position:fixed;width:100vw;z-index:4}img.svelte-4zdhj3{width:4rem}.link.svelte-4zdhj3{display:flex;gap:2rem}.blur.svelte-4zdhj3{z-index:3;position:fixed;top:0;width:100vw;height:70px;-webkit-filter:blur(10px);-moz-filter:blur(10px);-o-filter:blur(10px);-ms-filter:blur(10px);filter:blur(10px);backdrop-filter:blur(10px)}a.svelte-4zdhj3{color:black}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="blur svelte-4zdhj3"></div> <header class="svelte-4zdhj3" data-svelte-h="svelte-1ubqjcc"><a href="../../" class="svelte-4zdhj3"><img src="/images/logo.webp" alt="logo" class="svelte-4zdhj3"></a> <div class="link svelte-4zdhj3"><a href="../saga" class="svelte-4zdhj3"><p>La Saga</p></a> <a href="../creationSerge" class="svelte-4zdhj3"><p>Les Créations de Serge</p></a> <a href="../#about" class="svelte-4zdhj3"><p>Qui sommes nous ?</p></a> <a href="../#contact" class="svelte-4zdhj3"><p>Contact</p></a></div> </header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-49j5jp.svelte-49j5jp{background-image:url(/images/background.webp);background-size:cover;background-size:unset;background-repeat:repeat}footer.svelte-49j5jp.svelte-49j5jp{border-top:1px solid black;height:3rem;display:flex;justify-content:center;align-items:center;text-align:center}.headerMobile.svelte-49j5jp.svelte-49j5jp{display:none}@media screen and (max-width: 500px){footer.svelte-49j5jp p.svelte-49j5jp{font-size:14px}}@media screen and (max-width: 870px){.headerMobile.svelte-49j5jp.svelte-49j5jp{display:block}.headerdesktop.svelte-49j5jp.svelte-49j5jp{display:none}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app"><div class="headerdesktop svelte-49j5jp">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</div> <div class="headerMobile svelte-49j5jp">${validate_component(HeaderMobile, "HeaderMobile").$$render($$result, {}, {}, {})}</div> <main class="svelte-49j5jp">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-49j5jp" data-svelte-h="svelte-6vf5i4"><p class="svelte-49j5jp">© 2023 - Tous droits réservés à la team Pinpin  - Mentions légales</p></footer> </div>`;
});
export {
  Layout as default
};
