<script lang="ts">

import * as vue from "vue";
import { Itodo } from "./IUserDTO ";



export default vue.defineComponent({
  beforeCreate() {
    console.log(this.todoDto)
   },
  created() {
    //this.index 

  },
  beforeUpdate() {}, 
  name: "Tabla",
  emit: ["cambia"],

  props: {
   value: {
     type: Object as vue.PropType<Itodo>,
     required: true,
    
    },
    borra: {
      type: Function as vue.PropType<(id:number) => void>,
      required: true,
    }
  },
 /*  data() {
    return {
      index: 1 as number,
    }

  }, */
  methods: {

    complete() {
      console.log(`este es el id de complete ${this.value.id}`)
      this.$emit('cambia', this.value.id)
    //  
    },

    remove(){
      console.log(`este es el id de delete ${this.value.id}`)
      Reflect.apply(this.borra, null, [this.value.id])
    }
}

})
</script>


<template>
  <div>
    
    <tr  class="table-striped">
          <!-- <th scope="row" >{{index}}</th> -->
          <td>{{value.id}}</td>
          <td>{{value.name}}</td>
          <td> 
            <span v-if="value.completed === true" > Si, terminado </span>
            <span v-if="value.completed === false" > No, terminado</span>
          </td>
          <td>
            <button v-on:click="complete">complete</button>
          </td>
          <td>
            <button v-on:click="remove">delete</button>
          </td>
    </tr>

  </div>
</template>