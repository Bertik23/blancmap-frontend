<template>
    <v-button v-on:click="onClick">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
        </svg>
    </v-button>
</template>

<script lang="ts">
import VButton from "./VButton.vue"
import { defineComponent } from 'vue'

export default defineComponent({
    name:"addLayerButton",
    components:{
        VButton
    },
    emits:["adding"],
    props:{
        data: Object
    },
    methods:{
        onClick(){
            console.log("On Click")
            console.log(this.$parent)
            this.$emit("adding", this.data)
        }
    }
})
</script>
