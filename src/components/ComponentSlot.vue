
<script lang="ts">

import * as vue from "vue";
import { Itodo } from "./IUserDTO ";
import todoList from "./todoList.json"


export default vue.defineComponent({
    name: "ComponentSlot",
       beforeCreate() { },
    created() {
        console.log('component slot');
    },
    beforeUpdate() {
        console.info('beforeUpdate')
        console.log(this.$props) 
        console.log(this.$data)   
    }, 
    data(){
        return{
            name:'Arantxa' as string,
            surname:'bujalance' as string,
            todoDTOS: todoList as Itodo[],
        }
    }
  
    
 
})
</script>

<template>
    <div>
        <h2 className="text-success text-center">componente slot</h2>
        <div class="card border-success mb-3" style="max-width: 18rem;">
            <div class="card-header bg-transparent border-success">
                <slot>
                    cabezera sin slot
                </slot>
            
            </div>
            <div class="card-body text-success">
                <slot name="content" v-bind:nombre="name" v-bind:apellido="surname">
                    <h5 class="card-title">Cabecera slot</h5>
                    <p class="card-text">puedo poner un contenido por defecto</p>
                </slot>
                <slot>
                    <lu>
                        <li v-for="value in todoDTOS" v-bind:key="value.id">
                            {{value.name}}-{{value.completed}}
                        </li>
                    </lu>
                </slot>
            </div>
            
                <div class="card-footer bg-transparent border-success">
                    <slot name="footer" >
                    Footer slot
                    </slot>
                </div>
            
        </div>

       
<!-- 
        <b-card
            header="Card Header"
            header-text-variant="white"
            header-tag="header"
            header-bg-variant="dark"
            footer="Card Footer"
            footer-tag="footer"
            footer-bg-variant="success"
            footer-border-variant="dark"
            title="Title"
            style="max-width: 20rem;"
        >
         <b-card-text>Header and footers variants.</b-card-text>
        </b-card> -->
    </div>
</template>