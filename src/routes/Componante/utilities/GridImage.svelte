<script>

</script>

<div><slot></slot></div>

<style>
    div{
        margin-top: 5rem;
        padding-bottom: 5vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        row-gap: 3rem;
}

@media screen and (max-width: 820px) {
        div{
            grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width: 578px) {
        div{
            grid-template-columns: 1fr;
    }
}


    
</style>