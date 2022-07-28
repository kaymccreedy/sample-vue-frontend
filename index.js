/* global Vue */

var App = {
  data: function() {
    return {
      message: "Movies!",
      movies: ["Moonrise Kingdom", "Dr. Strangelove", "My Neighbor Totoro"],
      newMovie: "",
      zoolander: false,
    };
  },
  methods: {
    saveMovie(movie) {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    },
    zoolandercheck() {
      this.zoolander = this.movies.includes("Zoolander");
    }
  },
};

Vue.createApp(App).mount('#app');