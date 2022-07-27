
<script lang="ts">

import * as vue from "vue";


export default vue.defineComponent({
    name: "ComponentDim1",
    props: {
      /*   text: {
        type: String as vue.PropType<string>,
        required: true,
        default:'prueba de default si no se le pasa el props'
        } */ 
    },
    beforeCreate() { },
    created() {
        console.log('componente dos creado');
    },
    beforeUpdate() {
        console.info('beforeUpdate')
        console.log(this.$props) 
        console.log(this.$data)   
    }, 

    /* data() {
        return {
        componentId:"Component1"
        }

    }, */
    methods: {
       
    },
    computed: {},      
    
 
})
</script>

<template>
    <div>
     <h2> COMPONENTE DINAMICO 2</h2>
    </div>
</template>