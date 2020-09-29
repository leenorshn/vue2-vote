<template>
    <div class="login">
        <form action="" >
          <input type="text" v-model="admin.email" placeholder="username">
          <input type="password" v-model="admin.password" placeholder="password">
          <button>connexion</button>
        </form>
    </div>
</template>

<script>
export default {
    name:"LoginForm",
    data() {
        return{
            admin:{
                name:"",
                password:""
            }
        }
    }
}
</script>

<style scoped>
.login input{
  padding:8px;
  font-size: 16px;
  font-weight: 400;
  margin-right: 8px;
  border: 1px solid #21ce99;
  border-radius:3px;
  
}
.login input:focus{
  outline-color:white;
}
.login button{
  padding:10px;
  color:white;
  background-color:black;
  border:none;
  cursor: pointer;
}
</style>