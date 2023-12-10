<script>
    export let pageName;
    export let pageSrc;
</script>

<p class="filAriane"><a href="../">Épopée Graphique</a> > <a href="{pageSrc}">{pageName}</a> <slot></slot></p>


<style>
.filAriane{
    text-align: center;
    color: black;
    padding-top: 5rem;
}
a{
    color: black;
}
a:hover{
    text-decoration: underline;
}
p{
    display: flex;
    justify-content: center;
    gap: 0.25rem;
}
</style>