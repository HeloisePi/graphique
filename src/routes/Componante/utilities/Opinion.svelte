<script>
    export let srcImg;
    export let name;
    export let link;
</script>

<div>
    <a href="{link}"><img src="{srcImg}" alt="photo de profil">
    <p>{name}</p></a>
</div>

<style>
    div,a {
        display: flex;
        justify-content:center ;
        align-items: center;
        flex-direction: column;
    }

    p{
        text-align: center;
    }

    img{
        width: 100px;
    }
    @media screen and (max-width: 900px) {
        img{     
            width: 50px;
        }
        p{
            font-size: 12px;
    }
    }
</style>