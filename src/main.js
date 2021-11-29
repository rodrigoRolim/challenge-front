import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faEnvelope, faBook, faIdCard, faPencilAlt, faMapMarkedAlt, faCity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faEnvelope, faBook, faIdCard, faPencilAlt, faMapMarkedAlt, faCity);

createApp(App).use(store).use(router).component('AIcon', FontAwesomeIcon).mount('#app')
