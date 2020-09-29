<template>
  <div id="app">
    <header>
      <div class="logo">LOGO</div>
      <div class="user-status">Bienvenu Victor</div>
    </header>
    <div class="main">
      <div class="left-side">
        <div class="sidebar">
          <a class="active" href="#home">Dashbord</a>
          <a href="#news">Electeur</a>
          <a href="#contact">Candidats</a>
          <a href="#about">Admin</a>
        </div>
      </div>
      <div class="main-side">
        <vote-display-card />
      </div>
    </div>
  </div>
</template>

<script>
//import Calculator from './components/Calculator.vue'
import VoteDisplayCard from "./components/VoteDisplayCard.vue";
//import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    //Calculator,
    VoteDisplayCard,
    // SideBar,
  },
  data() {
    return {
      listVotes: [
        {
          name: "Onesime Kapipi",
          numero: "3",
          votes: ["1", "4", "18"],
        },
        {
          name: "Zairoi Kakwara",
          numero: "1",
          votes: ["1", "4", "18"],
        },
        {
          name: "Dany",
          numero: "3",
          votes: ["1", "4", "18"],
        },
        {
          name: "Onesime Kapipi",
          numero: "3",
          votes: ["1", "4", "18"],
        },
      ],
    };
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
  height: 600px;
}
.left-side .sidebar {
  margin: 0px;
  padding: 0px;
  width: 100%;
  background-color: #21ce99;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 16px;
}
.sidebar a.active {
  background-color: #fff;
  border: 1px solid #21ce99;
  border-radius: 5px;
  font-weight: 700;
  margin: 4px;
  color: #21ce99;
}
.sidebar a:hover:not(.active) {
  background-color: #555;
  border: 1px solid #21ce99;
  margin: 4px;
  border-radius: 5px;
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
