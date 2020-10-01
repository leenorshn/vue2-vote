<template>
  <div class="main-candidat-page">
    <div class="formulaire-candidat">
      <div class="text-introduct">
        <h2>Candidat</h2>
        <h4>Condition</h4>
        <p>
          Pour postuler vous devez d'abord etre un electeur <br />
          car nous utilisons votre matricule pour vous identifier
        </p>
      </div>
      <img src="../assets/profile.png" alt="" />
      <div class="right-form">
        <input type="text" placeholder="Matricule" />
        <input type="text" placeholder="numero" />
        <textarea cols="30" rows="6" placeholder="Sloga"></textarea>
      </div>
      <button>Postuler</button>
    </div>
    <div class="list-candidat">
        <h4>List de Candidat</h4>
        <div class="list-candidat-zone">
            <CandidatCard v-for="(candidat,index) in candidats" :key="index"/>
        </div>
    </div>
  </div>
</template>

<script>
import CandidatCard from "../components/CandidatCard.vue";
export default {
  name: "CandidatPage",
  methods: {},
  components:{
CandidatCard
  },
  data() {
    return {
      name: "Jeux de la vie",
      currentElecteur: null,
      newElecteur: {
        name: "",
        matricule: "",
        promotion: "",
        faculte: "",
      },
      candidats: [
        {
          avatar: "../assets/afro.PNG",
          numero: "1",
          sloga: "Je suis le candidat de l'espoir pour vous",
          name: "Samy thony",
          matricule: "2020-OL-GI-03",
          promotion: "G3",
          faculte: "GI",
        },
        {
          avatar: "../assets/yoga.PNG",
          numero: "1",
          sloga: "Je suis le candidat de l'espoir pour vous",
          name: "Bertra kalwana",
          matricule: "2020-OL-GI-03",
          promotion: "G3",
          faculte: "GI",
        },
      ],
    };
  },
};
</script>
<style scoped>
.main-candidat-page {
  display: flex;
  border-radius: 10px;
  background-color: rgba(214, 226, 218, 0.3);
}

.formulaire-candidat {
  display: flex;
  margin: 10px;
  /* flex-direction: column; */
}
.text-introduct {
  padding: 16px;
  margin: 10px;
  background-color: white;
  border-radius: 8px;
  text-align: start;
}
.text-introduct h4 {
  font-size: 20px;
  font-weight: 300;
  padding: 8px;
  color: #21ce99;
}
.text-introduct h2 {
  font-size: 40px;
  font-weight: 700;
  color: #21ce99;
}
.formulaire-candidat img {
  width: 140px;
  height: 140px;
  border-radius: 70px;
}
.formulaire-candidat .right-form {
  padding: 10px;
  flex: 5;
  display: flex;
  flex-direction: column;
}
.formulaire-candidat button {
  height: 56px;
  width: 160px;
  margin: 10px;
  color: white;
  background-color: #21ce99;
  outline-color: #21ce99;
  border: none;
  border-radius: 8px;
}

.formulaire-candidat .right-form input {
  padding: 8px;
  font-size: 16px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: none;
}
textarea {
  border-radius: 8px;
  padding: 8px;
}
.right-form input:focus {
  outline-color: #9af1d7;
}
textarea:focus {
  outline-color: #9af1d7;
}
</style>

