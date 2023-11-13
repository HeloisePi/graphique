<script>
	import HeaderMobile from './Componante/HeaderMobile.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<div class="headerdesktop">
		<Header />
	</div>
	<div class="headerMobile">
		<HeaderMobile />
	</div>

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
  .headerMobile{
			display: none;
		}

  @media screen and (max-width: 500px) {
        footer p {
            font-size: 14px;
        }
    }
	@media screen and (max-width: 870px) {
		.headerMobile{
			display: block;
		}
		.headerdesktop{
			display: none;
		}
        
    }
</style>
