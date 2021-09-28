<template>
    <nav class="sticky top-0 bg-gray-800 rounded-b text-white">
        <div class="relative flex items-center justify-between h-14">
            <div class="absolute inset-y-0 left-2 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <button type="button" v-on:click="this.menuOpen = !this.menuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <!--
                    Icon when menu is closed.

                    Heroicon name: outline/menu

                    Menu open: "hidden", Menu closed: "block"
                -->
                <svg :class="this.menuOpen ? 'hidden' : 'block'" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!--
                    Icon when menu is open.

                    Heroicon name: outline/x

                    Menu open: "block", Menu closed: "hidden"
                -->
                <svg :class="this.menuOpen ? 'block' : 'hidden'" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
                <h1 class="text-2xl">Blancmap</h1>
            </div>
            <div class="ml-2 hidden sm:block">
                <h1 class="inline-block text-2xl">Blancmap</h1>
                <router-link class="inline-block px-2 py-1 mx-3 rounded h-full hover:bg-gray-700" v-for="site in navSites" v-bind:key="site.url" :to="site.url">{{site.name}}</router-link>
                <!-- <a class="inline-block mx-5" v-for="site in navSites" v-bind:key="site.url" :href=site.url>{{ site.name }}</a> -->
            </div>
            <div class="absolute inset-y-0 right-2 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <dark-mode-toggle></dark-mode-toggle>
            </div>
        </div>
        <div :class="this.menuOpen ? '': 'hidden'" class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <div class="grid grid-cols-1">
                    <router-link class="px-2 py-1 mx-3 rounded h-full text-xl hover:bg-gray-700" v-for="site in navSites" v-bind:key="site.url" :to="site.url">{{site.name}}</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import darkModeToggle from "./darkModeToggle.vue"

export default {
    name: "navbar",
    props: ["navSites"],
    components:{
        darkModeToggle
    },
    data(){
        return {
            menuOpen: false
        }
    }
}
</script>

<style lang="postcss" scoped>
    .router-link-exact-active{
        @apply bg-gray-900
    }
</style>