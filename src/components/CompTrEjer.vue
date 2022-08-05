<script lang="ts">
import * as vue from "vue";

import { Itodo } from "./IUserDTO ";

export default vue.defineComponent({
  name: "CompTrEjer",
  inject: ["changeJason", "removeJason"],
  emits: ["showForm"],
  beforeUpdate() {
    console.log(this.$refs);
    console.log("beforeUpdatee tr");
  },
  props: {
    value: {
      type: Object as vue.PropType<Itodo>,
      required: true,
    },
    ind: Number,
  },

  data() {
    return {
      val: this.value as Itodo,
      showFormtr: false as boolean,
    };
  },

  methods: {
    complete() {
      console.log(`este es el id de complete ${this.val.id}`);
      Reflect.apply(this.changeJason, null, [this.val.id]);
    },

    remove() {
      console.log(`este es el id de delete ${this.val.id}`);
      Reflect.apply(this.removeJason, null, [this.val.id]);
    },
    clickForm() {
      this.showFormtr = true;
      this.$emit("showForm", this.val, this.showFormtr);
    },
  },
});
//className="cursor-pointer"
</script>

<template>
  {{}}
  <tr v-on:click="clickForm">
    <th scope="row">{{ ind }} {{ showFormtr }}</th>
    <td>{{ val.id }}</td>
    <td>{{ val.name }}</td>
    <td>{{ val.descripcion }}</td>
    <td>
      <span v-if="val.completed === true"> Si, terminado </span>
      <span v-if="val.completed === false"> No, terminado</span>
    </td>
    <td>
      <button className="btn btn-outline-dark" v-on:click="complete">complete</button>
    </td>
    <td>
      <button className="btn btn-outline-danger" v-on:click="remove">delete</button>
    </td>
  </tr>
</template>

<style scoped>
tr:hover {
  cursor: pointer;
  background-color: #0d6efd;
}
</style>
