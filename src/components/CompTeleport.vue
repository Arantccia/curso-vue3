<script lang="ts">

import * as vue from "vue";
import { registerRuntimeCompiler } from "vue";


export default vue.defineComponent({

  name: "CompTelepot",
  data(){
    return{

        disableTeleport: true as boolean,
        teleportposition: 'teleport-A' as string
    }
  },
  computed: {
    possition():string {
        return `#${this.teleportposition}`
    }
  }


})
</script>


<template>
   <div className="container border border-info" >  
        <teleport to="body" v-bind:disabled="!disableTeleport">
            <p> habilitamos o deshabilitamos el teleport para que se pinte en el boy o en el componente </p>  
         </teleport>
         <teleport to="teleport-test">
            hola soy un un teleport 
        </teleport>
        <teleport  v-bind:to="possition"> 
          <div> Esyoy siendo dinamico estoy en {{teleportposition}}</div>
        </teleport>
        
        {{possition}}
        <input name="teleportposition" type="radio" v-model="teleportposition" v-bind:value="'teleport-A'" />A
        <input name="teleportposition" type="radio" v-model="teleportposition" v-bind:value="'teleport-B'" />B

        <input name="disableTeleport" type="checkbox"  v-model="disableTeleport" />disabled
        
                   
   </div>
</template>