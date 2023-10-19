<script>
</script>

<div class="blur"></div>
<header>
		<img src="/images/logo.png" alt="logo">	
		<div class="link">
			<p>La Saga</p>
			<p>Les Créations de Serge</p>
			<p>Qui sommes nous ?</p>
			<p>Contact</p>
		</div>
</header>

<style lang="scss">
	header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		border-bottom: 1px solid black ;
		position: fixed;
		width: 100vw;
		z-index: 3;

		
	}
	img{
		width: 4rem;
	}

	.link{
			display: flex;
			gap: 2rem;
		}

		.blur{
        z-index: 1;
        position: fixed;
        top: 0;
        width: 100vw;
        height: 70px;
        -webkit-filter: blur(10px);
        -moz-filter: blur(10px);
        -o-filter: blur(10px);
        -ms-filter: blur(10px);
        filter: blur(10px);
        backdrop-filter: blur(10px);
    }
</style>
