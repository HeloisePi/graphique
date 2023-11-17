import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { B as Bouton } from "../../../chunks/Bouton.js";
import { F as FilAriane } from "../../../chunks/FilAriane.js";
const Photo_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-jwzpi5.svelte-jwzpi5{width:max-content;display:flex;flex-direction:column;justify-content:center;align-items:center;height:44vh}h2.svelte-jwzpi5.svelte-jwzpi5{text-align:center}.images.svelte-jwzpi5.svelte-jwzpi5{display:flex;width:auto;margin-top:4rem}img.svelte-jwzpi5.svelte-jwzpi5{width:inherit;transition:500ms}img.svelte-jwzpi5.svelte-jwzpi5:hover{transform:scale(110%)}section.svelte-jwzpi5 div.svelte-jwzpi5{width:13rem;height:13rem}.start.svelte-jwzpi5.svelte-jwzpi5{transform:translateX(3rem)}.end.svelte-jwzpi5.svelte-jwzpi5{transform:translateX(-3rem)}.midel.svelte-jwzpi5.svelte-jwzpi5{transform:translateY(-3rem);z-index:1}.midelImg.svelte-jwzpi5.svelte-jwzpi5{z-index:0;position:relative}.bouton.svelte-jwzpi5.svelte-jwzpi5{margin-top:3rem;transform:translateX(9rem);width:fit-content}@media screen and (max-width: 700px){.start.svelte-jwzpi5.svelte-jwzpi5,.midel.svelte-jwzpi5.svelte-jwzpi5,.end.svelte-jwzpi5.svelte-jwzpi5,img.svelte-jwzpi5.svelte-jwzpi5{width:15vw;height:15vw}.bouton.svelte-jwzpi5.svelte-jwzpi5{margin-top:1rem;transform:translateX(0)}h2.svelte-jwzpi5.svelte-jwzpi5{font-size:20px;text-wrap:nowrap}.start.svelte-jwzpi5.svelte-jwzpi5{transform:translateX(0.5vw)}.end.svelte-jwzpi5.svelte-jwzpi5{transform:translateX(-0.5vw)}.midel.svelte-jwzpi5.svelte-jwzpi5{transform:translateY(-1vw);z-index:1}.images.svelte-jwzpi5.svelte-jwzpi5{margin-top:1rem;height:fit-content}section.svelte-jwzpi5.svelte-jwzpi5{width:fit-content;height:fit-content}}",
  map: null
};
const Photo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { srcImg1 } = $$props;
  let { srcImg2 } = $$props;
  let { srcImg3 } = $$props;
  let { src } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.srcImg1 === void 0 && $$bindings.srcImg1 && srcImg1 !== void 0)
    $$bindings.srcImg1(srcImg1);
  if ($$props.srcImg2 === void 0 && $$bindings.srcImg2 && srcImg2 !== void 0)
    $$bindings.srcImg2(srcImg2);
  if ($$props.srcImg3 === void 0 && $$bindings.srcImg3 && srcImg3 !== void 0)
    $$bindings.srcImg3(srcImg3);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  $$result.css.add(css$1);
  return `<section class="svelte-jwzpi5"><h2 class="svelte-jwzpi5">${escape(title)}</h2> <div class="images svelte-jwzpi5"><div class="start svelte-jwzpi5"><img${add_attribute("src", srcImg1, 0)} alt="image1" class="svelte-jwzpi5"></div> <div class="midel svelte-jwzpi5"><img class="midelImg svelte-jwzpi5"${add_attribute("src", srcImg2, 0)} alt="image2"></div> <div class="end svelte-jwzpi5"><img${add_attribute("src", srcImg3, 0)} alt="image3" class="svelte-jwzpi5"></div></div> <div class="bouton svelte-jwzpi5">${validate_component(Bouton, "Bouton").$$render($$result, { src }, {}, {
    default: () => {
      return `Voir plus`;
    }
  })}</div> </section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".instruction.svelte-e5w9hf.svelte-e5w9hf{margin-left:10rem;margin-bottom:2rem}.images.svelte-e5w9hf.svelte-e5w9hf{width:100vw;padding-left:2rem;padding-right:2rem;display:flex;overflow:scroll;scroll-behavior:auto;scroll-margin-block-start:20px;overflow-x:scroll}h1.svelte-e5w9hf.svelte-e5w9hf{text-align:center;margin-top:3rem}p.svelte-e5w9hf.svelte-e5w9hf{width:50vw}.about.svelte-e5w9hf.svelte-e5w9hf{width:100vw;height:60vh;padding:10rem;display:flex;flex-direction:column;justify-content:space-between}.about.svelte-e5w9hf div.svelte-e5w9hf{width:100%;display:flex;justify-content:end}.right.svelte-e5w9hf.svelte-e5w9hf{text-align:right}@media screen and (max-width: 1000px){.about.svelte-e5w9hf.svelte-e5w9hf{height:80vh}}@media screen and (max-width: 700px){.about.svelte-e5w9hf.svelte-e5w9hf{height:fit-content;padding:2rem;width:100vw;margin:auto;display:flex;justify-content:center;flex-direction:column;align-items:center}.right.svelte-e5w9hf.svelte-e5w9hf{text-align:start}.about.svelte-e5w9hf div.svelte-e5w9hf{width:fit-content;display:block}p.svelte-e5w9hf.svelte-e5w9hf{width:fit-content}.images.svelte-e5w9hf.svelte-e5w9hf{gap:2rem}.instruction.svelte-e5w9hf.svelte-e5w9hf{margin-left:50%;transform:translateX(-50%)}}@media screen and (max-width: 755px){h1.svelte-e5w9hf.svelte-e5w9hf{font-size:50px;text-align:center}}@media screen and (max-width: 555px){h1.svelte-e5w9hf.svelte-e5w9hf{font-size:35px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1kk1fpe_START -->${$$result.title = `<title>Les Création de Serge</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1kk1fpe_END -->`, ""} ${validate_component(FilAriane, "FilAriane").$$render(
    $$result,
    {
      pageName: "Les créations de Serge",
      pageSrc: "/creationSerge"
    },
    {},
    {}
  )}  <h1 class="svelte-e5w9hf" data-svelte-h="svelte-1id4ccf">Les créations de Serge</h1> <div class="about svelte-e5w9hf" data-svelte-h="svelte-cyjmys"><p class="svelte-e5w9hf">Mon inspiration trouve sa source dans ce qui m’émeut : 
        l’expression d’un regard, la tendresse d’un visage ou encore l’atmosphère
        d’un paysage.
        Et j’essaie humblement de révéler cette émotion dans mes œuvres. </p> <div class=" svelte-e5w9hf"><p class="right svelte-e5w9hf">Je suis peintre amateur autodidacte et j’ai redécouvert en 2020 le bonheur
            de peindre
            et de dessiner sans contrainte, juste pour le plaisir de la création.</p></div></div> <p class="instruction svelte-e5w9hf" data-svelte-h="svelte-13cga0d">Glisse sur le côté pour voir mes peintures 🖌️</p> <div class="images svelte-e5w9hf">${validate_component(Photo, "Photo").$$render(
    $$result,
    {
      title: "Les noirs et blancs",
      srcImg1: "/images/photoCreationSerge/img1.webp",
      srcImg2: "/images/photoCreationSerge/img2.webp",
      srcImg3: "/images/photoCreationSerge/img3.webp",
      src: "/creationSerge/lesnoirsetblancs"
    },
    {},
    {}
  )} ${validate_component(Photo, "Photo").$$render(
    $$result,
    {
      title: "Les Huiles ",
      srcImg1: "/images/photoCreationSerge/img4.webp",
      srcImg2: "/images/photoCreationSerge/img5.webp",
      srcImg3: "/images/photoCreationSerge/img6.webp",
      src: "/creationSerge/leshuiles"
    },
    {},
    {}
  )} ${validate_component(Photo, "Photo").$$render(
    $$result,
    {
      title: "Paysage",
      srcImg1: "/images/photoCreationSerge/img7.webp",
      srcImg2: "/images/photoCreationSerge/img8.webp",
      srcImg3: "/images/photoCreationSerge/img9.webp",
      src: "/creationSerge/paysage"
    },
    {},
    {}
  )} ${validate_component(Photo, "Photo").$$render(
    $$result,
    {
      title: "Mécanique",
      srcImg1: "/images/photoCreationSerge/img10.webp",
      srcImg2: "/images/photoCreationSerge/img11.webp",
      srcImg3: "/images/photoCreationSerge/img12.webp",
      src: "/creationSerge/mecanique"
    },
    {},
    {}
  )} </div>`;
});
export {
  Page as default
};
