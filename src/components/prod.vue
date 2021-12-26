<template>
  <div class="block_prod">
    <img :src="photo" />
    <div class="prod_info">
      <div class="block_name">
        <span>Title: {{ prodName }}</span>
      </div>
      <div class="email">
        <span>Category: {{ category }}</span>
      </div>
      <div class="price">
        <span>Price: {{ price }}</span>
      </div>
      <div class="quantity">
        <span>Quantity: {{ quant }}</span>
      </div>
      <div class="description">
        <span>Description: {{ description }}</span>
      </div>
      <div class="btn-block">
        <button class="btn" @click="editProdCart">
          <span>Edit</span>
        </button>
        <button class="btn" @click="prodDetail">
          <span>Detail</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photo: String,
    prodName: String,
    category: String,
    price: Number,
    quant: Number,
    description: String,
  },
  methods: {
    editProdCart() {
      this.$emit("clickBtnEdit");
    },
    Clk() {
      console.log(this.price);
    },
    prodDetail() {
      this.$emit("clickBtnDetail");
    },
  },
};
</script>
<style scoped>
.block_prod {
  display: flex;
  margin: 15px 0px;
  border: 1px solid #000;
}
.block_name {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.btn {
  background: grey;
  margin: 10px 10px;
  color: #fff;
  padding: 5px 15px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
}
img {
  width: 30%;
}
.prod_info {
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
}
button span {
  color: red;
}
</style>
