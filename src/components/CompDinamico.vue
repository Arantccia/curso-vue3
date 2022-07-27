
<script lang="ts">

import * as vue from "vue";
import ComponentDim1Vue from "./ComponentDim1.vue";
import ComponentDim2Vue from "./ComponentDim2.vue";

export default vue.defineComponent({
    name: "CompDinamico",
    components:{
        ComponentDim1Vue,
        ComponentDim2Vue
    },
    props: {
        /* text: {
        type: String as vue.PropType<string>,
        required: true,
        default:'prueba de default si no se le pasa el props'
        } */
    
    },
    beforeCreate() { },
    created() {},
    beforeUpdate() {
        console.info('beforeUpdate')
        console.log(this.$props) 
        console.log(this.$data)   
    }, 

    data() {
        return {
        componentId:"Component1"
        }

    },
    methods: {
        changeComponent (component:string):void{
            const me = this;
            me.componentId = component;
        }
    },
    computed: {},      
    
 
})
</script>

<template>
    <div>
        <h1> Padre componetes dinamicos </h1>
        <keep-alive>
        <component v-bind:is="componentId" tag="sinkeepalive" />
        </keep-alive>
        <component v-bind:is="componentId" />
    </div>
</template>