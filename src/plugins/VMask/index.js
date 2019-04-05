// import something here
import VueTheMask from 'vue-the-mask/src/directive.js'
// import {VMoney} from 'v-money'

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  Vue.directive('mask', VueTheMask);
  // Vue.directive('money', VMoney);
}
