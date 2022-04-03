<template>
  <div>
    <div class="email"> Email </div>

    <div>
      <input class="inEmail" type="email" placeholder="name@example.com" />
    </div>
     <div class="contra"> Contraseña </div>
    <div>
      <input type="password" class="inPasw" id="exampleInputPassword1" />
    </div>
    <button type="submit" class="btnAcc">Acceder</button>
  </div>
  <div >
      <img class="line1" src="./imgs/Line13.png">
  </div>
  <div >
      <img class="line2" src="./imgs/Line13.png">
  </div>
  <div>
      <div class="regTxt">Regístrate también con</div>
  </div>

  <div >
      <img class="insta" src="./imgs/logos/Instagram Logo.png">
  </div>
  <div >
      <img class="twitter" src="./imgs/logos/Twitter Logo.png">
  </div>
   <div >
      <img class="facebook" src="./imgs/logos/Group 98.png">
  </div>

  <div>

  </div>
</template>

<script lang="ts">
export default {};
</script>

<style>
.email {
  position: absolute;
  width: 38px;
  height: 21px;
  left: 25%;
  top: 50%;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: -0.103101px;

  color: #ffffff;
}
.contra{
    position: absolute;
width: 82px;
left: 25%;
top: 59%;

font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 21px;
/* identical to box height */

letter-spacing: -0.103101px;

color: #FFFFFF;
}
.inEmail {
  position: absolute;
  width: 50%;
  height: 6%;
  left: 25%;
  bottom: 41%;
  color: white;
  min-width: 250px;

  background: rgba(255, 255, 255, 0.47);
  border: 2px solid white;
  box-sizing: border-box;
  border-radius: 10px;
}

.inPasw{
    position: absolute;
width: 50%;
  height: 6%;
  left: 25%;
bottom: 32%;
color: white;
min-width: 250px;

background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
}

.btnAcc
{
    position: absolute;
width: 50%;
  height: 6%;
  left: 25%;
bottom: 24%;
text-decoration: solid;
min-width: 250px;

background: #E487FB;
border-radius: 10px;
}

.line1{
    position: absolute;
width: 15%;
min-width: 100px;
height: 0px;
left: 20%;
top: 80%;

border: 2px solid #FFFFFF;
}

.line2{
position: absolute;
width: 15%;
min-width: 100px;
height: 0px;
left: 65%;
top: 80%;

border: 2px solid #FFFFFF;
}

.regTxt{
    position: absolute;
width: 18%;
min-width: 100px;
height: 21px;
left: 42%;
top: 79%;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
/* identical to box height */

text-align: center;
letter-spacing: -0.103101px;

color: #FFFFFF;
}

.insta
{
    position: absolute;
width: 50px;
height: 50px;
left: 30%;
top: 85%;

background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
}

.twitter{
position: absolute;
width: 50px;
height: 50px;
left:47%;
top: 85%;

background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
}

.facebook{
    position: absolute;
width: 50px;
height: 50px;
left:65%;
top: 85%;

background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
}
</style>
