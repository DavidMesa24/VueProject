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
  left: 182px;
  top: 412px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: -0.103101px;

  color: #ffffff;
}
.contra{
    position: absolute;
width: 82px;
height: 21px;
left: 182px;
top: 503px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
/* identical to box height */

letter-spacing: -0.103101px;

color: #FFFFFF;
}
.inEmail {
  position: absolute;
  width: 343px;
  height: 60px;
  left: 181px;
  bottom: 530px;
  color: white;

  background: rgba(255, 255, 255, 0.47);
  border: 2px solid white;
  box-sizing: border-box;
  border-radius: 10px;
}

.inPasw{
    position: absolute;
width: 343px;
height: 60px;
left: 181px;
bottom: 440px;
color: white;

background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
}

.btnAcc
{
    position: absolute;
width: 338px;
height: 60px;
left: 183px;
bottom: 336px;
text-decoration: solid;

background: #E487FB;
border-radius: 10px;
}

.line1{
    position: absolute;
width: 80px;
height: 0px;
left: 181px;
top: 741px;

border: 2px solid #FFFFFF;
}

.line2{
position: absolute;
width: 80px;
height: 0px;
left: 443px;
top: 741px;

border: 2px solid #FFFFFF;
}

.regTxt{
    position: absolute;
width: 163px;
height: 21px;
left: 272px;
top: 731px;

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
width: 51px;
height: 51px;
left: 235px;
top: 772px;

background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
}

.twitter{
    position: absolute;
width: 51px;
height: 51px;
left: 329px;
top: 772px;

background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
}

.facebook{
    position: absolute;
width: 51px;
height: 51px;
left: 423px;
top: 772px;

background: rgba(255, 255, 255, 0.47);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;
}
</style>
