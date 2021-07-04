<template>
  <div>
    <div>Hello Gordon</div>
    <vis-js />
  </div>
</template>

<script>
import VisJs from "./components/VisJS";
alert("beginning of App.vue (index.html -> App.vue -> main.js");
const vis = require("vis-network"); // worked (synchronous or not?)
// if require is not used, it is undefined, even if called in index.html. WHY?

console.log("vis from App.vue: ");
console.log(vis);
console.log("after vis from App.vue");
export default {
  components: { VisJs },
};
alert("end of App.vue (index.html -> App.vue -> main.js");
</script>
