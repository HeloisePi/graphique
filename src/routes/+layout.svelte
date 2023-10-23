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
		<p>
			© 2023 - Tous droits réservés à la team Pinpin  - Mentions légales
		</p>
	</footer>
</div>

<style>
	main{
		background-image:url(/images/background.png);
		background-size: cover;
    	background-size: unset;
    	background-repeat: repeat;
	}
	footer{
    border-top: 1px solid black;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
	text-align: center;

  }

  @media screen and (max-width: 500px) {
        footer p {
            font-size: 14px;
        }
    }
</style>
