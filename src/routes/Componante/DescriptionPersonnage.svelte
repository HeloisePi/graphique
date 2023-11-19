<script>
	import SagaTitle from "./utilities/SagaTitle.svelte";

    export let srcImg;
    export let name;
</script>

<div>
    <SagaTitle>{name}</SagaTitle>
    <div class="contenaire">
        <img src="{srcImg}" alt="{name}">
        <div class="description">
            <p><slot></slot></p>
        </div>
    </div>
</div>

<style>
    .contenaire{
        display: flex;
        gap: 3rem;
    }
    img{
        width: 15rem;
        height: fit-content;
    }
    p{
        max-width: 700px;
    }

    @media screen and (max-width: 650px) {
        .contenaire{
        flex-direction: column;
    }
    
    }
    @media screen and (max-width: 300px) {
        img{
        width: 10rem;
        height: fit-content;
    }
    
    }
    
</style>