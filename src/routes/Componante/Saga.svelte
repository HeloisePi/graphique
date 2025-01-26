<script>
	import Bouton from "./utilities/Bouton.svelte";

</script>

<section class="contenaireSaga" id="saga">
    <img src="/images/book.webp" alt="Livre saga"  class="book">
    <div>
        <h2>La Saga QUATRE</h2>
        <p>QUATRE, roman de fantasy, suit les aventures de Rashele, Dyane, Tim et Side. Au commencement,
             ils ne se connaissent pas et vivent dans quatre continents différents. Ils découvrent par la
              suite qu’ils sont les héritiers de grandes familles mandatées par les quatre Mères et Pères 
              Fondateurs de l’Humanité pour protéger l’Homme de lui-même. Mariane Gahengi et Serge Pingitore, autrices et illustrateur,
             vous proposent un format novateur où l’écriture s’allie aux croquis, aux illustrations et à la bande dessinée pour emmener le lecteur dans l’imaginaire narratif.</p>

             <Bouton src="/saga">Voir plus</Bouton>
    </div>

</section>
<style>
    .contenaireSaga{
        padding-top: 10rem;
        display: flex;
        gap: 4rem;
        border: 1px solid  #D7B764;
        align-items: center;
        padding: 4rem;
        width: 70vw;
        margin: auto;
    }

    .contenaireSaga .book{
        width: 215px;
    }

    .contenaireSaga div{
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    @media screen and (max-width: 1100px) {
        .contenaireSaga{
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
    }
    }

    @media screen and (max-width: 645px) {
        .contenaireSaga{
            padding: 1rem;
            gap: 1rem;
            width: 90vw;
    }
}
@media screen and (max-width: 280px) {
    img{
        width: -webkit-fill-available;
    }
}

</style>


