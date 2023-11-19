<script>
	import Bouton from "./utilities/Bouton.svelte";

    export let title;
    export let srcImg1;
    export let srcImg2;
    export let srcImg3;
    export let src;
</script>

<section>
    <h2>{title}</h2>
    <div class="images">
        <div class="start">
            <img  src="{srcImg1}" alt="image1">
        </div>
        <div class="midel">
            <img  class="midelImg" src="{srcImg2}" alt="image2">
        </div>
        <div class="end">
            <img  src="{srcImg3}" alt="image3">
        </div>
    </div>
    <div class="bouton">
        <Bouton src={src}>Voir plus</Bouton>
    </div>
</section>
<style>
    section{
        width: max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 400px;
        overflow-y: unset;

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
        z-index: 1;
    }
    .midelImg{
        z-index: 0;
        position: relative;
    }

    .bouton{
        margin-top: 3rem;
        transform: translateX(9rem);
        width: fit-content;
    }

    @media screen and (max-width: 700px) {
        .start,.midel,.end,img{
            width: 15vw;
            height: 15vw;
        }
        .bouton{
            margin-top: 1rem;
            transform: translateX(0);
        }
        h2{
            font-size: 20px;
            text-wrap: nowrap;
        }
        .start{
            transform: translateX(0.5vw);
        }
        .end{
            transform: translateX(-0.5vw);
        }
        .midel{
            transform: translateY(-1vw);
            z-index: 1;
        }
        .images{
            margin-top: 1rem;
            height: fit-content;
        }
        section{
            width: fit-content;
            height: fit-content;
        }
    }
</style>
