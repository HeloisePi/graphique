import { c as create_ssr_component, a as add_attribute, e as escape } from "./ssr.js";
const FilAriane_svelte_svelte_type_style_lang = "";
const css = {
  code: ".filAriane.svelte-qumwfx{text-align:center;color:black;padding-top:5rem}a.svelte-qumwfx{color:black}a.svelte-qumwfx:hover{text-decoration:underline}p.svelte-qumwfx{display:flex;justify-content:center;gap:0.25rem}",
  map: null
};
const FilAriane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageName } = $$props;
  let { pageSrc } = $$props;
  if ($$props.pageName === void 0 && $$bindings.pageName && pageName !== void 0)
    $$bindings.pageName(pageName);
  if ($$props.pageSrc === void 0 && $$bindings.pageSrc && pageSrc !== void 0)
    $$bindings.pageSrc(pageSrc);
  $$result.css.add(css);
  return `<p class="filAriane svelte-qumwfx"><a href="../" class="svelte-qumwfx" data-svelte-h="svelte-z0a1um">Team Pinpin</a> &gt; <a${add_attribute("href", pageSrc, 0)} class="svelte-qumwfx">${escape(pageName)}</a> ${slots.default ? slots.default({}) : ``}</p>`;
});
export {
  FilAriane as F
};
