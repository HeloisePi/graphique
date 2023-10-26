<script>
	import Photo from "../Componante/Photo.svelte";
import FilAriane from "../Componante/utilities/FilAriane.svelte";

</script>

<svelte:head>
	<title>Les Création de Serge</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<FilAriane 
    pageName = "Les créations de Serge"
    pageSrc = "/creationSerge"
/>


<!-- <img src="/images/line/line4.svg" alt="line decoration"> -->
<h1>Les créations de Serge</h1>
<div class="about">

    <p> Mon inspiration trouve sa source dans ce qui m’émeut : 
        l’expression d’un regard, la tendresse d’un visage ou encore l’atmosphère
        d’un paysage.
        Et j’essaie humblement de révéler cette émotion dans mes œuvres. </p>
    <div class="">
        <p class="right">Je suis peintre amateur autodidacte et j’ai redécouvert en 2020 le bonheur
            de peindre
            et de dessiner sans contrainte, juste pour le plaisir de la création.</p>
    </div>
            
</div>

<div class="images">
    
    <Photo
    title= "Les noirs et blancs"
    srcImg1= "/images/photoCreationSerge/img1.png"
    srcImg2= "/images/photoCreationSerge/img2.png"
    srcImg3= "/images/photoCreationSerge/img3.png"
    />
    <Photo
    title= "Les Huiles "
    srcImg1= "/images/photoCreationSerge/img4.png"
    srcImg2= "/images/photoCreationSerge/img5.png"
    srcImg3= "/images/photoCreationSerge/img6.png"
    />
    <Photo
    title= "Paysage"
    srcImg1= "/images/photoCreationSerge/img7.png"
    srcImg2= "/images/photoCreationSerge/img8.png"
    srcImg3= "/images/photoCreationSerge/img9.png"
    />
    <Photo
    title= "Mécanique"
    srcImg1= "/images/photoCreationSerge/img10.png"
    srcImg2= "/images/photoCreationSerge/img11.png"
    srcImg3= "/images/photoCreationSerge/img12.png"
    />
</div>
<div class="arrow">
    <img class="arrowLeft" src="/images/logo/arrow.svg" alt="aller a gauche">
    <img class="arrowRight" src="/images/logo/arrow.svg" alt="aller a droite">
</div>
    <style>
    .images{
        width: 100vw;
        padding-left: 2rem;
        padding-right: 2rem;
        display: flex;
        overflow:scroll;
        scroll-behavior: auto;
        scroll-margin-block-start: 20px;
    }
    .arrow{
        display: flex;
        justify-content: space-between;
        width: 100vw;

    }

    .arrowRight{
        transform: rotate(180deg);
    }

    h1{
        text-align: center;
        margin-top: 3rem;
    }

    p{
        width: 50vw;
    }
    .about{
        width: 100vw;
        height: 60vh;
        padding: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    .about div{
        width: 100%;
        display: flex;
        justify-content: end;
    }
    .right{
        text-align: right;
    }

    @media screen and (max-width: 1000px) {
        .about{
            height: 80vh;    
        }
    }
    @media screen and (max-width: 700px) {
        .about{
            height: 80vh; 
            padding: 0;
            width: 90vw;
            margin: auto;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        .right{
            text-align: start;
    }
        .about div{
            width: fit-content;
            display: block;  
    }
    p{
        width: fit-content;
    }
    }
    @media screen and (max-width: 755px) {
        h1{
            font-size: 50px;
            text-align: center;
            
        }
    }
    @media screen and (max-width: 555px) {
        h1{
            font-size: 35px;
        }
    }

</style>