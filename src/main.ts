import * as vue from "vue";

// import App from "./components/App.vue";
import App from "./components/App.vue";
import BootstrapVue3 from 'bootstrap-vue-3'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import {directiveAran} from "./directivas/directivasAran"


library.add(fas)
// const vm : vue.App = vue.createApp(App);

/* Si necesitamos pasar parametros/propiedades al componente */
const vm : vue.App = vue.createApp( {
    
    render : () => {
        return vue.h( App, {

            title : "Training Vue3",

        } );
    },
 

} );
vm.directive('directiveAran', directiveAran )
vm.use(BootstrapVue3)
//vm.component('fa', FontFace)

/* Avoid warning message. The message indicates set this config to not show it */
vm.config.unwrapInjectedRef = true;

vm.mount("#bootstrap");

