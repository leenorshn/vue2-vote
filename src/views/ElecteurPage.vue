<template>
    <div class="electeur-main-page">
       <div class="student-form-main">
    <input type="text" placeholder="Noms completes" />
    <div class="combo">
      <label for="pet-select">faculte:</label>
      <select name="pets" id="faculte">
        <option value="GI">Gestion-Info</option>
        <option value="CU">Communication</option>
        <option value="SA">Genie-info</option>
      </select>
    </div>
    <div class="combo">
      <label for="pet-select">promotion:</label>
      <select name="pets" id="promotion">
        <option value="Prepa">Prepas</option>
        <option value="G1">G1</option>
        <option value="G2">G2</option>
        <option value="G3">G3</option>
        <option value="L1">L1</option>
        <option value="L2">L3</option>
      </select>
    </div>
    <input type="text" placeholder="Matricule" />
    <button>Enregister</button>
  </div>
        <div class="electeur-all-page">
            <div class="list-electeur">
                <div class="card-item" v-for="(electeur,index) in electeurs" :key="index">
                    <img src="../assets/profile.png" alt="">
                    <div class="section-two">
                        <h4>{{electeur.name}}</h4>
                    <p>{{electeur.matricule}}</p>
                    </div>
                </div>
            </div>
            <div class="detail-electeur">

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:"ElecteurPage",
    
    data() {
    return {
      name: "Jeux de la vie",
      electeurs:[
          {
          name:"Samy thony",
          matricule:"2020-OL-GI-03",
          promotion:"G3",
          faculte:"GI"
      },
      {
          name:"Bertra kalwana",
          matricule:"2020-OL-GI-03",
          promotion:"G3",
          faculte:"GI"
      },
      {
          name:"Olga Maleki",
          matricule:"2020-OL-GI-03",
          promotion:"G3",
          faculte:"GI"
      },
      {
          name:"Dany molo",
          matricule:"2020-OL-GI-03",
          promotion:"G3",
          faculte:"GI"
      },
      {
          name:"Providence Kazi",
          matricule:"2020-OL-GI-03",
          promotion:"G3",
          faculte:"GI"
      },
      {
          name:"Julien Mongala",
          matricule:"2020-OL-GI-03",
          promotion:"G3",
          faculte:"GI"
      }
      ]
    };
  },
    
}
</script>
<style scoped>
    .electeur-main-page{
        display: flex;
        flex-direction: column;
       
    }

    .student-form-main {
 
  padding: 10px;

  background: #fffafa;
  display: flex;
  color: rgb(12, 11, 11);
}
.combo {
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
}
#promotion {
  padding: 6px;
  width:100px;
  border:none;
  border:2px solid #21ce99;
  border-radius:4px;
}
#faculte {
  padding: 6px;
  width:100px;
  border:none;
  border:2px solid #21ce99;
  border-radius:4px;
}
input {
  padding: 8px;
  font-size: 16px;
  border:2px solid #21ce99;
  border-radius:4px;
  
}
input:focus{
    outline-color: #21ce99;
}
button {
  width: 140px;
  margin-left: 16px;
  background-color: #21ce99;
  color:white;
  border:none;
  border-radius:4px;
}
    .electeur-all-page{
        display: flex;
       
    }
    .list-electeur{
        flex:3;
        background-color:rgba(8, 26, 61,0.05);
        height: 460px;
        overflow:auto;
        border-radius: 8px;
    }
    .detail-electeur{
        border-radius: 8px;
        margin-left:10px;
        margin-right:10px ;
        flex: 7;
         background-color:rgba(8, 26, 61,0.05);
    }
    .card-item{
        display: flex;
        padding:8px;
        margin: 8px;
        border:0.7px solid grey;
        border-radius:10px;
        
        cursor: pointer;
        background-color:white;
    }
    .card-item:hover{
        background-color:#21ce99;
        border:2px solid #21ce99;
        color:white;
    }

    .card-item img{
        width:64px;
        height: 64px;
        border-radius: 32px;
    }
    .section-two{
        padding-left: 10px;
        text-align:left;
        flex-direction: column;
        display: flex;
        justify-content: center;
    }

    
</style>

