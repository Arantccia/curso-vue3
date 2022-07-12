<script lang="ts">

import * as vue from "vue";
import H1 from "./H1.vue";
import Parra from "./Parra.vue";
import { IUserDTO } from "./IUserDTO "






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
            Parra
           
    },
    data() {
        return {
            persona:{
                 name: 'Juan',
                surname: 'Perez',
                age:10
                } as IUserDTO
            ,
             
        }
        }
    } );

</script>

<template>
  
    <div>
        <h1 className="bg-primary text-white text-center p-4"> APP.vue</h1>
         <H1 text="Estamos en el componente H1" />
         <Parra v-bind:person="persona" />
      
    </div>
   
  
    
</template>