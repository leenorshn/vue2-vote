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
         
          <a class="active"><router-link to="/home">Dashbord</router-link></a>
          <a><router-link to="/electeur">Electeur</router-link></a>
          <a><router-link to="/candidat">Candidats</router-link></a>
          <a><router-link to="/admin">Admin</router-link></a>
        </div>
      </div>
      <div class="main-side">
        
    </div>
    
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    
    <router-view/>
  </div>
</template>

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
</style>
