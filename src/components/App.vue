<script lang="ts">

import * as vue from "vue";
import H1 from "./H1.vue";
import Parra from "./Parra.vue";
import TablaVue from "./Tabla.vue";
import ComponentDim1Vue from "./ComponentDim1.vue";
import ComponentDim2Vue from "./ComponentDim2.vue";
import ComponentSlot from "./ComponentSlot.vue"
import { IUserDTO, Itodo } from "./IUserDTO "
import todoList from "./todoList.json"
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

export default vue.defineComponent({
 
    beforeCreate() { },
        created() {
           /*  console.log(this.$props) 
            console.log(this.$data)  */
        /*    setInterval(() => {
                this.persona.age = Math.random()*100
            }, 1000) */ 
        },
        name: "App",
        components: {
            H1,
            Parra,
            TablaVue,
            ComponentDim1Vue,
            ComponentDim2Vue,
            ComponentSlot  
        },
        
        data() {
            return {
                persona:{
                    name: 'Juan',
                    surname: 'Perez',
                    age:10
                    } as IUserDTO
                ,
                todoDTOS: todoList as Itodo[],
                componentId: "ComponentDim1Vue",
                objecClass:{
                 'text-warning': true as boolean,
                 'text-info': false as boolean
                }
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
            },

            changeComponent (component:string):void{
            const me = this;
            me.componentId = component;
            console.log(component);
            console.log(me.componentId);
                if(component === "ComponentDim1Vue"){
                    me.componentId = "ComponentDim2Vue" 
                    me.objecClass['text-info'] = false
                    me.objecClass['text-warning'] = true
                } else{
                    me.componentId = "ComponentDim1Vue"
                    me.objecClass['text-info'] = true
                    me.objecClass['text-warning'] = false
                }
            
            }
        },

        provide(): Record<string, unknown> {
            return {
                random: vue.computed(() => this.todoDTOS),
                lengthrandom: vue.computed(() => this.todoDTOS.lenght)
            }
        } ,
                      
} );

</script>

<template>
  
    <div className="container">
   <!--      <h1 class="bg-primary text-white text-center p-4"> APP.vue</h1>
        <hr/>
             <H1 text="Estamos en el componente H1" />
        <hr/>     
         <Parra v-bind:person="persona" />
        <hr/>  -->
         <TablaVue prueba="prueba" idAtrrs="15"  v-bind:todoDTO="todoDTOS" v-on:change="changeJason" v-bind:remuve="removeJason" />
             <h3  v-bind:class="objecClass"> con keep-alive</h3>
          <keep-alive>
            <component v-bind:is="componentId" tag="sinkeepalive" />
        </keep-alive>
         <h3  v-bind:class="objecClass"> sin keep-alive</h3>
        <component v-bind:is="componentId" />
        <!-- <button type="button" className="btn btn-primary" v-on:click="changeComponent(componentId)">cambiar el componente</button>  -->
      
        <ComponentSlot />
        <ComponentSlot>
            <template v-slot:default="slotLoop" > <h3>v-slot:default</h3> {{slotLoop.listname}} -{{ slotLoop.listcompleted}} </template>
            <template v-slot:content >
                                <button type="button" className="btn btn-primary" v-on:click="changeComponent(componentId)">cambiar el componente</button>
            </template>
        </ComponentSlot>
        <ComponentSlot>
            <template v-slot:content>
                <img src="https://picsum.photos/250" />
            </template>
            <template v-slot:footer > estoy poneniendo el footer desde el padre</template>
        </ComponentSlot>
        <ComponentSlot>
            <p>  no le hemos dado conmbre al slot y hay dos por default</p>
            <template v-slot:content="name" > contenido data hijo {{name}}-{{name.nombre}}-{{name.apellido}}</template>
        </ComponentSlot>
    <H1 text="Estamos en el componente H1" />
        
    </div>
   
  
    
</template>