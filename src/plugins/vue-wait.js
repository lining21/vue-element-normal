import Vue from 'vue';
import VueWait from 'vue-wait';

// add VueWait as Vue plugin
Vue.use(VueWait);

export default new VueWait({
  useVuex: true, // Uses Vuex to manage wait state
  vuexModuleName: 'wait', // Vuex module name

  registerComponent: true, // Registers `v-wait` component
  componentName: 'v-wait', // <v-wait> component name, you can set `my-loader` etc.

  registerDirective: true, // Registers `v-wait` directive
  directiveName: 'wait', // <span v-wait /> directive name, you can set `my-loader` etc.
});
