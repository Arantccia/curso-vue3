<script lang="ts">

import * as vue from "vue";
import {IUserDTO} from "./IUserDTO "


export default vue.defineComponent({
    beforeCreate() {console.log('estoy en beforeCreate')},
    created() {
        this.todojunto
    },
    name: "Parra",

    props: {
        person: Object as vue.PropType<IUserDTO>
        
    },

    methods: {
        toLogic():void {
            this.todojunto = `nombre: ${this.person.name}, apellido: ${this.person.surname}, edad: ${this.person.age}, random: ${Math.random()}`
        },
       
    },

    data() {
        return {
            todojunto: "" as string,
            statica: `nombre: ${this.person?.name}, apellido: ${this.person?.surname}, edad: ${this.person?.age}, random: ${Math.random()}` as string,
            mensaje: "nombre:" + this.person?.name +","+ "apellido:" + this.person?.surname + ","+"edad:" + this.person?.age 
            
        }
    },

    computed: {
        returnPerson() {
            return this.mensaje.split(',').reverse().join()
        }
    }

    } );

</script>

<template>
    <h2> Estamos en el componente Parrafo</h2>
  
    <button v-on:click="toLogic()">llama a doLogic</button>
    <h3>Se visualiza el onclick del metodo: toLogic </h3>
      <p>{{todojunto}}</p>
    <hr/>
    <h3>Se visualiza la variable statica </h3>
    <p>{{statica}}</p>
    <hr/>

    <p for="msm">return mensaje computed manejado a traves del input : <b>{{returnPerson}}</b> </p>
    <input id="msm"  type="text" v-model="mensaje" >
   
   
</template>

<style scoped>
button {
  font-weight: bold;
  background-color: blue;
  border-radius:  4px 4px 4px 4px;
  padding: 10px;
  color: white;
  box-shadow: 2px 2px 3px darkgray;
}
input {
  padding: 10px;
  border-radius:  4px 4px 4px 4px;
  width: 250px;
  

}
</style>