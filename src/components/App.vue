<script lang="ts">

import * as vue from "vue";
import H1 from "./H1.vue";
import Parra from "./Parra.vue";
import TablaVue from "./Tabla.vue";
import { IUserDTO, Itodo } from "./IUserDTO "
import todoList from "./todoList.json"








export default vue.defineComponent({
    
    beforeCreate() { },
    created() {
        console.log(this.$props) 
        console.log(this.$data) 
     /*    setInterval(() => {
            this.persona.age = Math.random()*100
        }, 1000) */ 
        },
        name: "App",
        components: {
    H1,
    Parra,
    TablaVue
},
    data() {
        return {
            persona:{
                 name: 'Juan',
                surname: 'Perez',
                age:10
                } as IUserDTO
            ,

            todoDTOS: todoList as Itodo[]
             
        }
        }
    } );

</script>

<template>
  
    <div>
        <h1 class="bg-primary text-white text-center p-4"> APP.vue</h1>
        <hr/>
             <H1 text="Estamos en el componente H1" />
        <hr/>     
         <Parra v-bind:person="persona" />
        <hr/> 
         <TablaVue v-bind:todoDTO="todoDTOS" />
    </div>
   
  
    
</template>