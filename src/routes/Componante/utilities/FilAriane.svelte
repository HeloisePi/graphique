<script>
    export let pageName;
    export let pageSrc;
</script>

<p class="filAriane"><a href="../">Team Pinpin</a> > <a href="{pageSrc}">{pageName}</a> <slot></slot></p>


<style>
.filAriane{
    text-align: center;
    color: black;
    padding-top: 7rem;
}
a{
    color: black;
}
a:hover{
    text-decoration: underline;
}
</style>