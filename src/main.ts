import Vue, { CreateElement, VNode } from 'vue'
import App from './App.vue'

import VueCompositionAPI, { createApp } from '@vue/composition-api'
import VueEllipseProgress from 'vue-ellipse-progress'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueCompositionAPI)

const app = createApp({ render: (h => h(App)) as ((h: CreateElement) => VNode) })

app.config.productionTip = false
app.use(VueEllipseProgress)
  .use(BootstrapVue)
  .use(IconsPlugin)

app.mount('#app')
