<template>
    <button
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <i
            v-if="!visible"
            class="bi"
            :class="hover ? 'bi-eye-fill' : 'bi-eye'"
        >
        </i>
        <i
            v-if="visible"
            class="bi"
            :class="hover ? 'bi-eye-slash-fill' : 'bi-eye-slash'"
        >
        </i>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "VisibilityButton",
    props:{
        visible: Boolean
    },
    data() {
        return {
            hover: false
        }
    }
})
</script>
