<template>
    <button class="bg-indigo-500 hover:bg-indigo-800 py-1 px-2">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "VButton"
})
</script>
