<script lang="ts">
import * as vue from "vue";
import { Itodo } from "./IUserDTO ";

export default vue.defineComponent({
  mounted() {
    this.$refs.completeFocus.focus();
  },

  name: "CompFormEjer",
  props: {
    valueObject: {
      type: Object as vue.PropType<Itodo>,
      required: true,
    },
  },
  data() {
    return {
      checkboxMulti: [] as string[],
      /* val: this.valueObject as Itodo, */
    };
  },
  methods: {
    editValue() {
      this.$refs.completeFocus.focus();
      console.log(this.value);
    },
  },
  /*   watch: {
    valueObject: {
      handler(newValue, oldValue) {
        this.val = newValue;
      },
    },
  }, */
});
</script>

<template>
  <form>
    <div className="form-inline">
      <div className="form-check">
        <label className="form-check-label me-2 ms-2 " for="negrita"> Negrita: </label>
        <input type="checkbox" id="negrita" value="negrita" v-model="checkboxMulti" />
        <label className="form-check-label me-2 ms-2 " for="rojo">Rojo:</label>
        <input type="checkbox" id="rojo" value="rojo" v-model="checkboxMulti" />
      </div>

      <div className="form-row ">
        <div className="form-group ">
          <label for="name" className="col-form-label">name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            v-model="valueObject.name"
          />
        </div>
        <div className="form-group ">
          <label for="descripcion" className="col-form-label">descripcion</label>
          <input
            type="text"
            className="form-control"
            id="descripcion"
            placeholder="descripcion"
            v-model="valueObject.descripcion"
            ref="completeFocus"
          />
        </div>
        <div id="descripcionHelp" className="form-text">Campo obligatorío</div>
      </div>
    </div>

    <button type="submit" class="btn btn-primary btn-lg mt-5" v-on:click="editValue">
      Grabar cambios
    </button>
  </form>
</template>

<!--    <div className="form-inline">
      <label for="name" className="form-label text-primary"> name:</label>
      <input
        id="name"
        type="text"
        placeholder="name"
        v-model="val.name"
        className="form-control"
      />
      <label for="descripcion" className="form-label text-primary">Description:</label>
      <input
        id="descripcion"
        type="text"
        placeholder="Description"
        className="form-control"
        v-model="val.descripcion"
        ref="completeFocus"
      />
    </div> -->

<!--     <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="negrita"
        v-model="checkboxMulti"
      />
      <label className="form-check-label" for="negrita">negrita</label>

      <input
        type="checkbox"
        className="form-check-input"
        id="rojo"
        v-model="checkboxMulti"
      />
      <label className="form-check-label" for="rojo">rojo</label>
    </div>
    <input
      type="checkbox"
      className="form-check-input"
      id="rojo"
      v-model="checkboxMulti"
    />
    <label className="form-check-label" for="rojo">rojo</label> -->

<!--    <button type="button" class="btn btn-primary btn-lg mt-5" v-on:click="editValue">
      Grabar cambios
    </button> -->
