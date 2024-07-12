<template>
    <div class="nav">
        <a>Home</a>
        <a>Abouts us</a>
        <router-link to="/AddPage">Add Rest</router-link>
        <router-link to ="/AddCategory"> ADD-CATEGORY</router-link>
        <router-link to ="/GetCategory"> GET-CATEGORY</router-link>
        <!-- <router-link to="/UpdatePage">Update Res</router-link> -->
        <a v-on:click="logout">Logout</a>
    </div>

</template>

<script>
 export default{
    name:"HeaderPage",

   methods:{
    logout(){
        alert("dododokd;okd;okd");
        localStorage.clear();
        this.$router.push({name:"LoginPage"})
    }
   }
 }
</script>

<style>
.nav{
    background-color:black;
    overflow: hidden;
    color:azure;
    
}
.nav a{
    float: left;
    padding: 12px 23px;
    font-size: 17px;
    text-align: center;
    cursor: pointer;
    color:azure;
    text-decoration: none;
}
.nav a:hover{
    background-color: aliceblue;
    color:black
}

</style>