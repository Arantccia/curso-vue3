<script lang="ts">

import * as vue from "vue";
import { Itodo } from "./IUserDTO ";



export default vue.defineComponent({
  beforeCreate() {
   },
  created() {
    //this.index 

  },
  beforeUpdate() {}, 
  name: "CompFormDif",
  inject:['random'],


  data() {
    return {
      message: '' as string,
      area: '' as string,
      checkboxLonly: false as boolean,
      checkboxMulti: [] as string[],
      radioBoton: '' as string,
      selectArray:[] as string[],
      selectMulti:[] as string[],
      listSelect: this.random 
    }

  }, 



})
</script>


<template>
   <div className="container">
        <label for="message" className="form-label"> <span className="text-info bg-dark"> input:</span>{{` ${message}`}}</label>
        <input id="message" type="text" placeholder=" input text" v-model="message" className="form-control" />
        <label for="area" className="form-label"> <span className="text-info bg-dark">textarea:</span>{{` ${area}`}}</label>
        <textarea id="area" type="text" placeholder=" input textarea" v-model="area" className="form-control" />
        <div className="form-inline">
            <label class="form-check-label" for="checkboxLonly"><span className="text-info bg-dark">checkboxLonly:</span>{{` ${checkboxLonly}`}}</label>
            <input type="checkbox" id="checkboxLonly" v-model="checkboxLonly">
           <div class="form-check my-1 me-sm-2">
                <label class="form-check-label me-2" for="eustasio"><span className="text-info bg-dark">checkboxMulti eustasio:</span>{{checkboxMulti[0] === 'undefined' ? '' : checkboxMulti[0]}}</label>
                <input type="checkbox" id="eustasio" value="eustasio" v-model="checkboxMulti">
                <label class="form-check-label me-2 ms-2" for="rigoberto"><span className="text-info bg-dark">checkboxMulti rigoberto:</span>{{checkboxMulti[1] === 'undefined' ? '' : checkboxMulti[1]}}</label>
                <input type="checkbox" id="rigoberto" value="rigoberto" v-model="checkboxMulti">
                <label class="form-check-label me-2 ms-2" for="gerardo"><span className="text-info bg-dark">checkboxMulti gerardo:</span>{{checkboxMulti[2] === 'undefined' ? '' : checkboxMulti[2]}}</label>
                <input type="checkbox" id="rigoberto" value="gerardo" v-model="checkboxMulti">
           </div>
           <div className="form-check my-1 me-sm-2">
                <label className="form-check-label me-2 ms-2" for="uno"><span className="text-info bg-dark">radioBoton uno:</span>{{radioBoton === 'uno' ? radioBoton : ''}}</label>
                <input type="radio" id="uno" value="uno" v-model="radioBoton">
                <label className="form-check-label me-2 ms-2" for="dos"><span className="text-info bg-dark">radioBoton dos:</span>{{radioBoton === 'dos' ? radioBoton : ''}}</label>
                <input type="radio" id="dos" value="dos" v-model="radioBoton">
            </div>
        </div>
        <div className="form-check my-1 me-sm-2">
            <label for="selectNormal" lassName="form-check-label me-2 ms-2"> <span className="text-info bg-dark"> selectNormal:</span>{{` ${selectArray}`}}</label>
            <select v-model="selectArray" id="selectNormal"  className="form-select" >
                <option v-for="option in listSelect" v-bind:key="option.id" v-bind:value="option.completed"  >{{option.name}}</option>
            </select>
            <hr />
            <label for="selectMulti" lassName="form-check-label me-2 ms-2"> <span className="text-info bg-dark"> selectMulti:</span>{{` ${selectMulti}`}}</label>
            <select v-model="selectMulti" id="selectMulti" multiple  className="form-select">
                <option v-for="option in listSelect" v-bind:key="option.id" v-bind:value="option.completed"  >{{option.name}}</option>
            </select>
    
        </div>
        
        
   </div>
</template>