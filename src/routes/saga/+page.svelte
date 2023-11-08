<script>
    import FilAriane from "../Componante/utilities/FilAriane.svelte";
    import Tome from "../Componante/Tome.svelte";

</script>

<svelte:head>
	<title>La Saga Illustrée</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<FilAriane
    pageName = "La Saga Illustrée"
    pageSrc = "/saga"
/>

<h1>La Saga Illustrée</h1>
<p>Laissez-vous entraîner dans
     un univers captivant où réel et imaginaire se côtoient dans
      une épopée fascinante.</p>

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
           Saint-Pétersbourg et l’Italie, mais aussi en Nouvelle-Zélande.<br><br>

Que représentent ces médaillons ? Peut-être cela a-t-il un lien avant la légende ancienne que la vieille chamane raconte à sa petite fille au début du roman ?
Êtes-vous prêts à découvrir leur histoire ? "
srcBuy="https://www.amazon.fr/m%C3%A9daillons-oubli%C3%A9s-Mariane-Gahengi/dp/2384411195/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=Z11S9AI77GKY&keywords=les+m%C3%A9daillons+oubli%C3%A9s&qid=1683803969&sprefix=les+m%C3%A9daillons+oubli%C3%A9s,aps,119&sr=8-1"
link=""
>
<slop> <img src="/images/book.png" alt="couverture tome 1"></slop>
</Tome>