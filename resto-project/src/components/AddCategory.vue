<template>
  <h1>ADD CATEGORY</h1>
  <div class="rest">
    <input type="text" placeholder="category name" v-model="categoryName" />
    <input type="Number" placeholder="category phone" v-model="categoryPhone" />
    <input
      type="text"
      placeholder="category Address"
      v-model="categoryAddress"
    />
    <button v-on:click="submit">submit</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddCategory",
  data() {
    return {
      categoryName: "",
      categoryPhone: "",
      categoryAddress: "",
    };
  },
  methods: {
    async submit() {
      try {
        let result = await axios.post("http://localhost:3000/category", {
          categoryName: this.categoryName,
          categoryPhone: this.categoryPhone,
          categoryAddress: this.categoryAddress,
        });
        console.log(result);
        if (result.status === 201) {
          this.$router.push({ name: "HomePage" });
        }
      } catch (error) {
        console.log(error, "some issue in adding data");
      }
    },
  },
};
</script>

<style >
</style>
