<template>
  <div class="home">
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content
          or information.
        </p>
        <hr class="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
      <!---->
      <div>
        <button v-on:click="setSortAttribute('name');" class="btn btn-secondary">Sort by Capston Name</button>
        <button v-on:click="setSortAttribute('last_name');" class="btn btn-secondary">Sort by Student Last Name</button>
      </div>
      <h1>Search Capstones</h1>
      <input type="text" v-model="searchFilter" list="names" />
      <datalist id="names">
        <option v-for="capstone in capstones">{{ capstone.name }}</option>
      </datalist>
      <div class="row" is="transition-group" name="slide-right">
        <div
            v-for="capstone in orderBy(filterBy(capstones, searchFilter, 'name', 'last_name'), sortAttribute, sortOrder)"
            class="col-md-4 mb-2"
            v-bind:key="capstone.id"
          >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ capstone.name }}</h5>
              <p class="card-text">Student: {{ student_id.first_name }} {{ student_id.last_name }}</p>
              <p class="card-text">Description: {{ capstone.description }}</p>
              <p class="card-text">Website: {{ capstone.website_url }}</p>
              <a v-bind:href="`/#/capstones/${capstone.id}`" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style>
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
var axios = require("axios");

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      capstones: [],
      searchFilter: "",
      sortAttribute: "name",
      sortOrder: 1,
      errors: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/students/capstones").then(
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
