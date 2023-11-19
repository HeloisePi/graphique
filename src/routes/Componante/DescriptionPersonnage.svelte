<script>
	import SagaTitle from "./utilities/SagaTitle.svelte";

    export let srcImg;
    export let name;
</script>

<div class="personnage">
    <SagaTitle>{name}</SagaTitle>
    <div class="contenaire">
        <img src="{srcImg}" alt="{name}">
        <div class="description">
            <p><slot></slot></p>
        </div>
    </div>
</div>

<style>
    .personnage{
        width: 60vw;
    }
    .contenaire{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
        gap: 3rem;
    }
    img{
        width: 15rem;
        height: auto;
    }
    p{
        max-width: 700px;
    }

    @media screen and (max-width: 650px) {
        .contenaire{
        grid-template-columns: 1fr;
    }
    
    }
    @media screen and (max-width: 300px) {
        img{
        width: 10rem;
        height: fit-content;
    }
    
    }
    
</style>