<template>
    <div class="h-full">
        <l-map
            :center="[50.1583, 12.6437]"
            :zoom="13"
        >
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" :attribution="attribution"/>
            <l-geo-json v-for="feature in data" v-bind:key="feature.properties.osm_id" v-bind:geojson="feature"/>
        </l-map>
    </div>
</template>

<script lang="ts">
//import L from "leaflet";
import { defineComponent } from 'vue'
import { LMap, LGeoJson, LTileLayer } from "@vue-leaflet/vue-leaflet"


export default defineComponent({
  components: { LMap, LGeoJson, LTileLayer },
    name: "IndexMap",
    data(){
        return {
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        }
    },
    props:{
        data: Object
    }
    // mounted(){
    //     this.map = L.map("map").setView([50.1583, 12.6437], 13);
    //     this.tilelayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         maxZoom: 19,
    //         attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    //     }).addTo(this.map);
    //     console.log(this.tilelayer)
    // },
    // methods:{
    //     addGeoJsonLayer(geoJson: any): void{
    //         L.geoJSON(geoJson).addTo(this.map)
    //     }
    // }
})
</script>