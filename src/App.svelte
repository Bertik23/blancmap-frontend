<script lang="ts">
    import router from "page"
    import Demo from './pages/demo.svelte'
    import Demo2 from './pages/demo2.svelte'
    // import About from './components/About.svelte'   

    let page;

    router('/demo', () => page = Demo)
    router('/demo2', () => page = Demo2)
    // router('/about', () => page = About)

router.start()
</script>


<svelte:component this={page} />

