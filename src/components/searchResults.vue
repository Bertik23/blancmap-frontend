<template>
    <div :class="visible ? 'visible' : 'invisible'" class="absolute h-4/6 top-1/6 right-5 left-5 sm:right-1/6 sm:left-1/6 bg-gray-700 z-50 border-gray-800 border-2 rounded-2xl">
        <div class="flex bg-gray-800 rounded-t-xl -mt-px">
            <h2 class="inline-block text-xl px-3 py-1">Search results for {{ searchQuery }}</h2>
            <span class="flex-grow "/>
            <button class="self-center p-px mr-3 hover:bg-gray-700 rounded-full h-5" v-on:click="toggleVisibility(false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                </svg>
            </button>
        </div>
        <div class="mx-2 overflow-scroll h-full">
            <div v-for="feature in searchResults.filter(function(i){return i != ''})" v-bind:key="feature.properties.osm_id"
                class="border-gray-800 border-2 my-1 rounded-lg px-1"
            >
                <h3>{{ feature.properties.display_name }}</h3>
                <add-layer-button :data="feature" v-on:adding="onAddData"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import addLayerButton from './addLayerButton.vue'

export default defineComponent({
  components: { addLayerButton },
    name: "searchResults",
    emits:["adding"],
    data(){
        return {
            visible: false,
            searchQuery: ""
        }
    },
    props:{
        searchResults: Object,
    },
    methods:{
        toggleVisibility(override: boolean): void{
            if (override){
                this.visible = override
                console.log("from overide")
                return
            }
            console.log("ouside of overide")
            this.visible = !this.visible
        },
        setQuery(query: string): void{
            this.searchQuery = query
        },
        getVisibility(): boolean{
            return this.visible
        },
        log(toLog: string): void{
            console.log(toLog)
        },
        onAddData(data: Record<string, unknown>): void{
            this.$emit("adding", data)
        }
    }
})
</script>
