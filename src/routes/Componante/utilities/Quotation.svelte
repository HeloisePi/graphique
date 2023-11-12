<script>
    export let opinion;
    export let namePersonne;
</script>
<div class="">
    <p>{opinion}</p>
    <p class="name">{namePersonne}</p>
</div>

<style>
    p{
        width: 750px;
    }
    .name{
        text-align: end;
    }
    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media screen and (max-width: 1000px) {
        p{     
            width: 50vw;
            font-size: 12px;
        }
    }
    @media screen and (max-width: 400px) {
        p{     
            width: 70vw;
            
        }
    }

</style>