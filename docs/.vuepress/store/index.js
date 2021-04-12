// // store/index.js
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     count: 0,
//   },
//   mutations: {
//     increment(state) {
//       state.count++;
//     },
//   },
// });

// store.commit('increment');

// console.log(store.state.count);

// export default new Vuex.Store({
//   state: {
//     user: {
//       username: 'matt',
//       fullName: 'Matt Maribojoc',
//     },
//   },
//   getters: {},
//   mutations: {},
//   actions: {},
// });


// const fs = require('fs');
// const yaml = require('js-yaml');

// try {
//     let fileContents = fs.readFileSync('/discovery/v1/reference/merchant.v1.yaml', 'utf8');
//     let data = yaml.safeLoad(fileContents);

//     console.log(data);
// } catch (e) {
//     console.log(e);
// }