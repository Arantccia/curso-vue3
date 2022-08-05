<script lang="ts">
import { faColonSign } from "@fortawesome/free-solid-svg-icons";
import * as vue from "vue";
import { Itodo } from "./IUserDTO ";
import CompTrEjer from "./CompTrEjer.vue";
import CompFormEjer from "./CompFormEjer.vue";

export default vue.defineComponent({
  created(): void {
    /*       console.log(Object.keys(this.list[0]));
        console.log(this.list) */
  },

  name: "ComTablaEjer",
  inject: ["listToDo"],
  components: {
    CompTrEjer,
    CompFormEjer,
  },
  /* props: {
    showFormtr: {
      type: Boolean as vue.PropType<boolean>,
      required: true,
    },
  }, */
  data() {
    return {
      list: this.listToDo,
      showForm: false as boolean,
      valueList: {} as Itodo,
    };
  },
  methods: {
    showFormtr(data, boolean) {
      console.log(data);
      this.showForm = boolean;
      this.valueList = { ...data };
    },
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
        <CompTrEjer
          v-for="(value, index) in list"
          v-bind:key="value.id"
          v-bind:value="value"
          v-bind:ind="index"
          v-on:showForm="showFormtr"
        />
      </tbody>
    </table>

    <CompFormEjer v-if="showForm" v-bind:valueList="valueList" />
  </div>
</template>
