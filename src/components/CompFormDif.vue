<script lang="ts">

import * as vue from "vue";
import { Itodo } from "./IUserDTO ";



export default vue.defineComponent({
  beforeCreate() {
    console.log(this.todoDto)
   },
  created() {
    //this.index 

  },
  beforeUpdate() {}, 
  name: "CompFormDif",


  data() {
    return {
      message: '' as string,
      area: '' as string,
      checkboxLonly: false as boolean,
      checkboxMulti: [] as string[]
    }

  }, 



})
</script>


<template>
   <div className="container">
        <label for="message" className="form-label"> <span className="text-info bg-dark">Label input:</span>{{` ${message}`}}</label>
        <input id="message" type="text" placeholder=" input text" v-model="message" className="form-control" />
        <label for="area" className="form-label"> <span className="text-info bg-dark">Label textarea:</span>{{` ${area}`}}</label>
        <textarea id="area" type="text" placeholder=" input textarea" v-model="area" className="form-control" />
        <div className="form-inline">
            <label class="form-check-label" for="checkboxLonly"><span className="text-info bg-dark">Label checkboxLonly:</span>{{` ${checkboxLonly}`}}</label>
            <input type="checkbox" id="checkboxLonly" v-model="checkboxLonly">
           <div class="form-check my-1 me-sm-2">
                <label class="form-check-label me-2" for="eustasio"><span className="text-info bg-dark">Label eustasio:</span>{{checkboxMulti[0] === 'undefined' ? '' : checkboxMulti[0]}}</label>
                <input type="checkbox" id="eustasio" value="eustasio" v-model="checkboxMulti">
                <label class="form-check-label me-2 ms-2" for="rigoberto"><span className="text-info bg-dark">Label rigoberto:</span>{{checkboxMulti[1] === 'undefined' ? '' : checkboxMulti[1]}}</label>
                <input type="checkbox" id="rigoberto" value="rigoberto" v-model="checkboxMulti">
                <label class="form-check-label me-2 ms-2" for="gerardo"><span className="text-info bg-dark">Label gerardo:</span>{{checkboxMulti[2] === 'undefined' ? '' : checkboxMulti[2]}}</label>
                <input type="checkbox" id="rigoberto" value="gerardo" v-model="checkboxMulti">
           </div>
        </div>
   </div>
</template>