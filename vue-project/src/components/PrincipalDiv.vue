<template>
<header>

</header>
<div class="container">
  <div class="row align-items-start">
    <div class="col colOne">
        <TopBrand/>
        <Welcomeing/>
        <Formulario/>
    </div>
    <div class="col colTwo">
      <Carousel/>
    </div>
    </div>
    </div>
</template>

<script lang="ts">
import TopBrand from "./TopBrand.vue";
import Welcomeing from "./Welcomeing.vue";
import Formulario from "./Formulario.vue";
import Carousel from "./Carousel.vue";
export default {
    components: { TopBrand, Welcomeing, Formulario, Carousel }
}
</script>

<style>
.colOne{
    position: absolute;
background: black;
height: 1024px;
left: 0px;
}
.colTwo
{
position: absolute;
width: 967px;
height: 1024px;
left: 720px;
top: 0px;

background: #3E1149;
}

</style>