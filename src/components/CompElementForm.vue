<script lang="ts">

import * as vue from "vue";


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
        type:String,
        required:true
    }
  },
  
  data(): Record<string, unknown> {
    return{
        password: '' as string,
        rePassword: '' as string
    }
  },
  methods:{
    passWordOk():void{
        const me = this;
        if(me.password === me.rePassword){
            me.$emit('update:modelValue', me.password )
        }
    }
  } 

})
</script>


<template>
   <div className="container">  
        <div className="text-center">
            <label for="password" className="form-label  text-info  me-5" placeholder="escriba su password"> Password</label>
            <input type="text" id="password" v-model="password" v-on:keyup="passWordOk"/>
        </div>
        <div className="text-center">
            <label for="rePassword" className="form-label  text-info  me-4"> Re-Password</label>
            <input type="Password" id="rePassword" v-model="rePassword"  placeholder="escriba su password" v-on:keyup="passWordOk"/> 
        </div>
        
            
   </div>
</template>