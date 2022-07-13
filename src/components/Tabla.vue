<script lang="ts">

import * as vue from "vue";
import {Itodo} from "./IUserDTO "


export default vue.defineComponent({
  beforeCreate() {
    console.log(this.todoDto)
   },
  created() {},
  beforeUpdate() {}, 
  name: "Tabla",
 props: {
  // todoDTO: Array as vue.PropType<Itodo>,
   todoDTO: {
     type: Array as vue.PropType<Itodo[]>,
     required: true,
     default:[
                 {
                id: 1,
                name: 'yogurt',
                completed: false
                }
            ]
        }
        
    },
  data() {
    return {
      todoDto: {
                id: 0 as number,
                name: '' as string,
                completed:true as boolean
            }
    }
  }


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
        <tr  v-for="(value , index) in todoDTO " :key='value.id'>
          <th scope="row" >{{index +1}}</th>
          <td>{{value.id}}</td>
          <td>{{value.name}}</td>
          <td> 
            <span v-if="value.completed === true" > Si, terminado</span>
            <span v-if="value.completed === false" > No, terminado</span>
            
            </td>
        </tr>
        
      </tbody>
    </table>
    </div>
   </div> 
</template>