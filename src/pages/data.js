import Vue from "vue";

var counter = {
  count: 5,
  addOne() {
    this.count++;
  },
};

// Vue.observable(counter);

export { counter };
