import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute } from "../../../chunks/ssr.js";
import { F as FilAriane } from "../../../chunks/FilAriane.js";
const SagaTitle_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: 'h2.svelte-11pjq2l::after{content:"";background-color:#D7B764;width:60%;height:1px;display:block;margin-bottom:2rem}',
  map: null
};
const SagaTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<h2 class="svelte-11pjq2l">${slots.default ? slots.default({}) : ``}</h2>`;
});
const Tome_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".imageDescription.svelte-1ep0hbe{display:flex;gap:1rem}.tome.svelte-1ep0hbe{margin:0 auto}.description.svelte-1ep0hbe{margin-bottom:1rem}@media screen and (max-width: 720px){.imageDescription.svelte-1ep0hbe{flex-direction:column}}",
  map: null
};
const Tome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tomeNumber } = $$props;
  let { description } = $$props;
  let { question } = $$props;
  let { srcBuy = "" } = $$props;
  let { link = "" } = $$props;
  console.log(link);
  if ($$props.tomeNumber === void 0 && $$bindings.tomeNumber && tomeNumber !== void 0)
    $$bindings.tomeNumber(tomeNumber);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.srcBuy === void 0 && $$bindings.srcBuy && srcBuy !== void 0)
    $$bindings.srcBuy(srcBuy);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$4);
  return `<div class="tome svelte-1ep0hbe">${validate_component(SagaTitle, "SagaTitle").$$render($$result, {}, {}, {
    default: () => {
      return `Tome ${escape(tomeNumber)}`;
    }
  })} <div class="imageDescription svelte-1ep0hbe">${slots.default ? slots.default({}) : ``} <div class="descriptionBouton"><p class="description svelte-1ep0hbe">${escape(description)}</p> <p>${escape(question)}</p> ${link ? `<a${add_attribute("href", link, 0)}><p data-svelte-h="svelte-epi4jj">En savoir plus &gt;</p></a>` : ``} ${srcBuy ? `<a${add_attribute("href", srcBuy, 0)}><p data-svelte-h="svelte-1al0rso">Acheter &gt;</p></a>` : ``}</div></div> </div>`;
});
const Carousel_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".carousel.svelte-1eq3z6j{display:flex;gap:5rem;overflow:scroll;scroll-behavior:auto;scroll-margin-block-start:750px;overflow-x:scroll;overflow-y:hidden}.firstQuotation.svelte-1eq3z6j{transform:translate(-6rem, 2rem)}.endQuotation.svelte-1eq3z6j{transform:translate(0rem, -3rem);margin-left:80vw}@media screen and (max-width: 1000px){img.svelte-1eq3z6j{display:none}}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="contenaire"><img class="firstQuotation svelte-1eq3z6j" src="/images/logo/quotation.svg" alt="guillement"> <div class="carousel svelte-1eq3z6j">${slots.default ? slots.default({}) : ``}</div> <img class="endQuotation svelte-1eq3z6j" src="/images/logo/quotationEnd.svg" alt="guillement"> </div>`;
});
const Quotation_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "p.svelte-8pwumj{width:750px}.name.svelte-8pwumj{text-align:end}div.svelte-8pwumj{display:flex;flex-direction:column;gap:1rem}@media screen and (max-width: 1000px){p.svelte-8pwumj{width:50vw;font-size:12px}}@media screen and (max-width: 400px){p.svelte-8pwumj{width:70vw}}",
  map: null
};
const Quotation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { opinion } = $$props;
  let { namePersonne } = $$props;
  if ($$props.opinion === void 0 && $$bindings.opinion && opinion !== void 0)
    $$bindings.opinion(opinion);
  if ($$props.namePersonne === void 0 && $$bindings.namePersonne && namePersonne !== void 0)
    $$bindings.namePersonne(namePersonne);
  $$result.css.add(css$2);
  return `<div class=" svelte-8pwumj"><p class="svelte-8pwumj">${escape(opinion)}</p> <p class="name svelte-8pwumj">${escape(namePersonne)}</p> </div>`;
});
const Opinion_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-18anm1t,a.svelte-18anm1t{display:flex;justify-content:center ;align-items:center;flex-direction:column}p.svelte-18anm1t{text-align:center}img.svelte-18anm1t{width:100px}@media screen and (max-width: 900px){img.svelte-18anm1t{width:50px}p.svelte-18anm1t{font-size:12px}}",
  map: null
};
const Opinion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { srcImg } = $$props;
  let { name } = $$props;
  let { link } = $$props;
  if ($$props.srcImg === void 0 && $$bindings.srcImg && srcImg !== void 0)
    $$bindings.srcImg(srcImg);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$1);
  return `<div class="svelte-18anm1t"><a${add_attribute("href", link, 0)} class="svelte-18anm1t"><img${add_attribute("src", srcImg, 0)} alt="De profil" class="svelte-18anm1t"> <p class="svelte-18anm1t">${escape(name)}</p></a> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1whc0me.svelte-1whc0me{display:flex;flex-direction:column;gap:9rem}.allOpinion.svelte-1whc0me.svelte-1whc0me{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;row-gap:1rem;padding-bottom:10rem;margin:0 auto}@media screen and (max-width: 1100px){.allOpinion.svelte-1whc0me.svelte-1whc0me{grid-template-columns:1fr 1fr 1fr 1fr}}@media screen and (max-width: 750px){.allOpinion.svelte-1whc0me.svelte-1whc0me{grid-template-columns:1fr 1fr 1fr}div.svelte-1whc0me .citation.svelte-1whc0me{width:90%}}@media screen and (max-width: 450px){.allOpinion.svelte-1whc0me.svelte-1whc0me{grid-template-columns:1fr 1fr}}@media screen and (max-width: 326px){.allOpinion.svelte-1whc0me.svelte-1whc0me{grid-template-columns:1fr}}section.svelte-1whc0me.svelte-1whc0me{width:80vw;margin:0 auto}h1.svelte-1whc0me.svelte-1whc0me{text-align:center}.citation.svelte-1whc0me.svelte-1whc0me{text-align:center;width:50%;margin:0 auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ucqweu_START -->${$$result.title = `<title>La Saga Illustrée</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-ucqweu_END -->`, ""} ${validate_component(FilAriane, "FilAriane").$$render(
    $$result,
    {
      pageName: "La Saga Illustrée",
      pageSrc: "/saga"
    },
    {},
    {}
  )} <section class="svelte-1whc0me"><div class=" svelte-1whc0me" data-svelte-h="svelte-ka1xb9"><h1 class="svelte-1whc0me">La Saga Illustrée</h1> <p class="citation svelte-1whc0me">Laissez-vous entraîner dans
            un univers captivant où réel et imaginaire se côtoient dans
            une épopée fascinante.</p></div> ${validate_component(Tome, "Tome").$$render(
    $$result,
    {
      tomeNumber: "1",
      description: "Dans un univers allégorique qui pourrait ressembler au nôtre,\n        une catastrophe mondiale survenue vingt et un ans plus tôt a tué beaucoup d’humains,\n        tout en conférant des dons spéciaux aux survivants. Cependant, nos héros, quatre\n        jeunes adultes (une Européenne, une Américaine, un Africain et un Asiatique) n’en\n        ont pas… apparemment. Ils ne se connaissent pas et ne vivent pas sur le même\n        continent. Toutefois, ils sont nés tous les quatre orphelins, un quatre avril\n        à minuit, lors de l’éclipse planétaire. À l’approche de leur anniversaire, ils\n        font des rêves étranges et comprennent qu’ils doivent se rendre à un endroit\n        précis sans savoir pourquoi. Un oracle séculaire leur confie une mission :\n        retrouver les médaillons oubliés. Dès lors, ils ne se quitteront plus et nous\n        les suivrons dans leur quête à Paris, Le Caire, Bali, en passant par\n        Saint-Pétersbourg et l’Italie, mais aussi en Nouvelle-Zélande. ",
      question: "Que représentent ces médaillons ? Peut-être cela a-t-il un lien avant la légende ancienne que la vieille chamane raconte à sa petite fille au début du roman ?\n        Êtes-vous prêts à découvrir leur histoire ?",
      srcBuy: "https://www.amazon.fr/m%C3%A9daillons-oubli%C3%A9s-Mariane-Gahengi/dp/2384411195/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=Z11S9AI77GKY&keywords=les+m%C3%A9daillons+oubli%C3%A9s&qid=1683803969&sprefix=les+m%C3%A9daillons+oubli%C3%A9s,aps,119&sr=8-1",
      link: ""
    },
    {},
    {
      default: () => {
        return `<img src="/images/book.webp" alt="couverture tome 1">`;
      }
    }
  )} ${validate_component(Tome, "Tome").$$render(
    $$result,
    {
      tomeNumber: "2",
      description: "Les premières notes de Non, je ne regrette rien, résonnent dans les écouteurs discrets de la jeune fille. Elle marque le rythme de mouvements saccadés de la tête, ses yeux bridés fermés, ses deux longues tresses africaines blondes se balançant d’un côté et de l’autre d’un visage rond et noir. Elle agite les bras, tenant une fine baguette invisible de la main droite, imitant le chef d’orchestre dans sa volonté de synchroniser les cuivres, les basses et les violons. Tout son corps, calé dans un fauteuil, devant trois écrans sur lesquels des lignes ininterrompues de chiffres défilent, vibre, se laissant transporter par l’envolée des altos. Soudain, elle entrouvre les yeux, les écarquille, fronce son nez aquilin. Le bleu profond de son regard est attiré par un cercle concentrique tournoyant, entouré de points noirs, qui apparaît sur le fond blanc des ordinateurs.",
      question: "Quel est ce message ? Aiderez-vous les Quatre et leurs nouveaux amis à résoudre ce nouveau mystère ?",
      srcBuy: "",
      link: ""
    },
    {},
    {
      default: () => {
        return `<slop data-svelte-h="svelte-x3uzjv"><img src="/images/saga/tome2.webp" alt="couverture tome 2"> <p>En cours d’écriture</p></slop>`;
      }
    }
  )} <div class="">${validate_component(SagaTitle, "SagaTitle").$$render($$result, {}, {}, {
    default: () => {
      return `Ils donnent leurs avis`;
    }
  })} <p data-svelte-h="svelte-7oco1y">Glisse sur le coté pour voir les avis</p> ${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Quotation, "Quotation").$$render(
        $$result,
        {
          opinion: "WoW. J’ai adoré me plonger dans cet univers fantastique. Ce 1er tome est très prometteur. Le lecteur est plongé dans cette quête, aux côtés de ce groupe de jeunes adultes. L’univers est riche en descriptions, et permet au lecteur de ce plonger pleinement dans sa lecture. Tour à tour, on suit chacun de ces personnages aux 4 coins du monde. J’ai beaucoup aimé le fait que chaque personnage ai son caractère bien à lui, sa personnalité bien marqué. On sent le réel travail de l’auteure lors de l’écriture de ce livre, les détails parfaitement bien travaillés afin que rien ne soit laissé dans le flou. La dynamique de l’écriture et la fluidité de la plume, transporte et tient en haleine le lecteur. J’ai hâte de voir ce que nous réserve la suite.Je recommande vivement ce superbe univers.",
          namePersonne: "mi_and_my_books, via instagram"
        },
        {},
        {}
      )} ${validate_component(Quotation, "Quotation").$$render(
        $$result,
        {
          opinion: "J’ai découvert cette œuvre car l’autrice m’a fait confiance et pour ça je lui dis MERCI! J’ai directement été happée par l’histoire. Les illustrions ont été magnifiques et m’ont permis de me plonger encore plus dans ma lecture. La plume est détaillée mais fluide ce qui facilite et rend la lecture très plaisante. Elle est imagée ce qui m’a permis de laisser vagabonder mon imagination et m’a donné la sensation d’être présente aux différents lieux 🥰 Les Quatres quant à eux sont simples et bien développés. Malgré l’univers sur les dons, on s’attache et s’identifie à eux ! On peut suivre leur aventure et le danger qu’ils courent grâce aux différents PDV ce qui est un énorme + pour moi car j’apprécie le fait d’avoir un POV omniscient ! Ainsi, on peut suivre leur évolution mental et amical car n’oublions pas qu’à la base ce sont 4 adolescents que tout oppose mais qui partagent 2 choses : leurs voyages dans le monde onirique et leur anniversaire Allez vous le procurer pour passer un bon moment !",
          namePersonne: "Dubois Gwenola, via Book.Node"
        },
        {},
        {}
      )} ${validate_component(Quotation, "Quotation").$$render(
        $$result,
        {
          opinion: "Au début j’ai eu un peu de mal à rentrer dans l’histoire. Mais dès le premier rebondissement j’étais dedans et j’ai enchaîné les pages. Le livre est plutôt court donc cela a aidé. L’écriture est vraiment addictive. Les personnages sont attachants, j’ai vécu chaque aventures avec eux. Les illustrations apportent une immersion en plus dans l’histoire., tout comme les lieux et paysages qui sont très bien détaillés.",
          namePersonne: "Les Lectures de Charlotte, via wordpress.com"
        },
        {},
        {}
      )} ${validate_component(Quotation, "Quotation").$$render(
        $$result,
        {
          opinion: "Une petite lecture bien agréable pour changer de mes chers polars et thrillers. Tout d'abord, je vais vous parler du public cible. A mon sens, on est sur du tout public, jeunes et adultes y trouveront leur compte. \n            Le style est fluide, très agréable et on est vite pris dans l'histoire. J'aime beaucoup que l'auteure varille dans le vocabulaire pour s'adapter aux personnages et au narrateur. Quand aux quatre protagonistes, ils sont excellemment bien conçus. \n            Touchanst et intéressants, ils sont très réalistes, tout comme les paysages et décor.\n            L'histoire avec une enquête minutieuse pour retrouver les fameux médaillons est très bien conçue.\n            Je vous conseille vivement cette petite histoire\n            \n            ",
          namePersonne: "randy_tout, via gleeph"
        },
        {},
        {}
      )} ${validate_component(Quotation, "Quotation").$$render(
        $$result,
        {
          opinion: "Ce livre était très chouette. L'écriture était fluide, les lieux étaient détaillés de telle manière qu'il n'était pas difficile de se les représenter. Par sa plume l'auteur à su me faire voyager à travers son histoire. J'avais parfois même l'impression de voir un film tellement les scènes se jouaient parfaitement dans mon esprit.\n            Les personnages, eux étaient attachants, toujours en action ce qui fait que l'on ne s'ennuyait jamais.\n            Alors si cette lecture vous intéresse, à vos poste et bonne lecture, elle le mérite!",
          namePersonne: "Atraxi, via instagram"
        },
        {},
        {}
      )}`;
    }
  })} ${validate_component(SagaTitle, "SagaTitle").$$render($$result, {}, {}, {
    default: () => {
      return `Voir d&#39;autres avis`;
    }
  })} <div class="allOpinion svelte-1whc0me">${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/1.webp",
      name: "Angélique",
      link: "https://booknode.com/quatre_tome_1_les_medaillons_oublies_03458466"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/2.webp",
      name: "la_bibiotheque_de_ju",
      link: "https://www.instagram.com/p/Cu4x9pYKeXS/"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/3.webp",
      name: "Valérie",
      link: "https://www.instagram.com/reel/Cu2Eru1RQUU/"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/4.webp",
      name: "Clara",
      link: "https://petitehirondelle.fr/2023/08/02/quatre-tome-1-les-medaillons-oublies-mariane-gahengi-maia/"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/5.webp",
      name: "MarieFourmi",
      link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3555712"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/6.webp",
      name: "Atraxi",
      link: "https://www.instagram.com/p/Cq7e_VfqIii/"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/7.webp",
      name: "lireetpartage",
      link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3316007"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/8.webp",
      name: "Christine\n            Le Bouffo",
      link: "https://www.calameo.com/read/0065702885c591add7a66"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/9.webp",
      name: "bulles de livres",
      link: "https://www.instagram.com/p/CkbuixsruJQ/"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/10.webp",
      name: "sylvicha",
      link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3241566"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/11.webp",
      name: "Navol",
      link: "https://www.facebook.com/photo/?fbid=653019436391805&set=a.263320925361660"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/12.webp",
      name: "Mi_and_my_books",
      link: "https://www.instagram.com/p/CpxNqxzKv_Z/"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/13.webp",
      name: "Marina_42",
      link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3311295"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/14.webp",
      name: "Codrick \n            S. Mutima",
      link: "https://m.facebook.com/story.php?story_fbid=pfbid02Pm2vnxsDSxgxBWtohi2t4EARcjyMbypbZyC1AyzmAimXtTt6F3XM8wLZTH4dFQfNl&id=100083027117728"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/15.webp",
      name: "Critiques de \n            Margaux",
      link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3158871"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/16.webp",
      name: "Lila Deslys",
      link: "https://lila-deslys.blogspot.com/2022/09/chronique-quatre-1-mariane-gahengi.html"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/17.webp",
      name: "Dubois Gwenola",
      link: "https://booknode.com/quatre_tome_1_les_medaillons_oublies_03458466/commentaires/23889611"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/18.webp",
      name: "bookread",
      link: "https://www.tiktok.com/@.bookread/video/7227892648252640539"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/19.webp",
      name: "lectures_decha",
      link: "https://lecturesdecharlotteword.wordpress.com/2022/09/25/les-medaillons-oublies-de-mariane-gahengi/"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/20.webp",
      name: "bull_livres",
      link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3289089"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/21.webp",
      name: "randy_tout",
      link: "https://gleeph.com/share/review/9782384411191-7B36756D831D4C0192129F9A7625000D?_branch_match_id=1187634126043349724&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nL1kvPSU0tyNDLSy3RL400M8jwNU8MqUoCAMDYkNQiAAAA"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/22.webp",
      name: "Nathalie Cussonnier",
      link: "https://www.facebook.com/photo/?fbid=206701555551770&set=a.114106001477993"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/23.webp",
      name: "poudredenuage",
      link: "https://www.instagram.com/p/CsqK3S-qTqv/?img_index=1"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/24.webp",
      name: "Sous la plume\n            de Garance",
      link: "http://souslaplumedegarance.hautetfort.com/archive/2023/05/30/les-medaillon-oublies-tome-1-un-roman-de-fantasy-initiatique-6445559.html#more"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/34.webp",
      name: "Leslivresdepatmol",
      link: "https://www.instagram.com/p/Ct6KjCILnhM/"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/25.webp",
      name: "Cassyleedria",
      link: "https://www.tiktok.com/@sarahsandra13/video/7248865921186483483?is_from_webapp=1&web_id=7248153000173471259"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/26.webp",
      name: "valoulauwers",
      link: "https://www.tiktok.com/@valouvalou476/video/7249349193632943387?_r=1&_t=8dW5vuhtkZm"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/27.webp",
      name: "bibli_olivres",
      link: "https://www.instagram.com/p/CuFoRPqtG9K/"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/28.webp",
      name: "la.liseuse.en.serie\n            \n            ",
      link: "https://www.instagram.com/p/CuMC9l9qFnl/"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/29.webp",
      name: "Livresduracoon",
      link: "https://www.instagram.com/p/Cw9pObDqPuF/"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/30.webp",
      name: "onionidra\n            \n            ",
      link: "https://www.instagram.com/p/Cw-xS2GMU7T/"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/31.webp",
      name: "LaBulleCoco",
      link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3622060?modifier=1"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/32.webp",
      name: "dans_les_yeux_de_mallia\n            \n            ",
      link: "https://www.instagram.com/p/Cyz-T3iKkNb/"
    },
    {},
    {}
  )} ${validate_component(Opinion, "Opinion").$$render(
    $$result,
    {
      srcImg: "/images/opinion/33.webp",
      name: "Traicy Books",
      link: "https://www.instagram.com/p/Cy9-D5DupvQ/?img_index=1"
    },
    {},
    {}
  )}</div></div> </section>`;
});
export {
  Page as default
};
