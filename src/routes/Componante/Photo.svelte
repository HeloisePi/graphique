<script>
	import Bouton from "./utilities/Bouton.svelte";

    export let title;
    export let srcImg1;
    export let srcImg2;
    export let srcImg3;
</script>

<section>
    <h2>{title}</h2>
    <div class="images">
        <div class="start">
            <img  src="{srcImg1}" alt="image1">
        </div>
        <div class="midel">
            <img  src="{srcImg2}" alt="image2">
        </div>
        <div class="end">
            <img  src="{srcImg3}" alt="image3">
        </div>
    </div>
    <div class="bouton">
        <Bouton>Voir plus</Bouton>
    </div>
</section>
<style>
    section{
        width: max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 44vh;

    }
    h2{
        text-align: center;
    }
    .images{
        display: flex;
        width: auto;
        margin-top: 4rem;
    }
    img{
        width: inherit;
        transition: 500ms;
    }
    img:hover{
        transform: scale(110%);
    }
    section div{
        width: 13rem;
        height: 13rem;
    }
    .start{
        transform: translateX(3rem);
    }
    .end{
        transform: translateX(-3rem);
    }
    .midel{
        transform: translateY(-3rem);
        z-index: 3;
    }

    .bouton{
        margin-top: 3rem;
        text-align: end;
        transform: translateX(9rem);
    }
</style>
