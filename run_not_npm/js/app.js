(function(t){function e(e){for(var r,c,o=e[0],s=e[1],d=e[2],u=0,p=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02ee":function(t,e,n){"use strict";n("ffa2")},"10de":function(t,e,n){"use strict";n("d6ea")},"21b2":function(t,e,n){"use strict";n("f1e4")},"26bf":function(t,e,n){"use strict";n("4408")},2929:function(t,e,n){"use strict";n("c54c")},4381:function(t,e,n){},4408:function(t,e,n){},"45f5":function(t,e,n){},"4d10":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=(n("a4d3"),n("e01a"),function(t){return Object(r["j"])("data-v-2a253592"),t=t(),Object(r["i"])(),t}),i={id:"app"},c=a((function(){return Object(r["e"])("div",{class:"title"},[Object(r["e"])("h1",null,"The best sports equipment from top brands")],-1)})),o={key:0,class:"list-product"},s={class:"search-wrap"},d={class:"btn-add"},l={key:1,class:"page-prod-card"},u={key:2,class:"page-prod-card"},p={key:3,class:"page-prod-card"};function h(t,e,n,a,h,b){var f=Object(r["m"])("search"),g=Object(r["m"])("prod"),m=Object(r["m"])("pagination"),j=Object(r["m"])("editprod"),v=Object(r["m"])("addprod"),O=Object(r["m"])("proddetailpage");return Object(r["h"])(),Object(r["d"])("div",i,[c,Object(r["e"])("main",null,[t.flagDisplayProdList?(Object(r["h"])(),Object(r["d"])("div",o,[Object(r["e"])("div",s,[Object(r["f"])(f,{onInputevent:e[0]||(e[0]=function(t){return b.resultSearchWrit(t)})})]),Object(r["e"])("div",d,[Object(r["e"])("button",{class:"btn",onClick:e[1]||(e[1]=function(){return b.callAddProdCard&&b.callAddProdCard.apply(b,arguments)})},"Add Product")]),(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["l"])(b.displayProd,(function(t){return Object(r["h"])(),Object(r["d"])("div",{class:"product-card",key:t.id},[Object(r["f"])(g,{photo:t.photo[0],prodName:t.nameprod,category:t.category,price:t.price,quant:t.quantity,description:t.description,onClickBtnEdit:function(e){return b.callEditProdCard(t.id)},onClickBtnDetail:function(e){return b.detailProdCard(t.id)}},null,8,["photo","prodName","category","price","quant","description","onClickBtnEdit","onClickBtnDetail"])])})),128)),Object(r["s"])(Object(r["e"])("div",null,[Object(r["f"])(m,{onPagesClick:e[2]||(e[2]=function(t){return b.overWriting(t)})})],512),[[r["q"],b.lengthProdData>t.displayPagination]])])):t.flagDisplayEditProdCard?(Object(r["h"])(),Object(r["d"])("div",l,[Object(r["f"])(j,{onCloseEdit:e[3]||(e[3]=function(t){return b.backMain()}),onEditProd:e[4]||(e[4]=function(t){return b.editProduct(t)}),onDelprod:e[5]||(e[5]=function(t){return b.deleteProduct()})})])):t.flagDisplayAddProd?(Object(r["h"])(),Object(r["d"])("div",u,[Object(r["f"])(v,{onCloseEdit:e[6]||(e[6]=function(t){return b.backMain()}),onAddProd:e[7]||(e[7]=function(t){return b.addProduct(t)})})])):t.flagDisplayDetailProduct?(Object(r["h"])(),Object(r["d"])("div",p,[Object(r["f"])(O,{onBackMain:e[8]||(e[8]=function(t){return b.backMain()})})])):Object(r["c"])("",!0)])])}var b=n("5530"),f=(n("fb6a"),n("5502")),g=function(t){return Object(r["j"])("data-v-aa67ea5c"),t=t(),Object(r["i"])(),t},m={class:"block_prod"},j=["src"],v={class:"prod_info"},O={class:"block_name"},y={class:"email"},P={class:"price"},k={class:"quantity"},x={class:"description"},D={class:"btn-block"},C=g((function(){return Object(r["e"])("span",null,"Edit",-1)})),I=[C],w=g((function(){return Object(r["e"])("span",null,"Detail",-1)})),A=[w];function q(t,e,n,a,i,c){return Object(r["h"])(),Object(r["d"])("div",m,[Object(r["e"])("img",{src:n.photo},null,8,j),Object(r["e"])("div",v,[Object(r["e"])("div",O,[Object(r["e"])("span",null,"Title: "+Object(r["n"])(n.prodName),1)]),Object(r["e"])("div",y,[Object(r["e"])("span",null,"Category: "+Object(r["n"])(n.category),1)]),Object(r["e"])("div",P,[Object(r["e"])("span",null,"Price: "+Object(r["n"])(n.price),1)]),Object(r["e"])("div",k,[Object(r["e"])("span",null,"Quantity: "+Object(r["n"])(n.quant),1)]),Object(r["e"])("div",x,[Object(r["e"])("span",null,"Description: "+Object(r["n"])(n.description),1)]),Object(r["e"])("div",D,[Object(r["e"])("button",{class:"btn",onClick:e[0]||(e[0]=function(){return c.editProdCart&&c.editProdCart.apply(c,arguments)})},I),Object(r["e"])("button",{class:"btn",onClick:e[1]||(e[1]=function(){return c.prodDetail&&c.prodDetail.apply(c,arguments)})},A)])])])}n("a9e3");var _={props:{photo:String,prodName:String,category:String,price:Number,quant:Number,description:String},methods:{editProdCart:function(){this.$emit("clickBtnEdit")},Clk:function(){console.log(this.price)},prodDetail:function(){this.$emit("clickBtnDetail")}}},S=(n("02ee"),n("6b0d")),T=n.n(S);const E=T()(_,[["render",q],["__scopeId","data-v-aa67ea5c"]]);var B=E,R=function(t){return Object(r["j"])("data-v-7ea3fff4"),t=t(),Object(r["i"])(),t},M={class:"inpfield"},$=R((function(){return Object(r["e"])("h1",null,"Editing the product card",-1)})),z={class:"form-group"},V=R((function(){return Object(r["e"])("label",null,[Object(r["e"])("span",null,"Title")],-1)})),L=R((function(){return Object(r["e"])("label",null," Category ",-1)})),U=["value"],N=R((function(){return Object(r["e"])("label",null," Price ",-1)})),F=R((function(){return Object(r["e"])("label",null," Quantity ",-1)})),Q=R((function(){return Object(r["e"])("label",null," Description ",-1)})),W=["maxlength","value"],J=R((function(){return Object(r["e"])("label",null," Photo. Paste the url ",-1)})),K={class:"photo-wrap"},G=["onClick"],H=["src"];function X(t,e,n,a,i,c){return Object(r["h"])(),Object(r["d"])("div",M,[$,Object(r["e"])("div",null,[Object(r["e"])("div",z,[V,Object(r["s"])(Object(r["e"])("input",{name:"name product",type:"text","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.vals.nameprod=e}),onChange:e[1]||(e[1]=function(t){return c.validTitle(t)})},null,544),[[r["p"],t.vals.nameprod,void 0,{trim:!0}]]),L,Object(r["s"])(Object(r["e"])("select",{"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.vals.category=e}),name:"category",id:"category_val"},[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["l"])(t.gCategory,(function(t,e){return Object(r["h"])(),Object(r["d"])("option",{key:e,value:t.value},Object(r["n"])(t.text),9,U)})),128))],512),[[r["o"],t.vals.category]]),N,Object(r["s"])(Object(r["e"])("input",{name:"price",type:"number","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.vals.price=e}),onChange:e[4]||(e[4]=function(t){return c.validPr(t)})},null,544),[[r["p"],t.vals.price]]),F,Object(r["s"])(Object(r["e"])("input",{name:"qauntitiy",type:"number","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.vals.quantity=e}),onChange:e[6]||(e[6]=function(t){return c.validQua(t)})},null,544),[[r["p"],t.vals.quantity]]),Q,Object(r["e"])("textarea",{name:"description",type:"comment",maxlength:t.maxLenght,value:t.vals.description,onInput:e[7]||(e[7]=function(t){return c.validDescr(t)})},null,40,W),J,Object(r["s"])(Object(r["e"])("input",{type:"text",name:"photo",ref:"photoInput","onUpdate:modelValue":e[8]||(e[8]=function(e){return t.urlImg=e}),onKeyup:e[9]||(e[9]=Object(r["t"])((function(){return c.addPhoto&&c.addPhoto.apply(c,arguments)}),["enter"]))},null,544),[[r["p"],t.urlImg]]),Object(r["e"])("div",K,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["l"])(t.vals.photo,(function(t,e){return Object(r["h"])(),Object(r["d"])("div",{class:"img-wrap",key:e},[Object(r["e"])("div",{class:"cross",onClick:function(t){return c.deleteImg(e)}},null,8,G),Object(r["e"])("img",{id:"img",src:t},null,8,H)])})),128))])]),Object(r["e"])("div",null,[Object(r["e"])("button",{class:"btn",onClick:e[10]||(e[10]=function(){return c.editProd&&c.editProd.apply(c,arguments)})},"Edit"),Object(r["e"])("button",{class:"btn",onClick:e[11]||(e[11]=function(){return c.clickCloseBtn&&c.clickCloseBtn.apply(c,arguments)})},"Close"),Object(r["e"])("button",{class:"btn",onClick:e[12]||(e[12]=Object(r["u"])((function(){return c.clearAll&&c.clearAll.apply(c,arguments)}),["prevent"]))},"Clear"),Object(r["e"])("button",{class:"btn",onClick:e[13]||(e[13]=Object(r["u"])((function(){return c.delProd&&c.delProd.apply(c,arguments)}),["prevent"]))},"Delete")])])])}var Y=n("1da1"),Z=(n("96cf"),n("7db0"),n("d3b7"),n("a434"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("00b4"),n("466d"),n("5319"),{valTitle:/[a-z]{3,}/gi,valDescr:/<|>|[\]|[|]|[/]|;|=/g,reqTest:function(t,e){var n=new RegExp(e);return n.test(t)},reqMatch:function(t,e){return t.match(e)},reqReplace:function(t,e,n){return t.replace(e,n)}}),tt={data:function(){return{vals:{},thisProd:{},maxLenght:255,urlImg:""}},methods:{productCardRecord:function(){var t=this;for(var e in this.thisProd=this.prodData.find((function(e){return e.id===t.globalId})),this.thisProd)this.vals[e]=this.thisProd[e]},validDescr:function(t){var e=t.target.value;e=Z.reqReplace(e,Z.valDescr,""),this.vals.description=e},validTitle:function(t){var e=t.target.value;Z.reqTest(e,Z.valTitle)?this.vals.nameprod=e:(this.vals.nameprod=this.thisProd.nameprod,alert("The name of the product must be more than 3 characters and cannot consist only of numbers"),t.target.focus())},validPr:function(t){var e=t.target.value;this.vals.price=Math.max(e,1)},validQua:function(t){var e=t.target.value;this.vals.quantity=Math.max(e,1)},clearAll:function(){this.vals.nameprod="",this.vals.description="",this.vals.category=this.gCategory[0].value,this.vals.price=1e3,this.vals.quantity=1,this.vals.photo=[]},clickCloseBtn:function(){this.clearAll(),this.$emit("closeEdit")},editProd:function(){this.$emit("editProd",this.vals)},delProd:function(){this.$emit("delprod")},validPhoto:function(){this.vals.photo.length<3?this.$refs.photoInput.disabled=!1:this.$refs.photoInput.disabled=!0},addPhoto:function(){this.vals.photo.push(this.urlImg),this.urlImg="",this.validPhoto()},deleteImg:function(t){this.vals.photo.splice(t,1),this.validPhoto()}},computed:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(f["c"])("mainstore",{prodData:"prodData"})),Object(f["c"])("mainstore",{globalId:"globalId"})),Object(f["c"])("mainstore",{gCategory:"gCategory"})),mounted:function(){var t=this;return Object(Y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick((function(){t.productCardRecord()}));case 2:case"end":return e.stop()}}),e)})))()}};n("2929");const et=T()(tt,[["render",X],["__scopeId","data-v-7ea3fff4"]]);var nt=et,rt=function(t){return Object(r["j"])("data-v-411c5f74"),t=t(),Object(r["i"])(),t},at={class:"inpfield"},it=rt((function(){return Object(r["e"])("h1",null,"Adding a new product",-1)})),ct={class:"form-group"},ot=rt((function(){return Object(r["e"])("label",null,[Object(r["e"])("span",null,"Title")],-1)})),st=rt((function(){return Object(r["e"])("label",null," Category ",-1)})),dt=["value"],lt=rt((function(){return Object(r["e"])("label",null," Price ",-1)})),ut=rt((function(){return Object(r["e"])("label",null," Quantity ",-1)})),pt=rt((function(){return Object(r["e"])("label",null," Description ",-1)})),ht=["maxlength","value"],bt=rt((function(){return Object(r["e"])("label",null," Photo. Paste the url",-1)})),ft={class:"photo-wrap"},gt=["onClick"],mt=["src"];function jt(t,e,n,a,i,c){return Object(r["h"])(),Object(r["d"])("div",at,[it,Object(r["e"])("div",null,[Object(r["e"])("div",ct,[ot,Object(r["s"])(Object(r["e"])("input",{name:"name product",type:"text","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.vals.nameprod=e}),onChange:e[1]||(e[1]=function(t){return c.validTitle(t)})},null,544),[[r["p"],t.vals.nameprod,void 0,{trim:!0}]]),st,Object(r["s"])(Object(r["e"])("select",{"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.vals.category=e}),name:"category",id:"category_val"},[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["l"])(t.gCategory,(function(t,e){return Object(r["h"])(),Object(r["d"])("option",{key:e,value:t.value},Object(r["n"])(t.text),9,dt)})),128))],512),[[r["o"],t.vals.category]]),lt,Object(r["s"])(Object(r["e"])("input",{name:"price",type:"number","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.vals.price=e}),onChange:e[4]||(e[4]=function(t){return c.validPrice(t)})},null,544),[[r["p"],t.vals.price]]),ut,Object(r["s"])(Object(r["e"])("input",{name:"qauntitiy",type:"number","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.vals.quantity=e}),onChange:e[6]||(e[6]=function(t){return c.validQua(t)})},null,544),[[r["p"],t.vals.quantity]]),pt,Object(r["e"])("textarea",{name:"description",type:"comment",maxlength:t.maxLenght,value:t.vals.description,onInput:e[7]||(e[7]=function(t){return c.validDescr(t)})},null,40,ht),bt,Object(r["s"])(Object(r["e"])("input",{type:"text",name:"photo",ref:"photoInput","onUpdate:modelValue":e[8]||(e[8]=function(e){return t.urlImg=e}),onKeyup:e[9]||(e[9]=Object(r["t"])((function(){return c.addPhoto&&c.addPhoto.apply(c,arguments)}),["enter"]))},null,544),[[r["p"],t.urlImg]]),Object(r["e"])("div",ft,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["l"])(t.vals.photo,(function(t,e){return Object(r["h"])(),Object(r["d"])("div",{class:"img-wrap",key:e},[Object(r["e"])("div",{class:"cross",onClick:function(t){return c.deleteImg(e)}},null,8,gt),Object(r["e"])("img",{id:"img",src:t},null,8,mt)])})),128))])]),Object(r["e"])("div",null,[Object(r["e"])("button",{class:"btn",onClick:e[10]||(e[10]=function(){return c.addProd&&c.addProd.apply(c,arguments)})},"Add"),Object(r["e"])("button",{class:"btn",onClick:e[11]||(e[11]=function(){return c.clickCloseBtn&&c.clickCloseBtn.apply(c,arguments)})},"Close"),Object(r["e"])("button",{class:"btn",onClick:e[12]||(e[12]=Object(r["u"])((function(){return c.clearAll&&c.clearAll.apply(c,arguments)}),["prevent"]))},"Clear")])])])}n("159b"),n("caad");var vt={props:{label:String},data:function(){return{vals:{id:null,nameprod:"",category:"free weight",price:1e3,quantity:1,description:"",photo:[]},urlImg:"",maxLenght:255}},methods:{validDescr:function(t){var e=t.target.value;e=Z.reqReplace(e,Z.valDescr,""),this.vals.description=e},productAvail:function(t){var e=[];this.prodData.forEach((function(t){e.push(t.nameprod)}));var n=e.includes(t,0);return n},validTitle:function(t){var e=t.target.value;Z.reqTest(e,Z.valTitle)?this.productAvail(e)?(this.vals.nameprod="",alert("A product with that name already exists")):this.vals.nameprod=e:(this.vals.nameprod="",alert("The name of the product must be more than 3 characters and cannot consist only of numbers"),t.target.focus())},validPrice:function(t){var e=t.target.value;this.vals.price=Math.max(e,1)},validQua:function(t){var e=t.target.value;this.vals.quantity=Math.max(e,1)},clearAll:function(){this.vals.nameprod="",this.vals.description="",this.vals.category=this.gCategory[0].value,this.vals.price=1e3,this.vals.quantity=1,this.vals.photo=[]},clickCloseBtn:function(){this.clearAll(),this.$emit("closeEdit")},addProd:function(){this.assignId(),this.$emit("addProd",this.vals)},assignId:function(){var t=this.prodData[this.prodData.length-1];this.vals.id=t.id+1},validPhoto:function(){this.vals.photo.length<3?this.$refs.photoInput.disabled=!1:this.$refs.photoInput.disabled=!0},addPhoto:function(){this.vals.photo.push(this.urlImg),this.urlImg="",this.validPhoto()},deleteImg:function(t){this.vals.photo.splice(t,1),this.validPhoto()}},computed:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(f["c"])("mainstore",{prodData:"prodData"})),Object(f["c"])("mainstore",{globalId:"globalId"})),Object(f["c"])("mainstore",{gCategory:"gCategory"}))};n("26bf");const Ot=T()(vt,[["render",jt],["__scopeId","data-v-411c5f74"]]);var yt=Ot,Pt=function(t){return Object(r["j"])("data-v-510d76c8"),t=t(),Object(r["i"])(),t},kt={class:"prod-block"},xt={class:"prod-title"},Dt={class:"prod-category"},Ct={class:"prod-photo"},It={class:"prod-description"},wt={class:"prod-price-quantity"},At={class:"ppq-items"},qt={class:"ppq-items"},_t=Pt((function(){return Object(r["e"])("span",null,"Back",-1)})),St=[_t];function Tt(t,e,n,a,i,c){var o=Object(r["m"])("gallery");return Object(r["h"])(),Object(r["d"])("div",kt,[Object(r["e"])("div",xt,[Object(r["e"])("span",null,Object(r["n"])(c.cardThisProd.nameprod),1)]),Object(r["e"])("div",Dt,[Object(r["e"])("span",null,Object(r["n"])(c.cardThisProd.category),1)]),Object(r["e"])("div",Ct,[Object(r["f"])(o,{arrImage:c.cardThisProd.photo},null,8,["arrImage"])]),Object(r["e"])("div",It,[Object(r["e"])("span",null,Object(r["n"])(c.cardThisProd.description),1)]),Object(r["e"])("div",wt,[Object(r["e"])("span",At,"Price: "+Object(r["n"])(c.cardThisProd.price),1),Object(r["e"])("span",qt,"in stock: "+Object(r["n"])(c.cardThisProd.quantity),1)]),Object(r["e"])("button",{class:"btn",onClick:e[0]||(e[0]=function(){return c.clickBackBtn&&c.clickBackBtn.apply(c,arguments)})},St)])}var Et={class:"wrap"},Bt={class:"gallery-block"},Rt=["src"];function Mt(t,e,n,a,i,c){return Object(r["h"])(),Object(r["d"])("div",Et,[Object(r["e"])("div",Bt,[Object(r["e"])("img",{src:c.changPicture,class:"images"},null,8,Rt)]),Object(r["e"])("button",{class:"btn",onClick:e[0]||(e[0]=function(){return c.changIndex&&c.changIndex.apply(c,arguments)})},"Next photo")])}var $t={props:{arrImage:Array},data:function(){return{index:0}},methods:{changIndex:function(){this.index===this.arrImage.length-1?this.index=0:this.index+=1}},computed:{changPicture:function(){return this.arrImage[this.index]}}};n("e452");const zt=T()($t,[["render",Mt],["__scopeId","data-v-4facd58e"]]);var Vt=zt,Lt={components:{gallery:Vt},props:{id:Number},data:function(){return{}},methods:{clickBackBtn:function(){this.$emit("backMain")}},computed:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(f["c"])("mainstore",{prodData:"prodData"})),Object(f["c"])("mainstore",{globalId:"globalId"})),{},{cardThisProd:function(){var t=this,e=this.prodData.find((function(e){return e.id===t.globalId}));return e}})};n("10de");const Ut=T()(Lt,[["render",Tt],["__scopeId","data-v-510d76c8"]]);var Nt=Ut,Ft={class:"container_pagination"},Qt={class:"pagination",ref:"blockPage"},Wt=["onClick"];function Jt(t,e,n,a,i,c){return Object(r["h"])(),Object(r["d"])("div",Ft,[Object(r["e"])("ul",Qt,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["l"])(c.setPages,(function(t,e){return Object(r["h"])(),Object(r["d"])("li",{class:"pg_items",key:e,onClick:function(e){return c.pagesClick(t)}},Object(r["n"])(t),9,Wt)})),128))],512)])}var Kt=n("2909"),Gt={data:function(){return{page:1,pages:[],itemsPerPage:10}},methods:{pagesClick:function(t){this.page=t;var e=this.paginate();this.$emit("pagesClick",e),this.activePage()},activePage:function(){var t=Object(Kt["a"])(this.$refs.blockPage.children);t.forEach((function(t){t.classList.contains("pg_items")&&t.classList.remove("active")})),t[this.page-1].classList.add("active")},paginate:function(){var t=this.page,e=this.itemsPerPage,n=t*e-e,r=t*e;return{from:n,to:r}}},computed:Object(b["a"])(Object(b["a"])({},Object(f["c"])("mainstore",{prodData:"prodData"})),{},{setPages:function(){for(var t=Math.ceil(this.prodData.length/this.itemsPerPage),e=[],n=1;n<=t;n++)e.push(n);return e}}),mounted:function(){var t=this;return Object(Y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick((function(){t.paginate(),t.activePage()}));case 2:case"end":return e.stop()}}),e)})))()}};n("21b2");const Ht=T()(Gt,[["render",Jt],["__scopeId","data-v-d6e4ccac"]]);var Xt=Ht,Yt=function(t){return Object(r["j"])("data-v-7c2bcd0e"),t=t(),Object(r["i"])(),t},Zt={class:"search"},te=Yt((function(){return Object(r["e"])("label",{for:"inp"},"Search product:",-1)}));function ee(t,e,n,a,i,c){return Object(r["h"])(),Object(r["d"])("div",Zt,[te,Object(r["s"])(Object(r["e"])("input",{type:"text",id:"inp","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.inputVal=e}),onInput:e[1]||(e[1]=function(){return c.entry&&c.entry.apply(c,arguments)})},null,544),[[r["p"],t.inputVal]])])}var ne={data:function(){return{inputVal:"",resultSearchArr:[]}},methods:{searchProduct:function(){if(""!==this.inputVal){var t=this.prodData,e=this.inputVal.toLowerCase(),n=[];t.forEach((function(t){-1!==t.nameprod.toLowerCase().indexOf(e,0)&&n.push(t)})),this.resultSearchArr=n}else this.resultSearchArr=[]},entry:function(){this.searchProduct(),this.$emit("inputevent",this.resultSearchArr)}},computed:Object(b["a"])({},Object(f["c"])("mainstore",{prodData:"prodData"}))};n("ef03");const re=T()(ne,[["render",ee],["__scopeId","data-v-7c2bcd0e"]]);var ae=re,ie={components:{prod:B,editprod:nt,addprod:yt,proddetailpage:Nt,pagination:Xt,search:ae},data:function(){return{arrResultSearch:[],arrForPaginate:{from:0,to:10},flagDisplayProdList:!0,flagDisplayEditProdCard:!1,flagDisplayAddProd:!1,flagDisplayDetailProduct:!1,displaySearchResult:!1,displayPagination:10}},methods:Object(b["a"])(Object(b["a"])(Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(f["b"])("mainstore",{setId:"setId"})),Object(f["b"])("mainstore",{addProd:"addProd"})),Object(f["b"])("mainstore",{editProd:"editProd"})),Object(f["b"])("mainstore",{delProd:"delProd"})),{},{resultSearchWrit:function(t){t&&(t.length>0&&(this.arrForPaginate.from=0,this.arrForPaginate.to=10),this.arrResultSearch=t)},overWriting:function(t){this.arrForPaginate=t||{from:0,to:10}},callEditProdCard:function(t){this.setId(t),this.flagDisplayProdList=!1,this.flagDisplayEditProdCard=!0},callAddProdCard:function(){this.flagDisplayProdList=!1,this.flagDisplayAddProd=!0},detailProdCard:function(t){this.setId(t),this.flagDisplayProdList=!1,this.flagDisplayDetailProduct=!0},backMain:function(){this.flagDisplayAddProd=!1,this.flagDisplayDetailProduct=!1,this.flagDisplayEditProdCard=!1,this.flagDisplayProdList=!0},editProduct:function(t){this.editProd(t),this.backMain()},addProduct:function(t){this.addProd(t),this.setId(null),this.overWriting(),this.backMain()},deleteProduct:function(){this.delProd(),this.setId(null),this.overWriting(),this.backMain()}}),computed:Object(b["a"])(Object(b["a"])({},Object(f["c"])("mainstore",{prodData:"prodData"})),{},{lengthProdData:function(){return this.prodData.length},displayProd:function(){return this.arrResultSearch&&this.arrResultSearch.length>0?this.arrResultSearch.slice(this.arrForPaginate.from,this.arrForPaginate.to):this.prodData.slice(this.arrForPaginate.from,this.arrForPaginate.to)}}),created:function(){this.overWriting()}};n("583f");const ce=T()(ie,[["render",h],["__scopeId","data-v-2a253592"]]);var oe=ce,se=(n("e9c4"),n("c740"),[{id:1,nameprod:"kettlebell",category:"free weight",price:2e3,quantity:20,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:2,nameprod:"kettlebell",category:"free weight",price:3e3,quantity:30,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:3,nameprod:"kettlebell",category:"free weight",price:4e3,quantity:40,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:4,nameprod:"kettlebell",category:"free weight",price:1e3,quantity:10,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:5,nameprod:"kettlebell",category:"free weight",price:1e3,quantity:10,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:6,nameprod:"kettlebell",category:"free weight",price:1e3,quantity:10,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:7,nameprod:"kettlebell",category:"free weight",price:1e3,quantity:10,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:8,nameprod:"kettlebell",category:"free weight",price:1e3,quantity:10,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:9,nameprod:"kettlebell",category:"free weight",price:1e3,quantity:10,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:10,nameprod:"kettlebell",category:"free weight",price:1e3,quantity:10,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:11,nameprod:"kettlebell",category:"free weight",price:1e3,quantity:10,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:12,nameprod:"kettlebell",category:"free weight",price:1e3,quantity:10,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:13,nameprod:"kettlebell",category:"free weight",price:1e3,quantity:10,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:14,nameprod:"kettlebell",category:"free weight",price:1e3,quantity:10,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]},{id:15,nameprod:"kettlebell",category:"free weight",price:1e3,quantity:10,description:"A projectile for strength and endurance training",photo:["https://cdn2.static1-sima-land.com/items/3876813/0/1600.jpg","https://cdn.vseinstrumenti.ru/images/goods/otdyh-i-sport/trenazhery/1426541/1000x1000/51650742.jpg"]}]);function de(){return se}var le=[{text:"free weight",value:"free weight"},{text:"expanders",value:"expanders"},{text:"equipment",value:"equipment"},{text:"exercise machine",value:"exercise machine"}];function ue(){return le}var pe={namespaced:!0,state:{prodDataArr:[],globalId:0,category:[]},getters:{prodData:function(t){return t.prodDataArr},globalId:function(t){return t.globalId},gCategory:function(t){return t.category}},mutations:{setData:function(t,e){var n=[];e.forEach((function(t){n.push(t)})),t.prodDataArr=e},setCategory:function(t,e){var n=[];e.forEach((function(t){n.push(t)})),t.category=e},setId:function(t,e){t.globalId=e},editProd:function(t,e){var n=t.prodDataArr.find((function(e){return e.id===t.globalId}));for(var r in e)n[r]=e[r]},addProd:function(t,e){t.prodDataArr.push(e)},delProd:function(t){var e=t.prodDataArr.findIndex((function(e){return e.id===t.globalId}));t.prodDataArr.splice(e,1)},extractData:function(t,e){this.replaceState(Object.assign(t,e))}},actions:{load:function(t){return Object(Y["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,de();case 3:return r=e.sent,n("setData",r),e.next=7,ue();case 7:a=e.sent,n("setCategory",a);case 9:case"end":return e.stop()}}),e)})))()},setId:function(t,e){var n=t.commit;n("setId",e)},editProd:function(t,e){var n=t.commit;n("editProd",e)},addProd:function(t,e){var n=t.commit;n("addProd",e)},delProd:function(t){var e=t.commit;e("delProd")},extractData:function(t){return Object(Y["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,!localStorage.getItem("fulldata")){e.next=6;break}return e.next=4,JSON.parse(localStorage.getItem("fulldata"));case 4:r=e.sent,n("extractData",r);case 6:case"end":return e.stop()}}),e)})))()}}},he=Object(f["a"])({modules:{mainstore:pe}});he.subscribe((function(t,e){localStorage.setItem("fulldata",JSON.stringify(e))}));var be=he,fe=Object(r["b"])(oe);fe.use(be),be.dispatch("mainstore/load").then((function(){fe.mount("#app")})),be.dispatch("mainstore/extractData")},"583f":function(t,e,n){"use strict";n("4381")},c54c:function(t,e,n){},d6ea:function(t,e,n){},e452:function(t,e,n){"use strict";n("45f5")},ef03:function(t,e,n){"use strict";n("4d10")},f1e4:function(t,e,n){},ffa2:function(t,e,n){}});