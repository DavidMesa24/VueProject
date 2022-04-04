<template>
  <div class="container">
    <div class="row align-items-start">
      <div class="col bg-black col1">
        <div class="d-flex flex-row">
          <div class="p-2"><img src="../../public/image1.png" /></div>
          <div class="p-2">
            <h2>
              <span style="color: white">anime</span>
              <span style="color: #ca38ed">yabu.</span>
            </h2>
          </div>
        </div>
        <div class="d-flex flex-column bd-highlight mb-3">
          <RouterLink to="/" class="link"
            ><img class="vector" src="../../public/Group.png"
          /></RouterLink>
          <div class="p-2 bd-highlight"><FormReg /></div>
          <div class="p-2 bd-highlight"><LogosReg /></div>
        </div>
      </div>
      <div class="col col2 d-none d-lg-block mb-3"><Carousel /></div>
    </div>
  </div>
</template>

<script lang="ts">
import FormInicio from "../components/FormInicio.vue";
import TopBrand from "../components/TopBrand.vue";
import LogosReg from "../components/LogosReg.vue";
import Carousel from "../components/Carousel.vue";
import FormReg from "../components/FormReg.vue";
export default {
  components: { FormInicio, TopBrand, LogosReg, Carousel, FormReg },
};
</script>

<style>
.col2 {
  background: #3e1149;
  height: 110vh;
}

.col1 {
  height: 110vh;
  min-width: 368px;
  min-height: 700px;
}
</style>