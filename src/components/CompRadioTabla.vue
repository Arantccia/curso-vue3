<script lang="ts">
import * as vue from "vue";
import ComTablaEjer from "./ComTablaEjer.vue";
import CompListEjer from "./CompListEjer.vue";

export default vue.defineComponent({
  name: "CompRadioTabla",
  components: {
    ComTablaEjer,
    CompListEjer,
  },

  data() {
    return {
      radioBoton: "" as string,
      componentId: "ComTablaEjer",
    };
  },
  computed: {
    valor() {
      return this.valueObject;
    },
  },
  watch: {
    radioBoton: {
      handler(newValue) {
        if (newValue === "tabla") {
          this.componentId = "ComTablaEjer";
        } else if (newValue === "lista") {
          this.componentId = "CompListEjer";
        }
      },
      immediate: true,
    },
  },
});
</script>

<template>
  <div>
    <div className="container">
      <div className="form-inline text-center">
        <div className="form-check my-1 me-sm-2">
          <label className="form-check-label me-2 text-primary" for="tabla"
            >Mostrar tabla</label
          >
          <input type="radio" id="tabla" value="tabla" v-model="radioBoton" />
          <label className="form-check-label me-2 ms-5 text-primary" for="lista"
            >Mostrar listado</label
          >
          <input type="radio" id="lista" value="lista" v-model="radioBoton" />
        </div>
      </div>
    </div>

    <component v-bind:is="componentId" v-show="radioBoton" />
  </div>
</template>
