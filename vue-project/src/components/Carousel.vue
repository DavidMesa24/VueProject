<template>
<div class="elipse">
    <img  src="./imgs/Ellipse 2.png">
</div>

<div id="carouselExampleSlidesOnly" class=" slide carousel carousels" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./imgs/ddkkrta-d3d6161c-7370-4ec7-a1e0-6a051999be0f 1.png" class="d-block w-100" alt="Uno">
    </div>
    <div class="carousel-item">
      <img src="./imgs/5ede498db760540004f2c5e4 1.png" class="d-block w-100" alt="dos">
    </div>
    <div class="carousel-item">
      <img src="./imgs/5ede491bb760540004f2c5e1 1.png" class="d-block w-100" alt="tres">
    </div>
  </div>
</div>

</template>

<script lang="ts">
export default {
}
</script>

<style>

.elipse{
position: absolute;
width: 548px;
height: 548px;
left: 100px;
top: 63px;
}
.carousels{
    transition: transform 2s;
    position: absolute;
width: 622px;
height: 625px;
left: 100px;
top: 128px;
}
</style>