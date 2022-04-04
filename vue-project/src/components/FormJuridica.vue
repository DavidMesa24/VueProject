<template>
  <form>
   <div class=" row col-md-6 offset-md-3">
    <label  class="form-label textos">Razón social</label>
    <input type="text" class="form-label text-white inputs2">
  </div>

   <div class=" row col-md-6 offset-md-3">
    <label  class="form-label textos">Telefono</label>
    <input type="number" class="form-label text-white inputs2" >
  </div>
   <div class=" row col-md-6 offset-md-3">
    <label class="form-label textos">Nit</label>
    <input type="number" class="form-label text-white inputs2" >
  </div>
   <div class=" row col-md-6 offset-md-3">
      <label for="email" class="form-label text-white textos">
          Email
      </label>
      <input type="email" class="form-label inputs2"/>
  </div>
   <div class=" row col-md-6 offset-md-3">
    <label class="form-label textos">Password</label>
    <input type="password" class="form-label text-white inputs2">
  </div>
   <div class=" row col-md-6 offset-md-3">
    <label class="form-label textos">Confirmar contraseña</label>
    <input type="password" class="mb-4 form-label text-white inputs2">
    <input class="btn  botonAcceder" type="submit" value="Registrar">
  </div>
 
</form>

</template>

<script lang="ts">
export default {

}
</script>

<style>
.inputs2{
    background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
height: 45px;
}
.textos{
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: white;
/* identical to box height */

letter-spacing: -0.103101px;
}
</style>