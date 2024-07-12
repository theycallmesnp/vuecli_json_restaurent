<template>
    <HeaderPage />
<h1> Hello {{name}} Welocme to home page</h1>


<table border="2">
    <tr>
        <td>ID</td>
        <td>NAME</td>
        <td>CONTACT</td>
        <td>ADDRESS</td>
        <td>ACTIONS</td>
       
    </tr>
<tr v-for="i in restaurant" :key="i.id">
    <td>{{i.id}}</td>
    <td>{{i.name}}</td>
    <td>{{i.contact}}</td>
    <td>{{i.addres}}</td>
    <td ><router-link :to="'/UpdatePage/' +i.id">UPDATE</router-link></td>
</tr>
</table>
</template>

<script>
import axios from 'axios';
import  HeaderPage from '../components/Header.vue'
export  default{
    name:"HomePage",
    components:{
        HeaderPage
    },
    data(){
        return{
            name:"",
            restaurant:""
        }
    },
    async mounted(){
         let user = localStorage.getItem('user-Login');
    
         this.name=JSON.parse(user).name
        //  console.log(this.name)
       try{
let result = await axios.get("http://localhost:3000/restaurants");
console.log(result,"ksksksksks");
this.restaurant=result.data

       }
       catch(error){
        console.log("error-occured-during fetching data",error);
       }
    }
}
</script>
<style >
td{
    width: 160px;
    height:40px;
} 
</style>