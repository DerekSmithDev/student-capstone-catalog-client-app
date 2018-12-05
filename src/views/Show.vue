<template>
  <div class="Show">
    <div class="container">
      <h1>Capstone Name</h1>
      <div class="images">
        <img src="http://thecommons.dpsk12.org/cms/lib/CO01900837/Centricity/Domain/139/Capstone-Logo.png" alt="" />
      </div>
      <h4>URL</h4>
      <p>Description</p>
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
