<script lang="ts">
import * as vue from "vue";

import { Itodo } from "./IUserDTO ";

export default vue.defineComponent({
  name: "CompTrEjer",
  inject: ["changeJason", "removeJason"],

  props: {
    value: {
      type: Object as vue.PropType<Itodo>,
      required: true,
    },
  },

  data() {
    return {
      showForm: false as boolean,
    };
  },

  methods: {
    complete() {
      console.log(`este es el id de complete ${this.value.id}`);
      Reflect.apply(this.changeJason, null, [this.value.id]);
    },

    remove() {
      console.log(`este es el id de delete ${this.value.id}`);
      Reflect.apply(this.removeJason, null, [this.value.id]);
    },
  },
});
</script>

<template>
  <tr>
    <th scope="row">0</th>
    <td>{{ value.id }}</td>
    <td>{{ value.name }}</td>
    <td>{{ value.descripcion }}</td>
    <td>
      <span v-if="value.completed === true"> Si, terminado </span>
      <span v-if="value.completed === false"> No, terminado</span>
    </td>
    <td>
      <button className="btn btn-outline-dark" v-on:click="complete">complete</button>
    </td>
    <td>
      <button className="btn btn-outline-danger" v-on:click="remove">delete</button>
    </td>
  </tr>
</template>
