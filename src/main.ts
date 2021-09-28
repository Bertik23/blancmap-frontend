import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "./index.css"


const app = createApp(App).use(router)

app.mixin({
    methods: {
        logIntoConsole(toLog: string){
            console.log(toLog);
        },
        alertToBrowser(toAlert: string){
            alert(toAlert);
        }
    },
  })

app.mount("#app")