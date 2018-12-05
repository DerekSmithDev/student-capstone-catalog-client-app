<template>
  <div class="Show">
    <div class="container">
      <h1>{{ capstone.name }}</h1>
      <div class="images"><img v-bind:src="capstone.screenshot" alt="" /></div>
      <h4>{{ capstone.url }}</h4>
      <p>{{ capstone.description }}</p>
      <a href="/#/capstones">Back to all capstones</a>
    </div>
  </div>
</template>

<style>
.show {
  text-align: center;
}
</style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      capstone: {}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/capstones/" + this.$route.params.id).then(
      function(response) {
        this.capstone = response.data;
      }.bind(this)
    );
  },
  methods: {},
  computed: {}
};
</script>
