<script>
	import Bouton from "./utilities/Bouton.svelte";

    export let tomeNumber;
    export let description;
    export let srcBuy="";
    export let link="";

    console.log(link);
</script>
<h2>Tome {tomeNumber}</h2>
<div>
    <slot></slot>
    <div class="decriptionBouton">
        <p>{description}</p>
        {#if link}
            <a href="{link}">En savoir plus ></a>
            
        {:else}
            <p>Lalalala</p>
        {/if}
        
        {#if srcBuy}
            <a href="{srcBuy}">Acheter ></a>
        {:else}
            <p>Lalalala</p>
        {/if}
    </div>
</div>


<style>

</style>