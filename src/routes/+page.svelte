<script>
	import Contact from "./Componante/Contact.svelte";
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

	<Contact />
</section>

<style>
section{
	display: flex;
	flex-direction: column;
	gap: 5rem;
	padding-bottom: 10rem;
}

	
	
</style>
