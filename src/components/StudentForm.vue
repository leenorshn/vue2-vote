<template>
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
</template>
<script>
export default {
  name: "StudentForm",

  methods: {},
};
</script>
<style scoped>
.student-form-main {
  margin: 10px 10px;
  padding: 10px;

  background: #e6e1e1;
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
  border-radius:4px;
}
#faculte {
  padding: 6px;
  width:100px;
  border:none;
  border-radius:4px;
}
input {
  padding: 8px;
  font-size: 16px;
  border:none;
  border-radius:4px;
}
button {
  width: 140px;
  margin-left: 16px;
  background-color: #21ce99;
  color:white;
  border:none;
  border-radius:4px;
}
</style>