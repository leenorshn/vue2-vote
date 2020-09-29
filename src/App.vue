<template>
  <div id="app">
    <header>
      <div class="logo">LOGO</div>
      <div class="user-status">Bienvenu Victor</div>
    </header>
    <div class="main">
      <div class="left-side">
        <div class="sidebar">
          <a class="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
      <div class="main-side"></div>
    </div>
  </div>
</template>

<script>
//import Calculator from './components/Calculator.vue'
//import Jeux from "./components/Jeux.vue";
//import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    //Calculator,
    //Jeux,
    // SideBar,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  width: 100%;
}
header {
  width: 100%;
  margin: auto;
  height: 8vh;
  background-color: #21ce99;
  color: white;
  display: flex;
  padding: 8px;
  align-items: center;
}
header .logo {
  flex: 2;
  text-align: left;
}
.main {
  display: flex;
}
.user-status {
  display: flex;
}
.main .left-side {
  flex: 2;
  background-color: cadetblue;
  height: 100%;
  padding-right: 20px;
}
.left-side .sidebar {
  margin: 0px;
  padding: 0px;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  text-decoration: none;
  padding: 16px;
}
.sidebar a.active {
  background-color: #4caf50;
  color: white;
}
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}
.main .main-side {
  flex: 7.5;
  background-color: #f3f9f5;
  margin: 8px;
  border-radius: 8px;
  align-items: left;
}
</style>
