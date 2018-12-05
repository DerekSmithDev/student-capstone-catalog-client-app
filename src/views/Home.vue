<template>
  <div class="home">
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">Student Capstone Catalog</h1>
        <p class="lead">
          Below is a list of capstone projects by our students.
        </p>
        <hr class="my-4" />
      </div>
      <h3>Search Capstones</h3>
      <input type="text" v-model="searchFilter" list="names" />
      <datalist id="names">
        <option v-for="capstone in capstones">{{ capstone.id }}</option>
      </datalist>
      <br>
      <h3>Sort Capstones</h3>
      <div>
        <button v-on:click="setSortAttribute('name');" class="btn btn-secondary">Sort by Capstone Name</button>
        <button v-on:click="setSortAttribute('last_name');" class="btn btn-secondary">Sort by Student Last Name</button>
      </div>
      <div class="row" is="transition-group" name="slide-right">
         <div v-for="capstone in capstones" class="col-md-4 mb-2" v-bind:key="capstone.id">
            <div class="card">
            <img class="card-img-top" v-bind:src="capstone.screenshot" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ capstone.name }}</h5>
                <p class="card-text">Student: </p>
                <p class="card-text">Description: {{ capstone.description }}</p>
                <p class="card-text">Website: {{ capstone.url }}</p>
                <a v-bind:href="`/#/capstones/1`" class="btn btn-primary">Explore capstone</a>
              </div>
              </div>
            </div>
         </div>
      </div>

      </div>
    </div>
  </template>



<style>
.home {
  text-align: center;
}
/* Vue.js fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Vue.js slide-right */
.slide-right-enter-active {
  transition: all 0.3s ease;
}
.slide-right-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

/* Vue.js slide-left */
.slide-left-enter-active {
  transition: all 0.3s ease;
}
.slide-left-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>

<script>
/* global Vue2Filters */
var axios = require("axios");

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      capstones: [],
      students: [],
      searchFilter: "",
      sortAttribute: "name",
      sortOrder: 1,
      errors: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/capstones").then(
      function(response) {
        console.log(response.data);
        this.capstones = response.data;
      }.bind(this)
    );
  },
  methods: {
    setCurrentCapstone: function(inputCapstone) {
      this.setCurrentCapstone = inputCapstone;
    },
    setSortAttribute: function(inputAttribute) {
      if (this.sortOrder === 1) {
        this.sortOrder = -1;
      } else {
        this.sortOrder = 1;
      }
      this.sortAttribute = inputAttribute;
    }
  },
  computed: {}
};
</script>
