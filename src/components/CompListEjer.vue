<script lang="ts">

import { faColonSign } from "@fortawesome/free-solid-svg-icons";
import * as vue from "vue";
import {Itodo} from "./IUserDTO "
import TrTabla from "./TrTabla.vue";


export default vue.defineComponent({
    beforeCreate() {

    },
    created() {
     },
    beforeUpdate() { },
    name: "CompListEjer", 
    methods: {
        modifica() {
        console.log('estoy en modifica' )
            
        },

    },
    data() {
        return {
            todoDto: {
                id: 0 as number,
                name: "" as string,
                completed: true as boolean,
                complete: true as boolean ,
                delete: true as boolean
            }
        };
    },

})
</script>

<template>
  <div>
    <h3> Listado To-Do</h3>
    <ul class="list-group">
        <li type="button" class="list-group-item list-group-item-primary list-group-item-action" v-on:click="modifica">A simple primary list group item</li>
        <li class="list-group-item list-group-item list-group-item-action" v-on:click="modifica">A simple primary list group item</li>
    </ul>
  </div>
</template>