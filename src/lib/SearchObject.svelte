<script lang="ts">
    import {search} from "../scripts/api"

    export let searchResults;

    let query;

    function searchUI(_){
        search(query).then(data => {console.log(data); searchResults = data})
    }
</script>

<form on:submit|preventDefault={searchUI}>
    <input type="text" name="id" bind:value="{query}">
    <button type="submit">Search</button>
</form>

<style>
    form{
        position: absolute;
        top: 2rem;
        left: 3rem;
        z-index: 1000000;
    }
</style>