  
<template>
  <div class="main-route">
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
      <VoteDisplayCard
        v-for="(candidat, index) in listVotes"
        :key="index"
        v-bind:candidat="candidat"
      />
    </div>
  
  </div>
</template>

<script>
import  VoteDisplayCard from "../components/VoteDisplayCard.vue";
export default {
  
  name: "Home",
  components:{
VoteDisplayCard,
  }
  ,
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

<style scoped>


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