<template>

  <div class=" contenedor">
  <div class="row align-items-start">
    <div class="col colOne">
        <TopBrand/>
        <FormularioRegistro/>
    </div>
    <div class="col colTwo d-none d-xl-block">
      <Carousel/>
      <BttmBrand/>
    </div>
    </div>
    </div>
</template>

<script lang="ts">
import TopBrand from "../components/TopBrand.vue";
import Welcomeing from "../components/Welcomeing.vue";
import Formulario from "../components/Formulario.vue";
import Carousel from "../components/Carousel.vue";
import BttmBrand from "../components/BttmBrand.vue";
import FormularioRegistro from "../components/FormularioRegistro.vue";
export default {
    components: { TopBrand, Welcomeing, Formulario, Carousel, BttmBrand, FormularioRegistro }
}
</script>

<style>
.colOne{
position: absolute;
background: black;
width: 50%;
min-width:390px;
height: 100%;
}
.colTwo
{
position: absolute;
width: 50%;
height: 100%;
left: 49%;

background: #3E1149;
}

.cotenedor{
  width:100%;
}
</style>