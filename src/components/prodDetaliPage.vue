<template>
  <div class="prod-block">
    <div class="prod-title">
      <span>{{ cardThisProd.nameprod }}</span>
    </div>
    <div class="prod-category">
      <span>{{ cardThisProd.category }}</span>
    </div>
    <div class="prod-photo">
      <gallery :arrImage="cardThisProd.photo"></gallery>
    </div>
    <div class="prod-description">
      <span>{{ cardThisProd.description }}</span>
    </div>
    <div class="prod-price-quantity">
      <span class="ppq-items">Price: {{ cardThisProd.price }}</span>
      <span class="ppq-items">in stock: {{ cardThisProd.quantity }}</span>
    </div>
    <button class="btn" @click="clickBackBtn">
      <span>Back</span>
    </button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import gallery from "./gallery.vue";
export default {
  components: {
    gallery,
  },
  props: {
    id: Number,
  },
  data: function () {
    return {};
  },
  methods: {
    clickBackBtn() {
      this.$emit("backMain");
    },
  },
  computed: {
    ...mapGetters("mainstore", { prodData: "prodData" }),
    ...mapGetters("mainstore", { globalId: "globalId" }),
    cardThisProd() {
      let thisProd = this.prodData.find((el) => el.id === this.globalId);
      return thisProd;
    },
  },
};
</script>
<style scoped>
table {
  border: 1px solid #000;
  width: 100%;
  border-collapse: collapse;
}
td {
  border: 1px solid #000;
  padding: 10px 15px;
}
.btn {
  background: grey;
  margin: 10px 10px;
  color: #fff;
  padding: 5px 40px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
}

.prod-block {
  display: flex;
  width: 70vh;
  flex-direction: column;
  align-items: center;
}
.prod-photo {
  width: 80%;
}
.prod-title {
  font-size: 3.5rem;
}
.prod-category {
  font-size: 2.3rem;
}
.prod-description {
  margin: 10px auto;
}
.prod-price-quantity {
  margin: 10px 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.ppq-items {
  display: block;
}
</style>
