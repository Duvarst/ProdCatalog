import { sendProdArr } from "../api/products.js";
import { catRet } from "../api/category.js";

export default {
  namespaced: true,
  state: {
    prodDataArr: [],
    globalId: 0,
    category: [],
  },
  getters: {
    prodData: (state) => state.prodDataArr,
    globalId: (state) => state.globalId,
    gCategory: (state) => state.category,
  },
  mutations: {
    setData(state, data) {
      let arr = [];
      data.forEach((item) => {
        arr.push(item);
      });
      state.prodDataArr = data;
    },
    setCategory(state, data) {
      let arr = [];
      data.forEach((item) => {
        arr.push(item);
      });
      state.category = data;
    },
    setId(state, val) {
      state.globalId = val;
    },
    editProd(state, val) {
      let prod = state.prodDataArr.find((el) => el.id === state.globalId);
      for (let key in val) {
        prod[key] = val[key];
      }
    },
    addProd(state, val) {
      state.prodDataArr.push(val);
    },
    delProd(state) {
      let elemProdArr = state.prodDataArr.findIndex(
        (item) => item.id === state.globalId
      );

      state.prodDataArr.splice(elemProdArr, 1);
    },
    extractData(state, data) {
      this.replaceState(Object.assign(state, data));
    },
  },
  actions: {
    async load({ commit }) {
      let datainfo = await sendProdArr();
      commit("setData", datainfo);
      let catArr = await catRet();
      commit("setCategory", catArr);
    },
    setId({ commit }, val) {
      commit("setId", val);
    },
    editProd({ commit }, val) {
      commit("editProd", val);
    },
    addProd({ commit }, val) {
      commit("addProd", val);
    },
    delProd({ commit }) {
      commit("delProd");
    },
    async extractData({ commit }) {
      if (localStorage.getItem("fulldata")) {
        let data = await JSON.parse(localStorage.getItem("fulldata"));
        commit("extractData", data);
      }
    },
  },
};
