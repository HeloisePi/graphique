import { c as create_ssr_component, v as validate_component, b as each, a as add_attribute } from "../../../../chunks/ssr.js";
import { F as FilAriane } from "../../../../chunks/FilAriane.js";
import { G as GridImage, l as leshuiles } from "../../../../chunks/imagesList.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-42ysri{margin-bottom:10rem}h1.svelte-42ysri{margin-top:5rem;text-align:center}img.svelte-42ysri{width:15rem;height:fit-content;transition:500ms}img.svelte-42ysri:hover{transform:scale(110%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(FilAriane, "FilAriane").$$render(
    $$result,
    {
      pageName: "Les créations de Serge",
      pageSrc: "/creationSerge"
    },
    {},
    {
      default: () => {
        return `<p data-svelte-h="svelte-1cg2jcq">&gt;</p> <a href="/creationSerge/leshuiles" data-svelte-h="svelte-j1o5e7">les huiles</a>`;
      }
    }
  )} <h1 class="svelte-42ysri" data-svelte-h="svelte-1nlvosi">Les Huiles</h1> <div class="svelte-42ysri">${validate_component(GridImage, "GridImage").$$render($$result, {}, {}, {
    default: () => {
      return `${each(leshuiles, (src) => {
        return `<img${add_attribute("src", src, 0)} alt="tableau Serge Pingitore sur le théme des huiles" class="svelte-42ysri">`;
      })}`;
    }
  })} </div>`;
});
export {
  Page as default
};
