<script lang="ts">

import * as vue from "vue";


export default vue.defineComponent({
  beforeCreate() { },
/*   created() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }, */
    created() {
      this.counter
  
    
  },
  beforeUpdate() {
    console.info('beforeUpdate')
     console.log(this.$props) 
     console.log(this.$data)   
  }, 
  name: "H1",
  data() {
    return {
      counter: 0 as number,
      clicks: 0 as number
    }

  },
  methods: {
    userClick():void {
      this.clicks++
    }
    
  },

  computed: {
    cmputesTest() {
    return this.counter %2 //calcula los pares es par si es === 0 
   }
  },
 
  props: {
    text: {
      type: String as vue.PropType<string>,
      required: true,
      default:'prueba de default si no se le pasa el props'
    }
 
  }
})
</script>

<template>
    <h2> {{text}}</h2>

    <button @click="counter++" >contador:{{counter}}</button>
    <button v-on:click="userClick()" >contador methods:{{clicks}}</button>
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
</style>