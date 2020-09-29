<template>
  <div id="app">

    <header>
      <div class="logo">Vote-UAC</div>
      <div  class="user-status">
        <LoginForm v-if="!isloginMetods"/>
        <h4 v-else>Bienvenue Admin</h4>
      </div>


    </header>
    <div class="main">
      <div class="left-side">
        <div class="sidebar">
         
          <router-link class="a" to="/">Dashbord</router-link>
          <router-link  class="a" to="/About">Electeur</router-link>
          <router-link  class="a" to="/Candidat">Candidats</router-link>
          <router-link  class="a" to="/Cdmin">Admin</router-link>
        </div>
      </div>
      <div class="main-side">
        <router-view/>
    </div>
  </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
export default {
  components:{
    LoginForm
  },
  data() {
    return {
      admin:{
        email: "",
        password:""
      },
      islogin:false,
    };
  },
  computed:{
    isloginMetods(){
      return this.islogin;
    }
  },
  
  methods:{
    connect() {
      if(this.admin.email==="admin@vote.cd"&&this.admin.password==="123456"){
        console.log("Bienvenue");
        this.islogin=true;
      }else{
        this.islogin=false;
        console.log("Oops");
      }
    }
  }
    
  
};
</script>

<style >
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
.sidebar {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 590px;
  display: flex;
  flex-direction: column;
  background-color: #21ce99;
  overflow: auto;
}

 .sidebar .a {
  display: block;
  color: white;
  text-decoration: none;
  background-color: #21ce99;
  border: 1px solid #f1f1f1;
  padding: 10px 0px 10px 0px;
  margin: 1px 10px 1px 10px;
  border-radius:4px;
}
.sidebar .a.active {
  background-color: #fff;
  border: 1px solid #21ce99;
  border-radius: 5px;
  font-weight: 700;
  margin: 4px;
  color: #21ce99;
}
.sidebar .a:hover:not(.active) {
  background-color:white;
  border-radius: 5px;
  color: #0a0a0a;
}

.main .main-side {
  flex: 7.5;
  background-color: #f3f9f5;
   /* display: flex;  */
  margin: 8px;
  border-radius: 8px;
  align-items: left;
}
</style>
