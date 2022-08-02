<script lang="ts">

import * as vue from "vue";
import {directiveAran} from "./../directivas/directivasAran"

export default vue.defineComponent({
  beforeCreate() {},
  created() {
    const me = this;
    me.password = me.modelValue
   
  },
  beforeUpdate() {}, 
  name: "CompElementForm",
  emit:['update:modelValue'],
  props: {
    modelValue:{
        type: String,
        required:true
    },
  
  },
  directives:{
    abujalance: directiveAran
  },
 data(): Record<string, unknown> {
    return{
        password: '' as string,
        rePassword: '' as string,
        argValueForDirective: 'hola' as string,
        directiveBoolean: this.pruebaElementDirectiva,
        paramName:'' as string
    }
  },
  methods:{
    passWordOk():void{
        const me = this;
        if(me.password === me.rePassword){
            me.directiveBoolean = true
            me.$emit('update:modelValue', me.password )
         
        }
    }
  } 

})
</script>


<template>
   <div className="container">  
        <div className="text-center">
            <label for="password" className="form-label  text-info  me-5" placeholder="escriba su password" v-directiveAran:password> Password</label>
            <input type="text" id="password" v-model="password" v-on:keyup="passWordOk" />
        </div>
        <div className="text-center">
            <label for="rePassword" className="form-label  text-info  me-4"> Re-Password</label>
            <input type="Password" id="rePassword" v-model="rePassword"  placeholder="escriba su password" v-on:keyup="passWordOk"/> 
        </div>

        <p v-directiveAran:argValueForDirective >Lo cambia la directiva</p>
        <p v-directiveAran:password >Lo cambia la directiva</p>
        <p v-directiveAran:[argValueForDirective]="'literal string value'">Lo cambia la directiva</p>
        <p v-directiveAran:[argValueForDirective]="{pru1:1, pru2: 2}">Lo cambia la directiva</p>


        <p v-directiveAran:paramDos.reverse.uppercase="argValueForDirective">Valor dinámico - Argumento fijo</p>
        <p v-directiveAran:[paramName]="'literal string'">Valor literal -Argumento dinámico</p>
        <p v-directiveAran:paramDos="{pru1:1, pru2: 2}">Valor literal - Objeto</p>
        <p v-directiveAran:paramDos.a.b>Lo cambia la directiva</p>
        <p v-abujalance>Lo cambia la directiva</p>               
   </div>
</template>