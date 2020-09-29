<template>
  <div id="app">
    <header>
      <div class="logo">Vote-UAC</div>
      <div  class="user-status">
        <form v-if="!islogin" action="" @submit-prevent="connect()">
          <input type="text" v-model="admin.email" placeholder="username">
          <input type="password" v-model="admin.password" placeholder="password">
          <button v-on:click="connect()">connexion</button>
        </form>
        <h4 v-else>Bienvenue Admin</h4>
      </div>


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
        <h1>Resultant de votes</h1>
       
        <h5 class="temp">En temps reel</h5>
        <div class="result-detail">
          <div class="result-square">
            <h5>Electeurs: <span>200</span></h5>
          </div>
          <div class="result-square">
            <h5>
              Candidats: <span>{{ candidatsNumber }}</span>
            </h5>
          </div>
        </div>
        <div class="candidats-list">
          <vote-display-card
            v-for="(candidat, index) in listVotes"
            :key="index"
            v-bind:candidat="candidat"
          />
        </div>
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
      admin:{
        email: "",
        password:""
      },
      islogin:false,
      listVotes: [
        
        {
          name: "Zairoi Kakwara",
          numero: "1",
          avatar: "./assets/afro.PNG",
          votes: ["9", "11", "12", "20"],
        },
        {
          name: "Christian Kamala",
          numero: "2",
          avatar: "./assets/success.PNG",
          votes: ["1", "4", "18", "13", "7", "16", "8"],
        },
        {
          name: "Onesime Kapipi",
          numero: "3",
          avatar: "./assets/yoga.PNG",
          votes: ["6", "14", "19"],
        },
        {
          name: "Victor Katembo",
          numero: "4",
          avatar: "./assets/happy.PNG",
          votes: ["2", "3", "17", "10", "5"],
        },
      ],
    };
  },
  computed: {
    candidatsNumber() {
      return this.listVotes.length;
    },
  },
  methods:{
    connect() {
      if(this.admin.email==="admin@vote.cd"&&this.admin.admin==="123456"){
        this.islogin=true;
      }else{
        this.islogin=false;
      }
    }
  }
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
  height: 10vh;
  background-color: #21ce99;
  color: white;
  display: flex;
  padding: 0px 10px 0px 10px;
  align-items: center;
}
.user-status input{
  padding:8px;
  font-size: 16px;
  font-weight: 400;
  margin-right: 8px;
  border: 1px solid #21ce99;
  border-radius:3px;
  
}
.user-status input:focus{
  outline-color:white;
}
.user-status button{
  padding:10px;
  color:white;
  background-color:black;
  border:none;
  cursor: pointer;
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
  height: 590px;
}
.left-side .sidebar {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 590px;
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
  /* display: flex; */
  margin: 8px;
  border-radius: 8px;
  align-items: left;
}
.candidats-list {
  display: flex;
}
.result-detail {
  background-color: #f3f3f3;
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.result-detail span {
  color: #21ce99;
  font-size: 20px;
}
.result-square {
  flex: 1;
  height: 100;
}
</style>
