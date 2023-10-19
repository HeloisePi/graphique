<script>
    export let src;
</script>

<a href="{src}">
<p><slot></slot> ></p>
</a>



<style>
    a{
        color: black;
    }
    a:hover{
        text-decoration: underline;
        color: #D7B764;
    }
</style>