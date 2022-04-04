<script lang="ts" src>
import FormNatural from "./FormNatural.vue";
import FormJuridica from "./FormJuridica.vue";
export default {
  data() {
    return {
      awesome: "Natural",
    };
  },
  components: { FormNatural, FormJuridica },
};
</script>

<template>
  <div class="container">
    <div class="row align-items-start">
      <div class="col"></div>
      <div class="row col-md-6 offset-md-3">
        <h1 class="textos ">Tipo de persona</h1>
        <div class="form-check form-check-inline">
          <input
            @input="awesome = 'Natural'"
            class="form-check-input radio"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label class="form-check-label textos" for="inlineRadio1"
            >Natural</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            @input="awesome = 'Juridica'"
            class="form-check-input radio"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label class="form-check-label textos" for="inlineRadio2"
            >Juridica</label
          >
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>

  <h1 v-if="awesome === 'Natural'"><FormNatural /></h1>
  <h1 v-else><FormJuridica /></h1>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}

.radio{
    background: rgba(255, 255, 255, 0.47);
    
}
.radio:checked{
    background: #FFFFFF;
    border-radius: 10px;
}

</style>