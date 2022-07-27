
<script lang="ts">

import * as vue from "vue";


export default vue.defineComponent({
    name: "ComponentDim1",
    props: {
        /* text: {
        type: String as vue.PropType<string>,
        required: true,
        default:'prueba de default si no se le pasa el props'
        }
     */
    },
    beforeCreate() { },
    created() {
        console.log('componente uno creado');
    },
    beforeUpdate() {
        console.info('beforeUpdate')
        console.log(this.$props) 
        console.log(this.$data)   
    }, 

     data() {
        return {
        counter: 0 as number,
        }

    }, 
    methods: {
        userClick():void {
      this.counter++
    }
    },
    computed: {},      
    
 
})
</script>

<template>
    <div>
        <h2> COMPONENTE DINAMICO 1</h2>
        <button type="button" className="btn btn-success" v-on:click="userClick">contador {{counter}}</button>

    </div>
</template>