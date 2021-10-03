<template>
    <main-layout>
      <SearchResults ref="searchResults" :searchResults="addData" v-on:adding="onAddData"/>
      <form @submit.prevent="onSubmit()" class="mb-3 inline-block">
        <input v-model="searchQuery" type="text" class="text-black py-1 px-2"> <button class="bg-indigo-500 hover:bg-indigo-800 py-1 px-2" type="submit">Search</button>
      </form>
      <VisibilityButton class="ml-1 inline-block bg-indigo-500 hover:bg-indigo-800 py-1 px-2" v-on:click="searchResults.toggleVisibility()" :visible="getSearchResultsVisibility()" type="null"/>
      <div class="grid grid-cols-12 h-full">
        <div class="col-span-8 md:col-span-9 lg:col-span-10">
          <IndexMap class="z-0" :data="mapData.filter(function(i){return i != ''})"/>
        </div>
        <div class="col-span-4 md:col-span-3 lg:col-span-2">
          More to do here
        </div>
      </div>
    </main-layout>
</template>

<script lang="ts">
import MainLayout from '../layouts/Main.vue'
import IndexMap from "../components/IndexMap.vue"
import SearchResults from "../components/searchResults.vue"
import VisibilityButton from "../components/VisibilityButton.vue"
import { defineComponent, ref } from "vue";
//import VButton from "../components/VButton.vue"

export default defineComponent({
  components: {
    MainLayout,
    IndexMap,
    SearchResults,
    VisibilityButton
  },
  setup(){
    const searchResults = ref<InstanceType<typeof SearchResults>>()
    return {searchResults}
  },
  data(){
    return {
      searchQuery: "Sokolov",
      addData: [""],
      resultsVisible: false,
      mapData: [] as Record<string, unknown>[]
      //searchResults: ref<InstanceType<typeof SearchResults>>()
    }
  },
  methods: {
    async onSubmit(){
      console.log(typeof(this))
      console.log(this.addData)
      this.addData = await this.$backendAPI.searchObject(this.searchQuery)
      this.resultsVisible = true
      this.searchResults?.toggleVisibility(true)
    },
    getSearchResultsVisibility(): boolean{
      if (this.searchResults){
        return this.searchResults.getVisibility()
      } else {
        return false
      }
    },
    log(toLog: string){
      console.log(toLog)
    },
    onAddData(data: Record<string, unknown>){
        console.log(JSON.parse(JSON.stringify(data)))
      this.mapData.push(JSON.parse(JSON.stringify(data)))
    }
  }
})
</script>