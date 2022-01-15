<script lang="ts">
    import SearchObject from '../lib/SearchObject.svelte';
    import Map from '../lib/Map.svelte'

    let searchResults = []
    let mapObjects = []
</script>

<SearchObject bind:searchResults={searchResults}/>

<Map bind:objects={searchResults} />

<!-- {mapObjects}/> -->

{#each searchResults as result}
    <p>{result.properties.display_name}</p>
{/each}