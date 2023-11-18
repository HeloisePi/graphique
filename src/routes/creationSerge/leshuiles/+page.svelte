<script>
  import FilAriane from '../../Componante/utilities/FilAriane.svelte';
  import GridImage from '../../Componante/utilities/GridImage.svelte';
  import { leshuiles } from '/src/routes/imagesList.js' 
</script>
  
<FilAriane 
pageName = "Les créations de Serge"
pageSrc = "/creationSerge">
<p>></p>
<a href="/creationSerge/leshuiles">les huiles</a>
</FilAriane>
<h1>Les Huiles</h1>

<div>
<GridImage>
  {#each leshuiles as src  }
  <img src="{src}" alt="tableau Serge Pingitore sur le théme des huiles"> 
  {/each}
</GridImage>

</div>
<style>
  div{
    margin-bottom: 10rem;
  }
  h1{
    margin-top: 5rem;
    text-align: center;
  }
img{
        width: 15rem;
        height: fit-content;
        transition: 500ms;

    }
  img:hover{
    transform: scale(110%);
  }
</style>