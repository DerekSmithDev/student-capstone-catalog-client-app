<template>
  <div class="Home">
    <div class="container">
      <h1>{{ capstone.name }}</h1>
      <div class="images"><img v-bind:src="capstone.images[0]" alt="" /></div>
      <h2>{{ capstone.url }}</h2>
      <p>{{ capstone.description }}</p>
      <a href="/#/">Back to all capstone</a>
    </div>
  </div>
</template>

<style></style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      capstone: {}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/students/capstones/" + this.$route.params.id).then(
      function(response) {
        this.capstone = response.data;
      }.bind(this)
    );
  },
  methods: {},
  computed: {}
};
</script>
