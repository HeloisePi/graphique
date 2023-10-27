<script>
    export let src;
</script>

<a href="{src}">
<p><slot></slot> ></p>
</a>
<style lang="scss">
  a {
    text-decoration: none;
    height: fit-content;
    width: fit-content;
    position: relative;
  }
    a::before {
      content: "";
      bottom: -0.25rem;
      position: absolute;
      background-color: black;
      width: 100%;
      height: 1px;
      transition: width 0.35s ease-out;
    }

    a:hover::before {
      background-color: #D7B764;
      width: 5px;
    }

    
  
  p {
      color: black;
      transition: 0.35s ease-out;
      
    }
    p:hover {
        color: #D7B764;
      }
</style>