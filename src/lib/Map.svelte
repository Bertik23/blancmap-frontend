<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMap, TileLayer} from 'svelte-leafletjs';
    import GeoJSON from "../lib/GeoJSON.svelte"

    const mapOptions = {
        center: [1.250111, 103.830933],
        zoom: 13,
    };
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        maxNativeZoom: 19,
        attribution: "© OpenStreetMap contributors",
    };
    const geoJsonOptions = {
        style: function(geoJsonFeature) {
            console.log('style', geoJsonFeature);
            return {};
        },
        onEachFeature: function(feature, layer) {
            console.log('onEachFeature', feature, layer);
        },
    };

    export let objects;
</script>

<div class="example" style="width: 100vw; height: 100vh">
    <LeafletMap options={mapOptions}>
        <TileLayer url={tileUrl} options={tileLayerOptions}/>
        {#each objects as object}
            <GeoJSON bind:data={object} />
            <!-- options={geoJsonOptions}/> -->
        {/each}
    </LeafletMap>
</div>