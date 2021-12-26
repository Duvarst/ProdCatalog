<template>
  <div id="app">
    <div class="title">
      <h1>The best sports equipment from top brands</h1>
    </div>
    <main>
      <div class="list-product" v-if="flagDisplayProdList">
        <div class="search-wrap">
          <search @inputevent="resultSearchWrit($event)"></search>
        </div>
        <div class="btn-add">
          <button class="btn" @click="callAddProdCard">Add Product</button>
        </div>
        <div class="product-card" v-for="it in displayProd" :key="it.id">
          <prod
            :photo="it.photo[0]"
            :prodName="it.nameprod"
            :category="it.category"
            :price="it.price"
            :quant="it.quantity"
            :description="it.description"
            @clickBtnEdit="callEditProdCard(it.id)"
            @clickBtnDetail="detailProdCard(it.id)"
          ></prod>
        </div>
        <div v-show="lengthProdData > displayPagination">
          <pagination @pagesClick="overWriting($event)"></pagination>
        </div>
      </div>
      <div class="page-prod-card" v-else-if="flagDisplayEditProdCard">
        <editprod
          @closeEdit="backMain()"
          @editProd="editProduct($event)"
          @delprod="deleteProduct()"
        ></editprod>
      </div>
      <div class="page-prod-card" v-else-if="flagDisplayAddProd">
        <addprod
          @closeEdit="backMain()"
          @addProd="addProduct($event)"
        ></addprod>
      </div>
      <div class="page-prod-card" v-else-if="flagDisplayDetailProduct">
        <proddetailpage @backMain="backMain()"></proddetailpage>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import prod from "./components/prod.vue";
import editprod from "./components/editprod.vue";
import addprod from "./components/addproduct.vue";
import proddetailpage from "./components/prodDetaliPage.vue";
import pagination from "./components/pagination.vue";
import search from "./components/search.vue";

export default {
  components: {
    prod,
    editprod,
    addprod,
    proddetailpage,
    pagination,
    search,
  },
  data: function () {
    return {
      arrResultSearch: [],
      arrForPaginate: { from: 0, to: 10 },
      flagDisplayProdList: true,
      flagDisplayEditProdCard: false,
      flagDisplayAddProd: false,
      flagDisplayDetailProduct: false,
      displaySearchResult: false,
      displayPagination: 10,
    };
  },
  methods: {
    ...mapActions("mainstore", { setId: "setId" }),
    ...mapActions("mainstore", { addProd: "addProd" }),
    ...mapActions("mainstore", { editProd: "editProd" }),
    ...mapActions("mainstore", { delProd: "delProd" }),
    resultSearchWrit(data) {
      if (data) {
        if (data.length > 0) {
          this.arrForPaginate.from = 0;
          this.arrForPaginate.to = 10;
        }
        this.arrResultSearch = data;
      }
    },
    overWriting(data) {
      data
        ? (this.arrForPaginate = data)
        : (this.arrForPaginate = { from: 0, to: 10 });
    },
    callEditProdCard(val) {
      this.setId(val);
      this.flagDisplayProdList = false;
      this.flagDisplayEditProdCard = true;
    },
    callAddProdCard() {
      this.flagDisplayProdList = false;
      this.flagDisplayAddProd = true;
    },
    detailProdCard(val) {
      this.setId(val);
      this.flagDisplayProdList = false;
      this.flagDisplayDetailProduct = true;
    },
    backMain() {
      this.flagDisplayAddProd = false;
      this.flagDisplayDetailProduct = false;
      this.flagDisplayEditProdCard = false;
      this.flagDisplayProdList = true;
    },
    editProduct(val) {
      this.editProd(val);
      this.backMain();
    },
    addProduct(val) {
      this.addProd(val);
      this.setId(null);
      this.overWriting();
      this.backMain();
    },
    deleteProduct() {
      this.delProd();
      this.setId(null);
      this.overWriting();
      this.backMain();
    },
  },
  computed: {
    ...mapGetters("mainstore", { prodData: "prodData" }),
    lengthProdData() {
      return this.prodData.length;
    },
    displayProd() {
      if (this.arrResultSearch && this.arrResultSearch.length > 0) {
        return this.arrResultSearch.slice(
          this.arrForPaginate.from,
          this.arrForPaginate.to
        );
      } else {
        return this.prodData.slice(
          this.arrForPaginate.from,
          this.arrForPaginate.to
        );
      }
    },
  },

  created() {
    this.overWriting();
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
h1 {
  display: block;
  margin: 0;
  font-size: 2.4rem;
}
#app {
  width: 96vw;
  padding: 0;
  margin: 0 auto;
}
.search-wrap {
  width: 100%;
}
.list-product {
  width: 96vw;
  padding: 0;
  margin: 0 auto;
}
.page-prod-card {
  height: 100vh;
}
.btn-add {
  width: 100%;
}
.btn {
  width: 100%;
  background: grey;
  margin: 0 auto;
  color: #fff;
  padding: 5px 15px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
}
</style>
