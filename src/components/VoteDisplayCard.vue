<template>
  <div class="card-container">
      <div class="user-number">
          <h5>{{candidat.numero}}</h5>
      </div>
    <div class="avatar-container">
        <img :src="candidat.avatar" alt="image">
    </div>
    <div class="username-container">
      {{ candidat.name }}
    </div>
    <div id="user-vote-result">
      <h3><span class="percent">{{ calculatePercentage + "%" }}</span> <span>votes</span></h3>
      <h5>{{ candidatTotalVote }} vois / 20 participants</h5>
    </div>
  </div>
</template>
<script>
export default {
  name: "VoteDisplayCard",
  props:{
      candidat:{
          name:String,
          numero:String,
          votes:Array
      }
  },
  data() {
    return {
      
    };
  },
  methods: {},
  computed: {
    candidatTotalVote() {
      return this.candidat.votes.length;
    },
    calculatePercentage() {
      return (this.candidatTotalVote * 100) / 20;
    },
  },
};
</script>
<style >
.card-container {
  background-color: orange;
  position: relative;
  height: fit-content;
  margin: 10px;
  border-radius: 8px;
  padding: 10px;
  justify-content: center;
  width: 240px;
  display: flex;
  flex-direction: column;
}
.avatar-container {
  background-color: #f0fefe;
  height: 120px;
  width: 120px;
  align-self: center;
  border-radius: 70px;
}
.avatar-container img{
    border-radius: 50%;
    height: 120px;
    width:120px
}
#user-vote-result {
  padding: 16px;
  background-color:white;
  border-radius:6px;
  color:#0a063d;
}
.username-container{
padding: 10px;
}
.user-number{
    position:absolute;
    right: 10px;
    top: 10px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 40px;
    background-color:#0a063d;
    border-radius:4px;
}

.percent{
    color:#21ce99;
}

</style>