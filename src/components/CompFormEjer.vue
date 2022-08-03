<script lang="ts">
import * as vue from "vue";

export default vue.defineComponent({
  beforeCreate() {},
  created() {
    //this.index
  },
  beforeUpdate() {},
  name: "CompFormEjer",
  inject: ["random"],
  data() {
    return {
      message: "" as string,
      area: "" as string,
      checkboxLonly: false as boolean,
      checkboxMulti: [] as string[],
      radioBoton: "" as string,
      selectArray: [] as string[],
      selectMulti: [] as string[],
      radioBotonDin: "" as string,
      dinamicRadio: Math.random(),
      listSelect: this.random,
      customElement: "",
      pruebaElementDirectiva: false as boolean,
    };
  },
});
</script>

<template>
  <div>
    <div className="container">
      <label for="message" className="form-label">
        <span className="text-info bg-dark"> input:</span>{{ ` ${message}` }}</label
      >
      <input
        id="message"
        type="text"
        placeholder=" input text"
        v-model="message"
        className="form-control"
      />
      <label for="area" className="form-label">
        <span className="text-info bg-dark">textarea:</span>{{ ` ${area}` }}</label
      >
      <textarea
        id="area"
        type="text"
        placeholder=" input textarea"
        v-model="area"
        className="form-control"
      />
      <div className="form-inline">
        <label class="form-check-label" for="checkboxLonly"
          ><span className="text-info bg-dark">checkboxLonly:</span
          >{{ ` ${checkboxLonly}` }}</label
        >
        <input
          type="checkbox"
          id="checkboxLonly"
          v-model="checkboxLonly"
          true-value="soy true"
          false-value="soy falso"
        />
        <div class="form-check my-1 me-sm-2">
          <label class="form-check-label me-2" for="eustasio"
            ><span className="text-info bg-dark">checkboxMulti eustasio:</span
            >{{ checkboxMulti[0] === "undefined" ? "" : checkboxMulti[0] }}</label
          >
          <input type="checkbox" id="eustasio" value="eustasio" v-model="checkboxMulti" />
          <label class="form-check-label me-2 ms-2" for="rigoberto"
            ><span className="text-info bg-dark">checkboxMulti rigoberto:</span
            >{{ checkboxMulti[1] === "undefined" ? "" : checkboxMulti[1] }}</label
          >
          <input
            type="checkbox"
            id="rigoberto"
            value="rigoberto"
            v-model="checkboxMulti"
          />
          <label class="form-check-label me-2 ms-2" for="gerardo"
            ><span className="text-info bg-dark">checkboxMulti gerardo:</span
            >{{ checkboxMulti[2] === "undefined" ? "" : checkboxMulti[2] }}</label
          >
          <input type="checkbox" id="rigoberto" value="gerardo" v-model="checkboxMulti" />
        </div>
      </div>
    </div>
  </div>
</template>
