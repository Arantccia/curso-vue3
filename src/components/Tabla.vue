<script lang="ts">

import * as vue from "vue";
import {Itodo} from "./IUserDTO "
import TrTabla from "./TrTabla.vue";


export default vue.defineComponent({
    beforeCreate() {
        console.log(this.todoDto);
    },
    created() { },
    beforeUpdate() { },
    name: "Tabla", 
    emit:['change'],
    props: {
        todoDTO: {
            type: Array as vue.PropType<Itodo[]>,
            required: true
        },
        remuve: {
            type: Function as vue.PropType<(id:number) => void>,
            required: true,
        } 
    },
    data() {
        return {
            todoDto: {
                id: 0 as number,
                name: "" as string,
                completed: true as boolean,
                complete: true as boolean ,
                delete: true as boolean
            }
        };
    },
  methods: {
    modifica(id) {
      console.log('estoy en modifica' + id)
        this.$emit('change', id)
    },
    borrar(id) {
      console.log('estoy en borra splice()' + id)
       Reflect.apply(this.remuve, null, [id])

    }
  },
  components: { TrTabla }

})
</script>

<template>
<div>
  <h1 className="text-center"> Aplicacion de ToDos</h1>
   <div class="container">
      <table class="table table-striped">
      <thead>
        <tr >
          <th># - </th>
          <th scope="col" className="form-inline"  v-for="(value , key, index) in todoDto " :key='index'>{{key}}</th>
        </tr>
      </thead>
      <tbody>
        <TrTabla  v-on:cambia="modifica" v-bind:borra="borrar" v-for="(value , index) in todoDTO " v-bind:key='value.id' v-bind:value="value" />
        
      </tbody>
    </table>
    </div>
   </div> 
</template>