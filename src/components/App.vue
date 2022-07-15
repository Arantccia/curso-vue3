<script lang="ts">

import * as vue from "vue";
import H1 from "./H1.vue";
import Parra from "./Parra.vue";
import TablaVue from "./Tabla.vue";
import { IUserDTO, Itodo } from "./IUserDTO "
import todoList from "./todoList.json"
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";








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
        },

        methods: {
            changeJason(id) {
                console.log('estoy en changeJason')
                 this.todoDTOS.find(data => {
                  if (data.id === id) {
                        console.log(data)
                      if (data.completed === true) {
                            data.completed = false
                      } else {
                            data.completed = true
                        }
                    }
                })
            },
            removeJason(id) {
                console.log('removeJason')
                const index = this.todoDTOS.findIndex(data => data.id === id)
                this.todoDTOS.splice(index,1)   
            }
        },
       
                            
        } );

</script>

<template>
  
    <div>
   <!--      <h1 class="bg-primary text-white text-center p-4"> APP.vue</h1>
        <hr/>
             <H1 text="Estamos en el componente H1" />
        <hr/>     
         <Parra v-bind:person="persona" />
        <hr/>  -->
         <TablaVue v-bind:todoDTO="todoDTOS" v-on:change="changeJason" v-bind:remuve="removeJason" />
    </div>
   
  
    
</template>