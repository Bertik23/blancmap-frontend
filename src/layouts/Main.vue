<template>
    <div class="flex flex-col h-screen">
        <navbar :navSites="navSites"></navbar>
        <div class="m-8 flex-grow">
            <slot></slot>
        </div>
        <Vfooter/>
    </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import Vfooter from "../components/Vfooter.vue"
export default {
  components: {
      navbar,
      Vfooter
  },
    data:() => ({
    navSites: [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: "About",
        url: "/about"
    }
    ]
})
}
</script>