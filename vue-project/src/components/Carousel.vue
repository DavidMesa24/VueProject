<template>
<div class="d-flex flex-column bd-highlight mb-3"> 
    <div class="p-2 bd-highlight car">
<div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="carousel">
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner slidesss">
    <div class="carousel-item active">
      <img src="../../public/ddkkrta-d3d6161c-7370-4ec7-a1e0-6a051999be0f 1.png" class="d-block w-70" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../public/5ede498db760540004f2c5e4 1.png" class="d-block w-70" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../public/5ede491bb760540004f2c5e1 1.png" class="d-block w-70" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>
<div class="p-2 bd-highlight text-center text-light ">

    <h1 class="display-1  textCarousel">
        <span style="color: white">anime</span>
        <span style="color: #ca38ed">yabu.</span>
      </h1>

    <h7>
        Ver anime en línea en HD, subtitulado o doblado,
 en tu celular o computadora.
¡Animeyabu, tu portal de anime en línea!
    </h7>
</div>
</div>
  
</template>

<script lang="ts">
export default {

}
</script>

<style>
.textCarousel{
font-style: normal;
font-weight: 900;
font-size: 80.1282px;
line-height: 94px;
text-align: center;
letter-spacing: 0.065em;
}

.car{
    background-image: url('../../public/Ellipse.png')!important;
    background-repeat: no-repeat;
    background-position: center center;

}

.slidesss{
    width: auto;
  height: 600px;
  max-height: 600px;
}
</style>