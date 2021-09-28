<template>
  <!-- <input type="checkbox" v-on:change="toggle" id="themeToggle"><label for="themeToggle">Change Theme</label> -->
  <Switch
    v-model="enabled"
    :class="enabled ? 'bg-gray-400' : 'bg-gray-600'"
    class="relative inline-flex items-center h-6 rounded-full w-11 mx-4"
    @click="toggle"
  >
    <span class="sr-only">Ahoj</span>
    <span
      :class="enabled ? 'translate-x-6 bg-gray-600' : 'translate-x-1 bg-gray-400'"
      class="inline-block w-4 h-4 transform rounded-full transition-all ease-in-out duration-200"
    ></span>
  </Switch>
</template>

<script>
import { Switch } from '@headlessui/vue'
import { ref } from 'vue'

export default {
  components: {
    Switch
  },
  setup() {
    const enabled = ref(!window.matchMedia("(prefers-color-scheme: dark)").matches)

    return { enabled }
  },
  methods: {
    toggle() {
        if (document.documentElement.classList.contains("dark")){
            document.documentElement.classList.remove("dark")
        } else {
        document.documentElement.classList.add("dark")
        }
    }
  }
};
</script>