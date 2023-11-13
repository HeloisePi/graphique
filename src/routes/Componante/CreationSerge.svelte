<script>
	import Bouton from "./utilities/Bouton.svelte";

</script>
<section id="creationSerge">

    <div class="contenaireCreationSerge">
        <h2>Les Créations de Serge</h2>
        <div class="imageTableau">
            <img class="tableau1" src="/images/tableau1.png" alt="tableau">
            <img class="tableau2" src="/images/tableau2.png" alt="tableau">
            <img class="tableau3" src="/images/tableau3.png" alt="tableau">
        </div>
        <Bouton src="../creationSerge">Voir plus</Bouton>
    </div>
    <img class="line" src="/images/line/line3.svg" alt="line">
</section>
<style>
    section{
        padding-top: 10rem;
    }

    h2{
        text-align: center;
    }
    .contenaireCreationSerge{
        border: 1px solid  #D7B764;
        padding: 2rem;
        width: 70vw;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        background-color: white;
        background-image:url(/images/background.png);
		background-size: cover;
    	background-size: unset;
    	background-repeat: repeat;
        
    }
    .imageTableau{
        display: flex;
        gap: 4rem;
    }
    .imageTableau img{
        width: 15vw;
    }

    .line{
        position: absolute;
        width: 100vw;
        transform: translateY(-30rem);
        z-index: -1;

    }

    @media screen and (max-width: 950px) {
        .imageTableau .tableau2{
            transform: scale(110%);
            z-index: 3; 
            width: 10rem;
        }
        .imageTableau .tableau1{
            transform: translate(6rem, 1rem);
            width: 10rem;
            
        }
        .imageTableau .tableau3{
            transform: translate(-6rem, 1rem);
            width: 10rem;
        }
    }
    @media screen and (max-width: 645px) {
        .contenaireCreationSerge{
            padding: 1rem;
            gap: 2rem;
            width: 90vw;
    }
}
@media screen and (max-width: 525px) {
    .imageTableau .tableau1, .imageTableau .tableau2,.imageTableau .tableau3 {
        width: 30vw;
    }
}
</style>