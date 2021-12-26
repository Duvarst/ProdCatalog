<template>
  <div class="search">
    <label for="inp">Search product:</label>
    <input type="text" id="inp" v-model="inputVal" @input="entry" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: function () {
    return {
      inputVal: "",
      resultSearchArr: [],
    };
  },
  methods: {
    searchProduct() {
      if (this.inputVal !== "") {
        let obj = this.prodData;
        let search = this.inputVal.toLowerCase();
        let arr = [];
        obj.forEach((element) => {
          if (element.nameprod.toLowerCase().indexOf(search, 0) !== -1) {
            arr.push(element);
          }
        });
        this.resultSearchArr = arr;
      } else {
        this.resultSearchArr = [];
      }
    },
    entry() {
      this.searchProduct();
      this.$emit("inputevent", this.resultSearchArr);
    },
  },
  computed: {
    ...mapGetters("mainstore", { prodData: "prodData" }),
  },
};
</script>
<style scoped>
label {
  font-size: 1.5em;
}
.search {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
}
input[type="text"] {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 2px 2px;
}
</style>
