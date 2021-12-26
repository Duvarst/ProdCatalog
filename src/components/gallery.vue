<template>
  <div class="wrap">
    <div class="gallery-block">
      <img :src="changPicture" class="images" />
    </div>
    <button class="btn" @click="changIndex">Next photo</button>
  </div>
</template>
<script>
export default {
  props: {
    arrImage: Array,
  },
  data: function () {
    return {
      index: 0,
    };
  },
  methods: {
    changIndex() {
      this.index === this.arrImage.length - 1
        ? (this.index = 0)
        : (this.index += 1);
    },
  },
  computed: {
    changPicture() {
      return this.arrImage[this.index];
    },
  },
};
</script>
<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.images {
  width: 100%;
}
.btn {
  background: grey;
  margin: 0 auto;
  color: #fff;
  padding: 5px 40px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
}
</style>
