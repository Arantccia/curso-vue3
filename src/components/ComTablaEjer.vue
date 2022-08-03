<script lang="ts">
import { faColonSign } from "@fortawesome/free-solid-svg-icons";
import * as vue from "vue";
import { Itodo } from "./IUserDTO ";
import CompTrEjer from "./CompTrEjer.vue";
import CompFormEjer from "./CompFormEjer.vue";

export default vue.defineComponent({
  created() {
    /*       console.log(Object.keys(this.list[0]));
        console.log(this.list) */
  },

  name: "ComTablaEjer",
  inject: ["listToDo"],
  components: {
    CompTrEjer,
    CompFormEjer,
  },

  data() {
    return {
      list: this.listToDo,
      showForm: false as boolean,
    };
  },
});
</script>

<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th># -</th>
          <th scope="col" className="form-inline" v-for="cab in Object.keys(list[0])">
            {{ cab }}
          </th>
        </tr>
      </thead>
      <tbody>
        <CompTrEjer v-for="value in list" v-bind:key="value.id" v-bind:value="value" />
      </tbody>
    </table>
    <CompFormEjer v-show="!showForm" />
  </div>
</template>
