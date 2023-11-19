<script>
    import FilAriane from "../../Componante/utilities/FilAriane.svelte";
    import DescriptionPersonnage from "../../Componante/DescriptionPersonnage.svelte";
    

</script>

<svelte:head>
	<title>Les Quatre Héros </title>
	<meta name="description" content="Laissez-vous entraîner dans
    un univers captivant où réel et imaginaire se côtoient dans
    une épopée fascinante." />
</svelte:head>


<FilAriane
    pageName = "La Saga Illustrée"
    pageSrc = "/saga">
<p>></p>
<a href="/saga/les-quatre-heros">Les Quatre Héros</a>
</FilAriane>
<h1>Les Quatre Héros</h1>

<section>
    <DescriptionPersonnage
    srcImg="/images/saga/dyane.png"
    name="Dyane">
    “Je me suis nourrie de tous ces moments que j’ai passés avec ma grand-mère. Elle m’a appris à aimer la nature et à être bienveillante envers les autres. La mer des Caraïbes a toujours été une partie de moi et le Yucatán est constamment présent dans mes pensées, peu importe où je me trouve.” (Tome 2_Chapitre 7)
    </DescriptionPersonnage>

    <DescriptionPersonnage
    srcImg="/images/saga/side.png"
    name="Side">
    “J’ai grandi en me persuadant que ma vraie famille vivait quelque part. C’était l’élan dont j’avais besoin pour poursuivre. Je me suis accroché à la croyance que je descendais d’une ancienne lignée égyptienne. Il me fallait une lumière au bout de mon tunnel, tu comprends. En me retrouvant seul dans la Cité des Morts, je me suis dit que ma famille finirait par me rejoindre, et que je devais être prêt et bien informé sur l’histoire de mon pays. Ce que je vais te dire va sans doute te sembler surprenant, mais c’est sous mes planches et entre mes murs de tôle que j’ai vécu les meilleurs moments de mon début d’existence. J’y ai passé de nombreuses heures à dévorer tant de livres !” (Tome 2_Chapitre 7)  
    </DescriptionPersonnage>

    <DescriptionPersonnage
    srcImg="/images/saga/tim.png"
    name="Tim">
    “Lorsque j’avais un moment à moi, je sautais sur mon scooter et je laissais le vent m’emporter ! Je roulais jusqu’aux ruines d’Angkor ! Tu sais, avec la vie que je menais, je n’avais pas le temps de lire ou d’étudier. J’ai découvert les légendes de mon pays dans ce temple ! Assis sur ces pierres gigantesques, je fermais les yeux et j’imaginais les mots des anciens au point de ressentir leur présence ! C’était magique !” (Tome 2_Chapitre 7)
    </DescriptionPersonnage>

    <DescriptionPersonnage
    srcImg="/images/saga/rashele.png"
    name="Rashele">
    “Ce que nous traversons depuis un an nous a complètement changés. J’ai été élevée par ma tante maternelle. C’est un triste lien que nous partageons tous les quatre — notre mère est décédée peu après notre naissance. J’ai vécu comme n’importe quel autre adolescent. Ma vie était répartie entre mes amis, mes cours et ma tante bien-aimée. Bien sûr, j’ai toujours eu conscience de faire partie d’une grande famille avec toutes ces choses anciennes qui nous entourent et témoignent de notre passé. Quand ma tante m’a donné le médaillon en précisant qu’il avait été transmis de génération en génération lors du vingt et unième anniversaire de la première fille née, pour moi, il s’agissait d’une antiquité de plus ! Que savait-elle ? Elle n’a jamais eu le temps de me le dire.”
    (Tome 2_Chapitre 7)
    </DescriptionPersonnage>
</section>
<style>
    section{
            display: flex;
            flex-direction: column;
            gap: 9rem;
            width: 100vw;
            padding: 5rem;
            align-items: center;

    }
    h1{
        text-align: center;
    }
    @media screen and (max-width: 400px) {
        section{
            padding: 1rem;

    }
    
    }
</style>
