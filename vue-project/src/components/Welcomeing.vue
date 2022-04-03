<template>
  <div class="imgs">
  </div>
  <div>
      <h7 class="primTex">
          ひさしぶり!
      </h7>
      <h1 class="secTex">
          ¡Hola, te extrañamos!
      </h1>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style>
.imgs{
    width: 70%;
    height:10%;
    display:block;
margin:auto;
position: absolute;
max-width: 255px;
min-height: 140px;
left: 32%;
top: 15%;
align-items: center;
background: url(./imgs/pack2779.png);
}

.primTex
{
position: absolute;
left:15%;
width: 70%;
top: 35%;

font-family: 'Poppins';
font-style: normal;
font-weight: 900;
font-size: 36.5385px;
line-height: 55px;
text-align: center;
letter-spacing: 0.065em;

color: #FFFFFF;
}
.secTex
{
position: absolute;
width: 70%;
height: 20%;
top: 42%;
left:15%;


font-family: 'Roboto';
font-style: italic;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
letter-spacing: 0.065em;

color: #FFFFFF;
}
</style>