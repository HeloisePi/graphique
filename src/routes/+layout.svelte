<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
	</footer>
</div>

<style>
	main{
		background-image:url(/images/background.png);
		background-size: cover;
    	background-size: unset;
    	background-repeat: repeat;
	}
</style>
