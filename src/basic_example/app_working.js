//import { createApp } from "vue.js";
// const app = Vue.createApp();
// const app = createApp({

const app = Vue.createApp({
  data() {
    return {
      // always returns an object
      courseGoal: "Improve myself",
    };
  },
});

app.mount("#user-goal");
