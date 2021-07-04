// This file always gets executed!

import { createApp } from "vue";
import App from "./App.vue";
// import VisJS from "./components/VisJS.vue";

const app = createApp(App);
//app.component("vis-js", VisJS);
app.mount("#app");

alert("inside main.js");
const vis = require("vis-network"); // worked, is this synchronous or not?
console.log("vis from main.js");
console.log(vis);
console.log("after vis from main.js");

//createApp(App).mount('#app')
