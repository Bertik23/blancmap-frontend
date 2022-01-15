<script>
    import {createEventDispatcher, getContext, onDestroy, setContext} from 'svelte';
    import L from 'leaflet';
    import EventBridge from 'svelte-leafletjs';
    const {getMap} = getContext(L);

    export let data;
    export let options = {};
    export let events = [];
    let geojson;
    setContext(L.Layer, {
        getLayer: () => geojson,
    });
    const dispatch = createEventDispatcher();
    let eventBridge;
    $: {
        if (!geojson) {
            console.log("Making new layer")
            console.log(geojson)
            geojson = L.geoJSON(null, options).addTo(getMap());
            eventBridge = new EventBridge(geojson, dispatch, events);
        }
        geojson.clearLayers();
        geojson.addData(data);
    }
    onDestroy(() => {
        eventBridge.unregister();
        geojson.removeFrom(getMap());
    });
    export function getGeoJSON() {
        return geojson;
    }
</script>

<div>
    {#if geojson}
        <slot/>
    {/if}
</div>