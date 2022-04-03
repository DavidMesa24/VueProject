<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Inicio from "./views/Inicio.vue";
</script>

<template>
  <header>
    <div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/user">User</RouterLink>
        <RouterLink to="/registro">Registro</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
