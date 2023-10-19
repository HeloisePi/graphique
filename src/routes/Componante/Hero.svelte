<script>

</script>
<section>
    <h1>Team PinPin</h1>
    <p>“Les deux arts d’écrire et de dessiner
         sont naturellement associés.” (Charles Dickens)</p>

         <img src="/images/line/line2.svg" alt="line">
</section>


<style lang="scss">
    section{
        width: 100vw;
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


    }
    p{
            width:40vw; 
            text-align: center;
        }

    img{
        position: absolute;
        transform: translateY(18vw);
        width: 100vw;
    }

    @media screen and (max-width: 720px) {
        p{
            width: 60vw;
        }
    }

    @media screen and (max-width: 400px) {
        h1{
            font-size: 50px;
            text-align: center;
            
        }
        p{
            width: 90vw;
        }
    }
    

</style>