<script lang="ts">
import * as vue from "vue";
import { Itodo } from "./IUserDTO ";
import CompSlotEncabtEje from "./CompSlotEncabEjer.vue";

export default vue.defineComponent({
  mounted() {
    this.$refs.completeFocus.focus();
  },

  name: "CompFormEjer",
  inject: ["changeInputJason"],
  emits: ["hidenForm"],
  components: { CompSlotEncabtEje },
  props: {
    valueObject: {
      type: Object as vue.PropType<Itodo>,
      required: true,
    },
  },
  data() {
    return {
      checkboxMulti: [] as string[],
      objecClass: {
        "text-danger": false as boolean,
        "fw-bold": false as boolean,
      },
      /* val: this.valueObject as Itodo, */
    };
  },
  methods: {
    editValue() {
      Reflect.apply(this.changeInputJason, null, [this.valueObject]);
      this.$emit("hidenForm", false);
    },
  },
  watch: {
    checkboxMulti: {
      handler(newValue, oldValue) {
        console.log(newValue, oldValue);
        const me = this;
        if (newValue.includes("negrita") && newValue.length === 1) {
          me.objecClass["fw-bold"] = true;
          me.objecClass["text-danger"] = false;
        }
        if (newValue.includes("rojo") && newValue.length === 1) {
          me.objecClass["fw-bold"] = false;
          me.objecClass["text-danger"] = true;
        }
        if (newValue.length === 2 || newValue.length === 0) {
          me.objecClass["fw-bold"] = false;
          me.objecClass["text-danger"] = false;
        }
      },
    },
  },
});
</script>

<template>
  <div className="formu">
    <CompSlotEncabtEje>
      <template v-slot:encabezado> Edita tarea </template>
    </CompSlotEncabtEje>
    <form>
      <div className="form-inline text-center mt-2 mb-2">
        <div className="form-check my-1 me-sm-2">
          <label className="form-check-label me-2 text-primary" for="negrita">
            Label a Negrita:
          </label>
          <input type="checkbox" id="negrita" value="negrita" v-model="checkboxMulti" />

          <label className="form-check-label me-2 ms-5 text-primary" for="rojo">
            Label a Rojo:
          </label>
          <input type="checkbox" id="rojo" value="rojo" v-model="checkboxMulti" />
        </div>

        <div className="form-row ms-2 me-2">
          <div className="form-group ">
            <label for="name" className="col-form-label" v-bind:class="objecClass">
              Nombre de la Tarea
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
              v-model="valueObject.name"
            />
          </div>
          <div className="form-group">
            <label for="descripcion" className="col-form-label" v-bind:class="objecClass">
              Escriba descrpción
            </label>
            <input
              type="text"
              className="form-control "
              id="descripcion"
              placeholder="descripcion"
              v-model="valueObject.descripcion"
              ref="completeFocus"
            />
          </div>
          <div id="descripcionHelp" className="form-text">Campo obligatorío</div>
        </div>
        <button type="button" class="btn btn-primary btn-lg mt-3" v-on:click="editValue">
          Grabar cambios
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.formu {
  margin-left: 15rem;
  margin-right: 15rem;
  margin-top: 1 px;
  margin-bottom: 1 px;
  border: 1px solid #0d6efd;
}
</style>

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

<!--    <button type="submit" class="btn btn-primary btn-lg mt-5" v-on:click="editValue">
      Grabar cambios
    </button> -->
