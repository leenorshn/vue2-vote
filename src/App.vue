<template>
  <div id="app">
    <header>
        <div class="logo">
          logo
        </div>
        <div class="user-status">
          Bienvenu Victor
        </div>
    </header>
    <div class="main">
     <div class="left-side">
<h4>Moderna</h4>
     </div>
     <div class="main-side">

     </div>
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
*{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
header{
  width: 100%;
  height: 10vh;
  background-color:orange;
  display:flex;
  padding: 8px;
  justify-content: center;
}
header .logo{
  flex: 2;
  text-align: left;
}
.main{
  display:flex;
}
.main .left-side{
  flex:2;
  background-color:cadetblue;
  height: 650px;
  border-radius: 8px;
  padding-right: 200px;
}
.main .main-side{
  flex:8;
  background-color:blue;
  border-radius: 8px;
  margin-left:16px;
  align-items: left;
}
</style>
