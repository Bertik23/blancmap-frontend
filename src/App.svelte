<script lang="ts">
    import router from "page"
    import Demo from './pages/demo.svelte'
    import Demo2 from './pages/demo2.svelte'
    import Map from "./pages/Map.svelte"
    // import About from './components/About.svelte'   

    let page;

    router('/', () => page = Map)
    router('/demo', () => page = Demo)
    router('/demo2', () => page = Demo2)
    // router('/about', () => page = About)

router.start()
</script>


<svelte:component this={page} />

