<template>
  <div class="electeur-main-page">
    <div class="electeur-all-page">
      <div class="detail-electeur"><img src="../assets/profile.png" />,</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CandidatPage",
  methods: {
    
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
          name: "Samy thony",
          matricule: "2020-OL-GI-03",
          promotion: "G3",
          faculte: "GI",
        },
        {
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
.electeur-main-page {
  display: flex;
  flex-direction: column;
}

.electeur-all-page {
  display: flex;
}
</style>

