<template>
    <div id="map" class="h-full"></div>
</template>

<script lang="ts">
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
    name: "LMap",
    mounted(){
        var map = L.map("map").setView([50.1583, 12.6437], 13);
        var tilelayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        }).addTo(map);
        console.log(tilelayer)
    }
}
</script>