<script>
	import Photo from "../Componante/Photo.svelte";
    import FilAriane from "../Componante/utilities/FilAriane.svelte";

</script>

<svelte:head>
	<title>Les Création de Serge</title>
	<meta name="description" content=" Mon inspiration trouve sa source dans ce qui m’émeut : 
    l’expression d’un regard, la tendresse d’un visage ou encore l’atmosphère
    d’un paysage." />
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
<p class="instruction">Glisse sur le côté pour voir mes peintures 🖌️</p>
<div class="images">
    <Photo
    title= "Les noirs et blancs"
    srcImg1= "/images/photoCreationSerge/img1.webp"
    srcImg2= "/images/photoCreationSerge/img2.webp"
    srcImg3= "/images/photoCreationSerge/img3.webp"
    src='/creationSerge/lesnoirsetblancs'
    />
    <Photo
    title= "Les Huiles "
    srcImg1= "/images/photoCreationSerge/img4.webp"
    srcImg2= "/images/photoCreationSerge/img5.webp"
    srcImg3= "/images/photoCreationSerge/img6.webp"
    src='/creationSerge/leshuiles'
    />
    <Photo
    title= "Paysage"
    srcImg1= "/images/photoCreationSerge/img7.webp"
    srcImg2= "/images/photoCreationSerge/img8.webp"
    srcImg3= "/images/photoCreationSerge/img9.webp"
    src='/creationSerge/paysage'
    />
    <Photo
    title= "Mécanique"
    srcImg1= "/images/photoCreationSerge/img10.webp"
    srcImg2= "/images/photoCreationSerge/img11.webp"
    srcImg3= "/images/photoCreationSerge/img12.webp"
    src='/creationSerge/mecanique'
    />
</div>
    <style>

        .instruction{
            margin-left: 10rem;
            margin-bottom: 2rem;
        }
    .images{
        width: 100vw;
        height: fit-content;
        padding-left: 2rem;
        padding-right: 2rem;
        display: flex;
        overflow:scroll;
        scroll-behavior: auto;
        scroll-margin-block-start: 20px;
        overflow-x: scroll;
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
            height: fit-content;
            padding: 2rem;
            width: 100vw;
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
    .images{
        gap: 2rem;
    }
    .instruction{
        margin-left: 50%;
        transform: translateX(-50%);
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