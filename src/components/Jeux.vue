<template>
    <div class="container">
        {{name}}
    </div>
</template>
<script>
    export default {
        data(){
            return {
                name:"Jeux de la vie"
            }
        },
        methods:{

        }
    }
</script>
<style scoped>
    .container{
        background:#0e0e0e;
        display:grid;
        color: white;
    }
</style>