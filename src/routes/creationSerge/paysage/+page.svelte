<script>
  import FilAriane from '../../Componante/utilities/FilAriane.svelte';
  import GridImage from '../../Componante/utilities/GridImage.svelte';
  import { paysage } from '/src/routes/imagesList.js' 
</script>
  
<FilAriane 
pageName = "Les créations de Serge"
pageSrc = "/creationSerge">
<p>></p>
<a href="/creationSerge/paysage">paysage</a>
</FilAriane>
<h1>Paysage</h1>

<div>
<GridImage>
  {#each paysage as src  }
  <!-- <img src="{src}" alt="tableau Serge Pingitore sur le théme des paysages">  -->
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