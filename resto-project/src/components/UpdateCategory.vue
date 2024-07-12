<template>
    <h1> Update the list</h1>
    <h1>UPDATE CATEGORY</h1>
    <div class="rest">
        <input  type="text"  placeholder="category name" v-model="categoryName">
        <input type="Number" placeholder="category phone"  v-model="categoryPhone">
        <input type ="text" placeholder="category Address"  v-model="categoryAddress">
        <button v-on:click="submit">submit </button>
    </div>
</template>
<script>
import axios from 'axios';
 export default{
    name:"UpdateCategory",
    data(){
        return{
            categoryName:'',
            categoryPhone:'',
            categoryAddress:''
        }
    },
   async  mounted(){
    try{
        let id=this.$route.params.id;
        console.log(id);
        let result =  await axios.get(`http://localhost:3000/category/${id}`);
        console.log(result.data);
        this.categoryName=result.data.categoryName,
        this.categoryPhone=result.data.categoryPhone,
        this.categoryAddress=result.data.categoryAddress
    }
    catch(error){
        console.log(error,"notable to getdata");
    }
        
    },
    methods:{
       async  submit(){
        try{
            let id= this.$route.params.id
            let result= await axios.put(`http://localhost:3000/category/${id}`,{
                categoryName:this.categoryName,
                categoryPhone:this.categoryPhone,
                categoryAddress:this.categoryAddress
            })
            console.log(result);
            if(result.status===200){
                this.$router.push({name:'GetCategory '})
            }
        }
        catch(error){
            console.log(error,"not-able to update");
        }
       
        }
    }
 }
</script>
<style >

</style>