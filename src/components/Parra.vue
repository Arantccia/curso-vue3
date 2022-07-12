<script lang="ts">

import * as vue from "vue";
import {IUserDTO, IinfoMovie} from "./IUserDTO "


export default vue.defineComponent({
    beforeCreate() {console.log('estoy en beforeCreate')},
    created() {
        this.todojunto
    },
    name: "Parra",

    props: {
        person: Object as vue.PropType<IUserDTO>,
        
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
            mensaje: "nombre:" + this.person?.name + "," + "apellido:" + this.person?.surname + "," + "edad:" + this.person?.age,
            counter: 0 as number,
            movie: 'Batman' as string,
            infoMovie: {
                tittel: '',
                year: 0
            } as IinfoMovie,

            listaMovie: ['star treck', 'dune'] as string[],
            concatMovie: ['abre los ojos', 'palmeras en la nieve'] as string[]
            
        }
    },

    computed: {
            returnPerson():string {
                return this.mensaje.split(',').reverse().join("")
            },
            prueba(): string {
                
            return this.person.name + "-" + this.person.surname +"-"+ this.person.age + "-"+ Math.random() 
            },
            metodo(): string {
            return this.counter %2 === 0 ?`nombre: ${this.person.name }, edad: ${this.person.age = Math.random()*100 }` : `apellido: ${this.person.surname}, nombre: ${this.person.name}`
                
            },
    },

    watch: {
        counter(newValue, oldValue) {
            if (newValue > oldValue && newValue === 3) {
                alert('salta el watch')
            }
        },
        movie: {
            handler(newValue) {
                console.log(`nuevo valor del watch movie string: ${newValue}`)
            },
            immediate: true           
        },
        infoMovie: {
                handler(newValue) {
                    console.log(`llama a los valores de infoMuvie objeto: ${newValue.tittel} y ${newValue.year}`)
             },
                deep:true  
        },
        listaMovie: {
                handler(newValue) {
                    console.log(`llama a los valores de listaMovie que modifica Array ${newValue}`)
                },
             deep:true  
        },
        concatMovie: {
                  handler(newValue) {
                    console.log(`llama a los valores de concatMovie que crea un nuevo Array ${newValue}`)
                }
        }
    }

    } );

</script>

<template>
    <h2 class="center"> Estamos en el componente Parrafo</h2>
  
    <button v-on:click="toLogic()">llama a doLogic</button>
    <h3 class="center">Se visualiza el onclick del metodo: toLogic </h3>
      <p>{{todojunto}}</p>
    <hr/>
    <h3 class="center">Se visualiza la variable statica </h3>
    <p>{{statica}}</p>
    <hr/>
        <h3 class="center">computed: la funcion se ejecuta con el cambio del input y poniendo comas </h3>
        <p>return mensaje computed manejado a traves del input : <b>{{returnPerson}}</b> </p>
        <input   type="text" v-model="mensaje" >
    <hr/>
        <h3 class="center">porque cambia el computed prueba cuando el computes metodo es par? por que en el computed metodo le hemos dicho this.person.age es igual a algo y cambia la variable </h3>
        <p >prueba : <b>{{prueba}}</b> </p>
   <hr/>
         <h3 class="center">computed cambiando si es par o inpar y watch cuando llega a 3 saltando modal</h3>
        <button @click="counter++">{{counter % 2 === 0 ? 'es Par' : ' es impar'}}-{{counter}}</button>
        <p>{{metodo}}</p>
    <hr/>

        <h3 class="center">watch en profundidad, con string, objeto y array (modificando -> necesita atributo deep y creando -> sin el atributo deep) </h3>
        <input   type="text" v-model="movie" />
        <input   type="text" v-model="infoMovie.tittel" />
        <input   type="number" v-model="infoMovie.year" /><br/>
        <div class="padding">
            <button  @click="listaMovie.push('marvel')"> modifica array listaMovie -{{listaMovie.length}}</button> &nbsp
            <button  @click="concatMovie=concatMovie.concat('tesis')"> crea unevo array concatMovie -{{concatMovie.length}}</button>
        </div>
        

</template>

<style scoped>
button {
  font-weight: bold;
  background-color: blue;
  border-radius:  4px 4px 4px 4px;
  padding: 10px;
  color: white;
  box-shadow: 2px 2px 3px darkgray;
  text-align: center !important;
}
input {
  padding: 10px;
  border-radius:  4px 4px 4px 4px;
  width: 250px;
  

}
.padding {
    padding: 10px;
}
.center {
    text-align: center;
}
</style>