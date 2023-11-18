<script>
    import FilAriane from "../Componante/utilities/FilAriane.svelte";
    import Tome from "../Componante/Tome.svelte";
	import SagaTitle from "../Componante/utilities/SagaTitle.svelte";
	import Carousel from "../Componante/Carousel.svelte";
	import Quotation from "../Componante/utilities/Quotation.svelte";
	import Opinion from "../Componante/utilities/Opinion.svelte";

</script>

<svelte:head>
	<title>La Saga Illustrée</title>
	<meta name="description" content="Laissez-vous entraîner dans
    un univers captivant où réel et imaginaire se côtoient dans
    une épopée fascinante." />
</svelte:head>

<FilAriane
    pageName = "La Saga Illustrée"
    pageSrc = "/saga"
/>
<section>
    <div class=""> 
        <h1>La Saga Illustrée</h1>
        <p class="citation">Laissez-vous entraîner dans
            un univers captivant où réel et imaginaire se côtoient dans
            une épopée fascinante.</p>
    </div>
            
            <Tome 
        tomeNumber="1"
        description="Dans un univers allégorique qui pourrait ressembler au nôtre,
        une catastrophe mondiale survenue vingt et un ans plus tôt a tué beaucoup d’humains,
        tout en conférant des dons spéciaux aux survivants. Cependant, nos héros, quatre
        jeunes adultes (une Européenne, une Américaine, un Africain et un Asiatique) n’en
        ont pas… apparemment. Ils ne se connaissent pas et ne vivent pas sur le même
        continent. Toutefois, ils sont nés tous les quatre orphelins, un quatre avril
        à minuit, lors de l’éclipse planétaire. À l’approche de leur anniversaire, ils
        font des rêves étranges et comprennent qu’ils doivent se rendre à un endroit
        précis sans savoir pourquoi. Un oracle séculaire leur confie une mission :
        retrouver les médaillons oubliés. Dès lors, ils ne se quitteront plus et nous
        les suivrons dans leur quête à Paris, Le Caire, Bali, en passant par
        Saint-Pétersbourg et l’Italie, mais aussi en Nouvelle-Zélande. "
        question="Que représentent ces médaillons ? Peut-être cela a-t-il un lien avant la légende ancienne que la vieille chamane raconte à sa petite fille au début du roman ?
        Êtes-vous prêts à découvrir leur histoire ?"
        srcBuy="https://www.amazon.fr/m%C3%A9daillons-oubli%C3%A9s-Mariane-Gahengi/dp/2384411195/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=Z11S9AI77GKY&keywords=les+m%C3%A9daillons+oubli%C3%A9s&qid=1683803969&sprefix=les+m%C3%A9daillons+oubli%C3%A9s,aps,119&sr=8-1"
        link=""
        >
        <img src="/images/book.webp" alt="couverture tome 1">
    </Tome>
    
    <Tome 
    tomeNumber="2"
    description="Les premières notes de Non, je ne regrette rien, résonnent dans les écouteurs discrets de la jeune fille. Elle marque le rythme de mouvements saccadés de la tête, ses yeux bridés fermés, ses deux longues tresses africaines blondes se balançant d’un côté et de l’autre d’un visage rond et noir. Elle agite les bras, tenant une fine baguette invisible de la main droite, imitant le chef d’orchestre dans sa volonté de synchroniser les cuivres, les basses et les violons. Tout son corps, calé dans un fauteuil, devant trois écrans sur lesquels des lignes ininterrompues de chiffres défilent, vibre, se laissant transporter par l’envolée des altos. Soudain, elle entrouvre les yeux, les écarquille, fronce son nez aquilin. Le bleu profond de son regard est attiré par un cercle concentrique tournoyant, entouré de points noirs, qui apparaît sur le fond blanc des ordinateurs."
    question="Quel est ce message ? Aiderez-vous les Quatre et leurs nouveaux amis à résoudre ce nouveau mystère ?"
    srcBuy=""
    link=""
    >
    <slop> <img src="/images/saga/tome2.webp" alt="couverture tome 2">
        <p>En cours d’écriture</p></slop>
    </Tome>
    <div class="">

        <SagaTitle>Ils donnent leurs avis</SagaTitle>
        <p>Glisse sur le coté pour voir les avis</p>
        <Carousel>
            <Quotation
            opinion="WoW. J’ai adoré me plonger dans cet univers fantastique. Ce 1er tome est très prometteur. Le lecteur est plongé dans cette quête, aux côtés de ce groupe de jeunes adultes. L’univers est riche en descriptions, et permet au lecteur de ce plonger pleinement dans sa lecture. Tour à tour, on suit chacun de ces personnages aux 4 coins du monde. J’ai beaucoup aimé le fait que chaque personnage ai son caractère bien à lui, sa personnalité bien marqué. On sent le réel travail de l’auteure lors de l’écriture de ce livre, les détails parfaitement bien travaillés afin que rien ne soit laissé dans le flou. La dynamique de l’écriture et la fluidité de la plume, transporte et tient en haleine le lecteur. J’ai hâte de voir ce que nous réserve la suite.Je recommande vivement ce superbe univers."
            namePersonne="mi_and_my_books, via instagram"
            />
            <Quotation
            opinion="J’ai découvert cette œuvre car l’autrice m’a fait confiance et pour ça je lui dis MERCI! J’ai directement été happée par l’histoire. Les illustrions ont été magnifiques et m’ont permis de me plonger encore plus dans ma lecture. La plume est détaillée mais fluide ce qui facilite et rend la lecture très plaisante. Elle est imagée ce qui m’a permis de laisser vagabonder mon imagination et m’a donné la sensation d’être présente aux différents lieux 🥰 Les Quatres quant à eux sont simples et bien développés. Malgré l’univers sur les dons, on s’attache et s’identifie à eux ! On peut suivre leur aventure et le danger qu’ils courent grâce aux différents PDV ce qui est un énorme + pour moi car j’apprécie le fait d’avoir un POV omniscient ! Ainsi, on peut suivre leur évolution mental et amical car n’oublions pas qu’à la base ce sont 4 adolescents que tout oppose mais qui partagent 2 choses : leurs voyages dans le monde onirique et leur anniversaire Allez vous le procurer pour passer un bon moment !"
            namePersonne="Dubois Gwenola, via Book.Node"
            />
            <Quotation
            opinion="Au début j’ai eu un peu de mal à rentrer dans l’histoire. Mais dès le premier rebondissement j’étais dedans et j’ai enchaîné les pages. Le livre est plutôt court donc cela a aidé. L’écriture est vraiment addictive. Les personnages sont attachants, j’ai vécu chaque aventures avec eux. Les illustrations apportent une immersion en plus dans l’histoire., tout comme les lieux et paysages qui sont très bien détaillés."
            namePersonne="Les Lectures de Charlotte, via wordpress.com"
            />
            <Quotation
            opinion="Une petite lecture bien agréable pour changer de mes chers polars et thrillers. Tout d'abord, je vais vous parler du public cible. A mon sens, on est sur du tout public, jeunes et adultes y trouveront leur compte. 
            Le style est fluide, très agréable et on est vite pris dans l'histoire. J'aime beaucoup que l'auteure varille dans le vocabulaire pour s'adapter aux personnages et au narrateur. Quand aux quatre protagonistes, ils sont excellemment bien conçus. 
            Touchanst et intéressants, ils sont très réalistes, tout comme les paysages et décor.
            L'histoire avec une enquête minutieuse pour retrouver les fameux médaillons est très bien conçue.
            Je vous conseille vivement cette petite histoire
            
            "
            namePersonne="randy_tout, via gleeph"
            />
            <Quotation
            opinion="Ce livre était très chouette. L'écriture était fluide, les lieux étaient détaillés de telle manière qu'il n'était pas difficile de se les représenter. Par sa plume l'auteur à su me faire voyager à travers son histoire. J'avais parfois même l'impression de voir un film tellement les scènes se jouaient parfaitement dans mon esprit.
            Les personnages, eux étaient attachants, toujours en action ce qui fait que l'on ne s'ennuyait jamais.
            Alors si cette lecture vous intéresse, à vos poste et bonne lecture, elle le mérite!"
            namePersonne="Atraxi, via instagram"
            />
            
            
        </Carousel>
        <SagaTitle>Voir d'autres avis</SagaTitle>
        <div class="allOpinion">
            
            <Opinion 
            srcImg="/images/opinion/1.webp"
            name="Angélique"
            link="https://booknode.com/quatre_tome_1_les_medaillons_oublies_03458466"
            />
            <Opinion 
            srcImg="/images/opinion/2.webp"
            name="la_bibiotheque_de_ju"
            link="https://www.instagram.com/p/Cu4x9pYKeXS/"
            />
            <Opinion 
            srcImg="/images/opinion/3.webp"
            name="Valérie"
            link="https://www.instagram.com/reel/Cu2Eru1RQUU/"
            />
            <Opinion 
            srcImg="/images/opinion/4.webp"
            name="Clara"
            link="https://petitehirondelle.fr/2023/08/02/quatre-tome-1-les-medaillons-oublies-mariane-gahengi-maia/"
            />
            <Opinion 
            srcImg="/images/opinion/5.webp"
            name="MarieFourmi"
            link="https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3555712"
            />
            <Opinion 
            srcImg="/images/opinion/6.webp"
            name="Atraxi"
            link="https://www.instagram.com/p/Cq7e_VfqIii/"
            />
            <Opinion 
            srcImg="/images/opinion/7.webp"
            name="lireetpartage"
            link="https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3316007"
            />
            <Opinion 
            srcImg="/images/opinion/8.webp"
            name="Christine
            Le Bouffo"
            link="https://www.calameo.com/read/0065702885c591add7a66"
            />
            <Opinion 
            srcImg="/images/opinion/9.webp"
            name="bulles de livres"
            link="https://www.instagram.com/p/CkbuixsruJQ/"
            />
            <Opinion 
            srcImg="/images/opinion/10.webp"
            name="sylvicha"
            link="https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3241566"
            />
            <Opinion 
            srcImg="/images/opinion/11.webp"
            name="Navol"
            link="https://www.facebook.com/photo/?fbid=653019436391805&set=a.263320925361660"
            />
            <Opinion 
            srcImg="/images/opinion/12.webp"
            name="Mi_and_my_books"
            link="https://www.instagram.com/p/CpxNqxzKv_Z/"
            />
            <Opinion 
            srcImg="/images/opinion/13.webp"
            name="Marina_42"
            link="https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3311295"
            />
            <Opinion 
            srcImg="/images/opinion/14.webp"
            name="Codrick 
            S. Mutima"
            link="https://m.facebook.com/story.php?story_fbid=pfbid02Pm2vnxsDSxgxBWtohi2t4EARcjyMbypbZyC1AyzmAimXtTt6F3XM8wLZTH4dFQfNl&id=100083027117728"
            />
            <Opinion 
            srcImg="/images/opinion/15.webp"
            name="Critiques de 
            Margaux"
            link="https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3158871"
            />
            <Opinion 
            srcImg="/images/opinion/16.webp"
            name="Lila Deslys"
            link="https://lila-deslys.blogspot.com/2022/09/chronique-quatre-1-mariane-gahengi.html"
            />
            <Opinion 
            srcImg="/images/opinion/17.webp"
            name="Dubois Gwenola"
            link="https://booknode.com/quatre_tome_1_les_medaillons_oublies_03458466/commentaires/23889611"
            />
            <Opinion 
            srcImg="/images/opinion/18.webp"
            name="bookread"
            link="https://www.tiktok.com/@.bookread/video/7227892648252640539"
            />
            <Opinion 
            srcImg="/images/opinion/19.webp"
            name="lectures_decha"
            link="https://lecturesdecharlotteword.wordpress.com/2022/09/25/les-medaillons-oublies-de-mariane-gahengi/"
            />
            <Opinion 
            srcImg="/images/opinion/20.webp"
            name="bull_livres"
            link="https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3289089"
            />
            <Opinion 
            srcImg="/images/opinion/21.webp"
            name="randy_tout"
            link="https://gleeph.com/share/review/9782384411191-7B36756D831D4C0192129F9A7625000D?_branch_match_id=1187634126043349724&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nL1kvPSU0tyNDLSy3RL400M8jwNU8MqUoCAMDYkNQiAAAA"
            />
            <Opinion 
            srcImg="/images/opinion/22.webp"
            name="Nathalie Cussonnier"
            link="https://www.facebook.com/photo/?fbid=206701555551770&set=a.114106001477993"
            />
            <Opinion 
            srcImg="/images/opinion/23.webp"
            name="poudredenuage"
            link="https://www.instagram.com/p/CsqK3S-qTqv/?img_index=1"
            />
            <Opinion 
            srcImg="/images/opinion/24.webp"
            name="Sous la plume
            de Garance"
            link="http://souslaplumedegarance.hautetfort.com/archive/2023/05/30/les-medaillon-oublies-tome-1-un-roman-de-fantasy-initiatique-6445559.html#more"
            />
            <Opinion 
            srcImg="/images/opinion/34.webp"
            name="Leslivresdepatmol"
            link="https://www.instagram.com/p/Ct6KjCILnhM/"
            />
            <Opinion 
            srcImg="/images/opinion/25.webp"
            name="Cassyleedria"
            link="https://www.tiktok.com/@sarahsandra13/video/7248865921186483483?is_from_webapp=1&web_id=7248153000173471259"
            />
            <Opinion 
            srcImg="/images/opinion/26.webp"
            name="valoulauwers"
            link="https://www.tiktok.com/@valouvalou476/video/7249349193632943387?_r=1&_t=8dW5vuhtkZm"
            />
            <Opinion 
            srcImg="/images/opinion/27.webp"
            name="bibli_olivres"
            link="https://www.instagram.com/p/CuFoRPqtG9K/"
            />
            <Opinion 
            srcImg="/images/opinion/28.webp"
            name="la.liseuse.en.serie
            
            "
            link="https://www.instagram.com/p/CuMC9l9qFnl/"
            />
            <Opinion 
            srcImg="/images/opinion/29.webp"
            name="Livresduracoon"
            link="https://www.instagram.com/p/Cw9pObDqPuF/"
            />
            <Opinion 
            srcImg="/images/opinion/30.webp"
            name="onionidra
            
            "
            link="https://www.instagram.com/p/Cw-xS2GMU7T/"
            />
            <Opinion 
            srcImg="/images/opinion/31.webp"
            name="LaBulleCoco"
            link="https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3622060?modifier=1"
            />
            <Opinion 
            srcImg="/images/opinion/32.webp"
            name="dans_les_yeux_de_mallia
            
            "
            link="https://www.instagram.com/p/Cyz-T3iKkNb/"
            />
            <Opinion 
            srcImg="/images/opinion/33.webp"
            name="Traicy Books"
            link="https://www.instagram.com/p/Cy9-D5DupvQ/?img_index=1"
            />
        </div>
    </div>
</section>
    
    <style>
        section{
            display: flex;
            flex-direction: column;
            gap: 9rem;
        }
        .allOpinion{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            row-gap: 1rem;
            padding-bottom: 10rem;
            margin: 0 auto;
        }
        @media screen and (max-width: 1100px) {
        .allOpinion{     
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
    
    @media screen and (max-width: 750px) {
        .allOpinion{     
            grid-template-columns: 1fr 1fr 1fr;
        }
        div .citation{
            width: 90%;
         }
    }
    @media screen and (max-width: 450px) {
        .allOpinion{     
            grid-template-columns: 1fr 1fr;
        }
    }
    @media screen and (max-width: 326px) {
        .allOpinion{     
            grid-template-columns: 1fr;
        }
    }
        
        section{
            width: 80vw;
            margin: 0 auto;
        }
        h1{
            text-align: center;

    }

    .citation{
        text-align: center;
        width: 50%;
        margin: 0 auto;
    }
    
</style>