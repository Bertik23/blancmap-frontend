<template>
    <main-layout>
      <div class="grid grid-cols-6 h-full">
        <div class="col-span-6">
          <form>
            <input type="text"><button type="submit" class="">Search</button>
          </form>
        </div>
        <div class="col-span-5">
          <LMap/>
        </div>
        <div class="w-52 min-w-52">
          Here make it
        </div>
      </div>
    </main-layout>
</template>

<script lang="ts">
import MainLayout from '../layouts/Main.vue'
import LMap from "../components/LMap.vue"

export default {
  components: {
    MainLayout,
    LMap
  }
}
</script>