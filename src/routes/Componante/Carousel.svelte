<script>
</script>

<div class="contenaire">
    <img class="firstQuotation" src="/images/logo/quotation.svg" alt="guillement">
    <div class="carousel">
        <slot></slot>
    </div>
    <img class="endQuotation" src="/images/logo/quotationEnd.svg" alt="guillement">
</div>

<style>
    .carousel{
        display: flex;
        gap:5rem;
        overflow:scroll;
        scroll-behavior: auto;
        scroll-margin-block-start: 750px;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    .firstQuotation{
        transform: translate(-6rem, 2rem);
    }
    .endQuotation{
        transform: translate(0rem, -3rem);
        margin-left: 80vw;
    }
    @media screen and (max-width: 1000px) {
        img{     
            display: none;
        }
    }
    
</style>