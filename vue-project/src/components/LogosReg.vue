<template>
  <div class="container align-self-center">
  <div class="row align-items-center">
    <div class="col ">
      <img src="../../public/Line13.png"
      class=" rounded float-end  "/>
    </div>
    <div class="col text-white text-center mb-4 ">
      Registrate también con
    </div>
    <div class="col">
       <img src="../../public/Line13.png"
      class=" rounded float-start"/>
    </div>
  </div>
</div>

  <div class="container mb-4">
  <div class="row align-items-start">
    <div class="col ">
      <img src="../../public/twitter.png"
      class=" rounded float-end"/>
    </div>
     <div class="col ">
      <img src="../../public/insta.png"
      class=" rounded mx-auto d-block"/>
    </div>
    <div class="col ">
       <img src="../../public/facebook.png"
      class=" rounded float-start "/>
    </div>
  </div>
</div>

<h6 class="text-center text-light align-text-top">
  <span style="color: white">¿Quieres registrarte? </span>
   <span style="color: #ca38ed"> 
       <RouterLink to="/registro" class="link">Regístrate</RouterLink>
     </span>

</h6>
</template>

<script lang="ts">
export default {

}
</script>

<style>
.link{
  color:#ca38ed;
}
</style>