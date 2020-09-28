<template>
  <div id="app">
    <div class="container">
      <!-- <navgame></navgame> -->
      <div class="row">
        <div class="col-md-4">
          <SideBar />
        </div>
        <div class="col-md-8">
          <Jeux />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Calculator from './components/Calculator.vue'
import Jeux from "./components/Jeux.vue";
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    //Calculator,
    Jeux,
    SideBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
