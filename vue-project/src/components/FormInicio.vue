<template>
  <div class="mb-3 row col-md-6 offset-md-3">
      <label for="email" class="form-label text-white">
          Email
      </label>
      <input type="email" class="form-control emailInicio " id="email" placeholder="Usuario@"/>
  </div>

  <div class="mb-3 row col-md-6 offset-md-3 ">
      <label for="pasword" class="form-label text-white ">
          Contraseña
      </label>
      <input type="password" class="form-control contraInicio mb-4" id="pasword" placeholder="Contraseña" />
      <input class="btn  botonAcceder" type="submit" value="Acceder">
  </div>


</template>

<script lang="ts">
export default {

}
</script>

<style>
.emailInicio{
    color:white!important;
    background: rgba(255, 255, 255, 0.47) !important;
border: 2px solid white;
box-sizing: border-box;
border-radius: 10px;
}

.contraInicio{
    color:white!important;
    background: rgba(255, 255, 255, 0.47) !important;
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
}

.botonAcceder{
    background: #E487FB;
border-radius: 10px;
}
.form-control::placeholder { 
            color: white;
            opacity: 1; 
}

</style>