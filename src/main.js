import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faBook, 
  faCity, 
  faEnvelope, 
  faIdCard, 
  faKey,
  faMapMarkedAlt, 
  faPencilAlt, 
  faUser, 
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faBook, 
  faCity, 
  faEnvelope, 
  faIdCard, 
  faKey,
  faMapMarkedAlt, 
  faPencilAlt, 
  faUser, 
);

createApp(App).use(store).use(router)
  .component('AIcon', FontAwesomeIcon).mount('#app')
