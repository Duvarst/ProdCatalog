<template>
  <div class="container_pagination">
    <ul class="pagination" ref="blockPage">
      <li
        class="pg_items"
        v-for="(numPage, i) in setPages"
        :key="i"
        @click="pagesClick(numPage)"
      >
        {{ numPage }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: function () {
    return {
      page: 1,
      pages: [],
      itemsPerPage: 10,
    };
  },
  methods: {
    pagesClick(val) {
      this.page = val;
      let pageRange = this.paginate();
      this.$emit("pagesClick", pageRange);
      this.activePage();
    },
    activePage() {
      let arr = [...this.$refs.blockPage.children];
      arr.forEach((el) => {
        if (el.classList.contains("pg_items")) {
          el.classList.remove("active");
        }
      });
      arr[this.page - 1].classList.add("active");
    },
    paginate() {
      let page = this.page;
      let itemsPerPage = this.itemsPerPage;
      let from = page * itemsPerPage - itemsPerPage;
      let to = page * itemsPerPage;
      return { from: from, to: to };
    },
  },
  computed: {
    ...mapGetters("mainstore", { prodData: "prodData" }),
    setPages() {
      let pageNumbers = Math.ceil(this.prodData.length / this.itemsPerPage);
      let arr = [];
      for (let ind = 1; ind <= pageNumbers; ind++) {
        arr.push(ind);
      }

      return arr;
    },
  },
  async mounted() {
    await this.$nextTick(() => {
      this.paginate();
      this.activePage();
    });
  },
};
</script>
<style scoped>
.pg_items {
  display: inline-block;
  border: 1px solid #000;
  padding: 2px 5px;
  margin: 0px 1px;
  cursor: pointer;
}
.pg_items.active {
  background: #000;
  color: #fff;
}
</style>
