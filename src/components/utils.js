import { DataSet, DataView } from "vis-network";

const arrayDiff = (arr1, arr2) => arr1.filter((x) => arr2.indexOf(x) === -1);

// called as: this.visData.nodes = mountVisData(this, "nodes");
// vm is "this" in Network3.vue
const mountVisData = (vm, propName) => {
  let data = vm[propName];

  // If data is DataSet or DataView we return early without attaching our own events
  // next 4 lines just bypass existence of non-used variables
  // const aa = 3;
  // if (aa == 3) {
  //   console.log("Dataset");
  //   console.log(DataSet);
  //   console.dir(DataSet);
  //   const d = new DataSet();
  //   const e = new DataView();
  //   if (d === e) {
  //     console.log("d === e");
  //   }
  console.log("before if statement");
  if (!(vm[propName] instanceof DataSet || vm[propName] instanceof DataView)) {
    console.log("inside if statement");
    data = new DataSet(vm[propName]);
    // console.log("after data=");
    // Rethrow all events
    data.on("*", (event, properties, senderId) =>
      vm.$emit(`${propName}-${event}`, { event, properties, senderId })
    );
    console.log("after data.on");
    // We attach deep watcher on the prop to propagate changes in the DataSet
    const callback = (value) => {
      if (Array.isArray(value)) {
        const newIds = new DataSet(value).getIds();
        const diff = arrayDiff(vm.visData[propName].getIds(), newIds);
        vm.visData[propName].update(value);
        vm.visData[propName].remove(diff);
      }
      console.log("after callback");
    };
    console.log("before vm@watch");

    vm.$watch(propName, callback, {
      deep: true,
    });
  }
  console.log("before emitting");

  // Emitting DataSets back
  vm.$emit(`${propName}-mounted`, data);
  console.log("after emitting");
  return data;
};

// Not needed
const translateEvent = (event) => {
  return event.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};

export { arrayDiff, mountVisData, translateEvent };
