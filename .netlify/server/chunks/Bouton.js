import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
const Bouton_svelte_svelte_type_style_lang = "";
const css = {
  code: 'a.svelte-mqrpaf{text-decoration:none;height:fit-content;width:fit-content;position:relative}a.svelte-mqrpaf::before{content:"";bottom:-0.25rem;position:absolute;background-color:black;width:100%;height:1px;transition:width 0.35s ease-out}a.svelte-mqrpaf:hover::before{background-color:#D7B764;width:5px}p.svelte-mqrpaf{color:black;transition:0.35s ease-out}p.svelte-mqrpaf:hover{color:#D7B764}',
  map: null
};
const Bouton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  $$result.css.add(css);
  return `<a${add_attribute("href", src, 0)} class="svelte-mqrpaf"><p class="svelte-mqrpaf">${slots.default ? slots.default({}) : ``} &gt;</p> </a>`;
});
export {
  Bouton as B
};
