<!-- Network is the equivalent of view component. It should not define nodes and edges -->

<template>
  <p>Hello in Network.vue</p>
  <div ref="visualization">Some text</div>
  <div id="mynetwork"></div>
</template>

<script>
// prechecks cannot tell that DdataSet does not exist
const vis = require("vis-network"); // worked

import { DataSet, DataView } from "vis-network";
import { Network } from "vis-network";

//import { mountVisData, translateEvent } from "./utils";
//import { mountVisData } from "./utils";

export default {
  name: "network",
  props: {
    edges: {
      type: [Array, DataSet, DataView],
      default: () => [],
    },
    nodes: {
      type: [Array, DataSet, DataView],
      default: () => [],
    },
  },
  data: () => {
    return {
      visData: {
        // nodes: null,
        // edges: null,
        nodes: new vis.DataSet([
          // nodes: [
          // used to be vis.DataSet
          { id: 1, label: "circle", shape: "circle" },
          { id: 2, label: "ellipse", shape: "ellipse" },
        ]),
        // ],
        //edges: new vis.DataSet([{ from: 1, to: 2 }]),
        edges: new vis.DataSet([{ from: 1, to: 2 }]),
      },
    };
  },

  created() {
    // This should be a Vue data property, but Vue reactivity kinda bugs Vis.
    // See here for more: https://github.com/almende/vis/issues/2524

    this.network = null;
    alert("created cycle");
  },

  beforeMount() {
    console.log("before this.network, beforeMount");
    // this.network = new Network(container, this.visData, this.options);
    console.log(this.network);
  },
  mounted() {
    alert("onMounted");
    const container = this.$refs.visualization; // the div container

    // mountVisData is only required if this["nodes"] and this["edges"] are instances of either DataView or DataSet
    //this.visData.nodes = mountVisData(this, "nodes"); // << ERROR in utils.js
    //this.visData.edges = mountVisData(this, "edges");

    console.log("this.visData.nodes: ");
    console.log(this.visData.nodes);
    console.log("this.visData.edges: ");
    console.log(this.visData.edges);

    console.log("before this.network, mounted");
    this.network = new Network(container, this.visData, this.options);
    console.log("this.network");
    console.log(this.network);

    // this.events.forEach((eventName) =>
    //   this.network.on(eventName, (props) =>
    //     this.$emit(translateEvent(eventName), props)
    //   )
    // );
  },
  // Deprecated routine. Replace by what? GEs
  //beforeDestroy() {
  //this.network.destroy();
  //}
};
</script>
