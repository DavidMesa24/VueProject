<template>
  <div class="container">
    <div class="row align-items-start">
      <div class="col-2 col11">
        <div class="d-flex flex-row">
          <div class="p-2"><img src="../../public/image1.png" /></div>
          <div class="p-2">
            <h2 class="mb-5">
              <span style="color: white">anime</span>
              <span style="color: #ca38ed">yabu.</span>
            </h2>
            <MenuUser/>
          </div>
        </div>
      </div>
      <div class="col bg-black col22 mb-3">
        <div class="WelProps"><WelcomeUser/></div>
        
        </div>
         
       </div>
    </div>
</template>

<script lang="ts">
import MenuUser from "../components/MenuUser.vue";
import WelcomeUser from "../components/WelcomeUser.vue";
export default { components: { MenuUser, WelcomeUser } };
</script>

<style>

.col22{
    width:50%;
    min-width: 300px;
}

.col11{
background:#3E1149;
min-width: 300px;
}

.WelProps{
  position: relative;
  top:15%;
  min-width: 300px;
}
</style>