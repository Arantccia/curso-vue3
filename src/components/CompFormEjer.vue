<script lang="ts">
import * as vue from "vue";
import { Itodo } from "./IUserDTO ";

export default vue.defineComponent({
  mounted() {
    this.$refs.completeFocus.focus();
  },

  name: "CompFormEjer",
  props: {
    valueList: {
      type: Object as vue.PropType<Itodo>,
      required: true,
    },
  },
  data() {
    return {
      checkboxMulti: [] as string[],
      val: this.valueList as Itodo,
    };
  },
  methods: {
    editValue() {
      this.$refs.completeFocus.focus();
      console.log(this.value);
    },
  },
});
</script>

<template>
  <form>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="name" className="col-form-label">name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="name"
          v-model="val.name"
        />
      </div>
      <div className="form-group col-md-6">
        <label for="descripcion" className="col-form-label">descripcion</label>
        <input
          type="text"
          className="form-control"
          id="descripcion"
          placeholder="descripcion"
          v-model="val.descripcion"
          ref="completeFocus"
        />
      </div>
      <div id="descripcionHelp" className="form-text">Campo obligatorío</div>
    </div>

    <div classNameName="form-inline">
      <div className="form-check my-1 me-sm-2">
        <label className="form-check-label me-2 ms-2 text-primary" for="negrita">
          Negrita:
        </label>
        <input type="checkbox" id="negrita" value="negrita" v-model="checkboxMulti" />
        <label className="form-check-label me-2 ms-2 text-primary" for="rojo"
          >Rojo:</label
        >
        <input type="checkbox" id="rojo" value="rojo" v-model="checkboxMulti" />
      </div>

      <!--    <button type="button" class="btn btn-primary btn-lg mt-5" v-on:click="editValue">
      Grabar cambios
    </button> -->
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
