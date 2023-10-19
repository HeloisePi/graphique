<script>
	import CreationSerge from "./Componante/CreationSerge.svelte";
import Hero from "./Componante/Hero.svelte";
	import Saga from "./Componante/Saga.svelte";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Hero />
	<Saga />
	<CreationSerge />
</section>

<style>
section{
	display: flex;
	flex-direction: column;
	gap: 10rem;
}

	
	
</style>
