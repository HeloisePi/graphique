<script>
</script>

<section>
    <h2>Qui sommes nous ?</h2>
    <div class="people">

        <div class="">
            <img src="/images/mariane.png" alt="Photo de mariane">
            <p>Mariane Gahengi</p>
        </div>
        <div class="">
            <img src="/images/serge.png" alt="Photo de serge">
            <p>Serge Pingitore</p>
        </div>
    </div>
    <p>
        La Team Pinpin est 
        composée d’un frère et d’une soeur ainsi que de la fille de cette dernière.
         En travaillant ensemble sur leur projet littéraire et artistique, ils ont
          pu créer des histoires plus vivantes et mémorables, ainsi que renforcer les
           thèmes et les émotions présents dans le texte. 
        Team Pinpin est le résultat d’une expérience familiale enrichissante et complice.
    </p>
</section>


<style>

    section{
        width: 40vw;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    h2{
        text-align: center;
    }
    .people{
         display: flex;
         justify-content: space-between;
    }

    .people div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .people p{
        text-align: center;
    }

    img{
        
        width: 15vw;
    }

    @media screen and (max-width: 1100px) {
        section{
            width: 50vw;
    }
}
    @media screen and (max-width: 800px) {
        section{
            width: 60vw;
    }
    img{
        
        width: 20vw;
    }
}
    @media screen and (max-width: 600px) {
        section{
            width: 70vw;
    }

}
@media screen and (max-width: 490px) {
        section{
            width: 90vw;
    }
}
    




</style>