<script>
	import SagaTitle from "./utilities/SagaTitle.svelte";

    export let tomeNumber;
    export let description;
    export let question;
    export let srcBuy="";
    export let link="";
    export let enSavoirPlus;
</script>
<div class="tome">
    <SagaTitle>Tome {tomeNumber}</SagaTitle>
    <div class="imageDescription">
        <slot></slot>
        <div class="descriptionBouton">
            <p class="description">{description}</p>
            <p>{question}</p>
            {#if link}
            <a href="{link}"><p>{enSavoirPlus} ></p></a>
            {/if}
            
            {#if srcBuy}
            <a href="{srcBuy}"><p>Acheter ></p></a>
            {/if}
        </div>
    </div>
</div>
    
    
<style>

    .imageDescription{
        display: flex;
        gap: 1rem;
    }
    .tome{
        margin: 0 auto;
    }
    .description{
        margin-bottom: 1rem;
    }
    

    @media screen and (max-width: 720px) {
        .imageDescription{
           flex-direction: column;
        }
    }

</style>