<template>
  <div class="mb-3 ">
    <label for="formGroupExampleInput" class="form-label regNombreLab"
      >Nombre</label
    >
    <input
      type="text"
      class=" regNombre"
      id="formGroupExampleInput"
      placeholder="Nombre"
    />
  </div>
  <div class="mb-3 ">
    <label for="formGroupExampleInput2" class="form-label regApellidoLab">Apellido</label>
    <input
      type="text"
      class=" regApellido"
      id="formGroupExampleInput2"
      placeholder="Apellido"
    />
  </div>

   <div class="mb-3 ">
    <label for="formGroupExampleInput2" class="form-label regTelefonoLab">Telefono</label>
    <input
      type='number'
      class=" regTelefono"
      id="formGroupExampleInput2"
      placeholder="Telefono"
    />
  </div>

  <div class="mb-3 ">
    <label for="formGroupExampleInput2" class="form-label regIdLab">Número de identificación</label>
    <input
      type='number'
      class=" regId"
      id="formGroupExampleInput2"
      placeholder="Número de identificación"
    />
  </div>

  <div class="mb-3 ">
    <label for="formGroupExampleInput2" class=" regEmailLab">Email</label>
    <input
      type='email'
      class=" regEmail"
      id="formGroupExampleInput2"
      placeholder="Email"
    />
  </div>

  <div class="mb-3 ">
    <label for="formGroupExampleInput2" class="form-label regPaswordLab">Contraseña</label>
    <input
      type='password'
      class=" regPasword"
      id="formGroupExampleInput2"
      placeholder="Contraseña"
    />
  </div>

  <div class="mb-3 ">
    <label for="formGroupExampleInput2" class="form-label regConfiPasLab">Confirmar contraseña</label>
    <input
      type='password'
      class=" regConfiPas"
      id="formGroupExampleInput2"
      placeholder="Confirmar contraseña"
    />
  </div>

  <div>
    <button type="submit" class="btnAcc2">Registrar</button>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style>

.regNombre{
    position: absolute;
width: 50%;
height: 60px;
left: 30%;
bottom: 80%;
color:#FFFFFF;

background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
min-width: 250px;
}

.regNombreLab{
   position: absolute;
width: 343px;
height: 60px;
left: 30%;
bottom: 82%; 
color:#FFFFFF;
}

.regApellido{
    position: absolute;
width: 50%;
height: 60px;
left: 30%;
bottom: 70%;
outline: none;
color:#FFFFFF;
background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
min-width: 250px;
}
.regApellidoLab{
   position: absolute;
width: 343px;
height: 60px;
left: 30%;
bottom: 72%;
color:#FFFFFF;
}

.regTelefono{
    position: absolute;
width: 50%;
height: 60px;
left: 30%;
bottom: 60%;
color:#FFFFFF;
background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
min-width: 250px;
}

.regTelefonoLab{
  position: absolute;
width: 343px;
height: 60px;
left: 30%;
bottom: 62%;
color:#FFFFFF;
}

.regId{
    position: absolute;
width: 50%;
height: 60px;
left: 30%;
bottom: 50%;
color:#FFFFFF;
background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
min-width: 250px;
}

.regIdLab{
    position: absolute;
width: 343px;
height: 60px;
left: 30%;
bottom: 52%;
color:#FFFFFF;
}

.regEmail{
    position: absolute;
width: 50%;
height: 60px;
left: 30%;
bottom: 40%;
color:#FFFFFF;
background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
min-width: 250px;
}

.regEmailLab{
  position: absolute;
width: 343px;
height: 60px;
left: 30%;
bottom: 42.7%; 
color:#FFFFFF;
}

.regPasword{
    position: absolute;
width: 50%;
height: 60px;
left: 30%;
bottom: 30%;
color:#FFFFFF;
background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
min-width: 250px;
}

.regPaswordLab{
    position: absolute;
width: 343px;
height: 60px;
left: 30%;
bottom: 32%;
color:#FFFFFF;
}

.regConfiPas{
    position: absolute;
width: 50%;
height: 60px;
left: 30%;
bottom: 20%;
color:#FFFFFF;
background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
min-width: 250px;
}

.regConfiPasLab{
   position: absolute;
width: 343px;
height: 60px;
left: 30%;
bottom: 22%;
color:#FFFFFF;
}
.btnAcc2
{
    position: absolute;
width: 50%;
height: 60px;
  left: 30%;
bottom: 10%;
text-decoration: solid;
min-width: 250px;

background: #E487FB;
border-radius: 10px;
}
</style>