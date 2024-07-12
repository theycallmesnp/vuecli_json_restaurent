<template>
    <h1>CATEGORY LIST</h1>
    <table border="2">
        <tr>
            <td>ID</td>
            <td>CategoryName</td>
            <td>CategoryPhone</td>
            <td>CategoryAddress</td>
            <td>ACTIONS</td>
        </tr>
        <tr v-for="i in category" :key="i.id">
            <td>{{i.id}}</td>
            <td>{{i.categoryName}}</td>
            <td>{{i.categoryPhone}}</td>
            <td>{{i.categoryAddress}}</td>
            <td><router-link :to="'/UpdateCategory/' + i.id">UPDATE</router-link></td>
        </tr>
    </table>
</template>
<script>
import axios from 'axios';


export default {
    name:"GetCategory",
    data(){
        return{
         category:''
        }
        
    },
    async mounted(){
 let result = await axios.get("http://localhost:3000/category")

 this.category=result.data;
 console.log(this.category,"this");
    }
}
</script>
 

       <!-- setup-format -->
<!-- 
<script setup>
import axios from 'axios';

let category = '';

async function getCategory() {
  try {
    const response = await axios.get("http://localhost:3000/category");
    category = response.data;
    console.log(category);
  } catch (error) {
    console.error('Error fetching category:', error);
  }
}

getCategory();
</script> -->












<style >

</style>
