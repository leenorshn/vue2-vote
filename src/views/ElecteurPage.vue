<template>
    <div class="electeur-main-page">
        <StudentForm/>
        <div class="electeur-all-page">
            <div class="list-electeur">

            </div>
            <div class="detail-electeur">

            </div>
        </div>
    </div>
</template>

<script>
import StudentForm from "../components/StudentForm.vue";
export default {
    name:"ElecteurPage",
    components:{
        StudentForm
    },
    data() {
    return {
      name: "Jeux de la vie",
      electeurs:[
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
        background-color: #21ce99;
    }
    .electeur-all-page{
        display: flex;
        
    }
    .list-electeur{
        flex:3;
        background-color:rgb(8, 26, 61);
        height: 560px;
        border-radius: 8px;
    }
    .detail-electeur{
        border-radius: 8px;
        margin-left:10px;
        margin-right:10px ;
        flex: 7;
         background-color:cornflowerblue;
    }
    
</style>

