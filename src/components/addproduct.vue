<template>
  <div class="inpfield">
    <h1>Adding a new product</h1>
    <div>
      <div class="form-group">
        <label>
          <span>Title</span>
        </label>
        <input
          name="name product"
          type="text"
          v-model.trim="vals.nameprod"
          @change="validTitle($event)"
        />
        <label> Category </label>
        <select v-model="vals.category" name="category" id="category_val">
          <option v-for="(it, i) in gCategory" :key="i" :value="it.value">
            {{ it.text }}
          </option>
        </select>

        <label> Price </label>
        <input
          name="price"
          type="number"
          v-model="vals.price"
          @change="validPrice($event)"
        />
        <label> Quantity </label>
        <input
          name="qauntitiy"
          type="number"
          v-model="vals.quantity"
          @change="validQua($event)"
        />
        <label> Description </label>
        <textarea
          name="description"
          type="comment"
          :maxlength="maxLenght"
          :value="vals.description"
          @input="validDescr($event)"
        ></textarea>
        <label> Photo. Paste the url</label>
        <input
          type="text"
          name="photo"
          ref="photoInput"
          v-model="urlImg"
          @keyup.enter="addPhoto"
        />
        <div class="photo-wrap">
          <div class="img-wrap" v-for="(item, ind) in vals.photo" :key="ind">
            <div class="cross" @click="deleteImg(ind)"></div>
            <img id="img" :src="item" />
          </div>
        </div>
      </div>
      <div>
        <button class="btn" @click="addProd">Add</button>
        <button class="btn" @click="clickCloseBtn">Close</button>
        <button class="btn" @click.prevent="clearAll">Clear</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { req } from "../api/validation";

export default {
  props: {
    label: String,
  },
  data: function () {
    return {
      vals: {
        id: null,
        nameprod: "",
        category: "free weight",
        price: 1000,
        quantity: 1,
        description: "",
        photo: [],
      },
      urlImg: "",
      maxLenght: 255,
    };
  },

  methods: {
    validDescr(event) {
      let val = event.target.value;
      val = req.reqReplace(val, req.valDescr, "");
      this.vals.description = val;
    },
    productAvail(val) {
      let arr = [];
      this.prodData.forEach((e) => {
        arr.push(e.nameprod);
      });
      let avail = arr.includes(val, 0);
      return avail;
    },
    validTitle(event) {
      let val = event.target.value;
      if (req.reqTest(val, req.valTitle)) {
        if (!this.productAvail(val)) {
          this.vals.nameprod = val;
        } else {
          this.vals.nameprod = "";
          alert("A product with that name already exists");
        }
      } else {
        this.vals.nameprod = "";
        alert(
          "The name of the product must be more than 3 characters and cannot consist only of numbers"
        );
        event.target.focus();
      }
    },
    validPrice(event) {
      let val = event.target.value;
      this.vals.price = Math.max(val, 1);
    },
    validQua(event) {
      let val = event.target.value;
      this.vals.quantity = Math.max(val, 1);
    },
    clearAll() {
      this.vals.nameprod = "";
      this.vals.description = "";
      this.vals.category = this.gCategory[0].value;
      this.vals.price = 1000;
      this.vals.quantity = 1;
      this.vals.photo = [];
    },
    clickCloseBtn() {
      this.clearAll();
      this.$emit("closeEdit");
    },
    addProd() {
      this.assignId();
      this.$emit("addProd", this.vals);
    },
    assignId() {
      let obj = this.prodData[this.prodData.length - 1];
      this.vals.id = obj.id + 1;
    },
    validPhoto() {
      this.vals.photo.length < 3
        ? (this.$refs.photoInput.disabled = false)
        : (this.$refs.photoInput.disabled = true);
    },
    addPhoto() {
      this.vals.photo.push(this.urlImg);
      this.urlImg = "";
      this.validPhoto();
    },
    deleteImg(ind) {
      this.vals.photo.splice(ind, 1);
      this.validPhoto();
    },
  },
  computed: {
    ...mapGetters("mainstore", { prodData: "prodData" }),
    ...mapGetters("mainstore", { globalId: "globalId" }),
    ...mapGetters("mainstore", { gCategory: "gCategory" }),
  },
};
</script>

<style scoped>
.cross {
  width: 1.3rem;
  height: 1.3rem;
  background-color: #000;
  position: relative;
  top: 0;
  right: 0;
  padding: 0;
  cursor: pointer;
}
.cross:before {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  top: 8px;
  right: 0;
  background-color: #fff;
  transform: rotate(45deg);
}
.cross::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  top: 8px;
  right: 0;
  background-color: #fff;
  transform: rotate(-45deg);
}
#img {
  padding: 0 auto;
  width: 100%;
}
.img-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 30%;
  margin: 0px 5px;
  border: 2px solid #000;
  padding: 0;
}
.photo-wrap {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  margin: 20px 0px;
}
textarea {
  border-radius: 3px;
}
select {
  border-radius: 3px;
  font-size: 1.1rem;
  padding: 2px 2px;
}
option {
  font-size: 1.1rem;
  padding: 2px 2px;
}
label {
  margin: 10px 0px 5px 0px;
  font-size: 1.3rem;
}
input[type="number"] {
  padding: 2px 2px;
  font-size: 1.1rem;
}
input {
  border-radius: 3px;
}
input[type="text"] {
  padding: 2px 2px;
  font-size: 1.2rem;
}
.inpfield {
  width: 100%;
  margin: 5px 0px;
}
.form-group {
  display: flex;
  flex-direction: column;
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
</style>
