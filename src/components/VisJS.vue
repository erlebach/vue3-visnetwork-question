<template>
  <!-- <network ref="network" :nodes="nodes" :edges="edges" :options="options"> -->
  <!--  :options="options"> -->
  <!-- We define the nodes in the network node for testing. Later, we will pass the nodes and edges
  from VueJS to Network component -->
  <network> </network>
</template>

<script>
// const vis = require("vis-network"); // worked
// alert("enter VisJs");
// console.log("vis in VisJS.vue");
// console.log(vis);
// console.log("after vis in VisJS.vue");
// alert("just printed vis");
// src = "https://unpkg.com/vis-network/standalone/umd/vis-network.min.js";
import Network from "./Network3"; // vue-vis-network
import { DataSet } from "vis-data";
// import * as AppConfig from "./modules/DefaultConfig.js";
export default {
  components: {
    Network, // uses the <template> in ./Network3
  },

  data() {
    return {
      status: null,
      nodes: new DataSet([
        // nodes: [
        // used to be vis.DataSet
        { id: 1, label: "circle", shape: "circle" },
        { id: 2, label: "ellipse", shape: "ellipse" },
      ]),
      // ],
      //edges: new vis.DataSet([{ from: 1, to: 2 }]),
      edges: new DataSet([{ from: 1, to: 2 }]),
      options: { physics: { enabled: true } },
    };
  },
  // mounted() {
  //   // These edges are the proxy, not the edges themselves!
  //   // console.log("edges: ", this.edges);
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
