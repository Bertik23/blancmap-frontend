import { createApp } from 'vue'
import Vue from "vue"
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "leaflet/dist/leaflet.css";
import "./index.css"
import backendAPI from './plugins/backendAPI'

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $backendAPI: typeof backendAPI
    }
}

const app = createApp(App).use(router)

const backendAPIPlugin = {
    install(inApp: Vue.App){
        inApp.config.globalProperties.$backendAPI = backendAPI;
        inApp.provide("backendAPI", backendAPI)
    }
}

app.use(backendAPIPlugin)

const vm = app.mount("#app")
