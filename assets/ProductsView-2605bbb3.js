import{m as u,a as c,_,o as r,c as a,b as t,F as y,l as b,n as k,i as P,t as n,r as l,d as m,w as L,p as w,q as V,e as S}from"./index-0d7e1c47.js";import{p as i}from"./productsStore-ddea154e.js";import{s as v}from"./statusStore-e2609ddd.js";import{c as I}from"./cartStore-8296e51c.js";import"./Toast-35b65987.js";const N={data(){return{}},methods:{...u(i,["changeCategory"])},computed:{...c(i,["categories","filterCategory"])}},z={class:"col-lg-2 col-md-3 mb-2 my-5"},B={class:"list-group sticky-top"},T=["onClick"];function F(s,d,p,g,h,f){return r(),a("div",z,[t("ul",B,[(r(!0),a(y,null,b(s.categories,o=>(r(),a("li",{class:k(["list-group-item",{active:o===s.filterCategory}]),key:o,onClick:P(e=>s.changeCategory(o),["prevent"])},n(o),11,T))),128))])])}const U=_(N,[["render",F]]),q={data(){return{}},methods:{...u(i,["getProducts"]),...u(I,["addToCart"])},computed:{...c(i,["products","filterProducts"]),...c(v,["isLoading","loadingItem","isProcessing"])},mounted(){this.getProducts()}},x={class:"col-lg-10 col-md-9 my-5"},A={class:"row"},D={class:"card border-0 shadow-sm h-100"},E={class:"card-body"},M={class:"badge bg-primary float-right ml-2"},j={class:"card-title"},G={href:"#",class:"text-dark"},H={class:"card-text"},J={class:"text-right pr-2"},K={class:"card-footer d-grid gap-2 border-top-0"},O=["disabled","onClick"],Q={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"};function R(s,d,p,g,h,f){const o=l("router-link");return r(),a("div",x,[t("div",A,[(r(!0),a(y,null,b(s.filterProducts,e=>(r(),a("div",{class:"col-md-4 col-sm-6 mb-3 mb-4",key:e.id},[t("div",D,[m(o,{to:`/product/${e.id}`},{default:L(()=>[t("div",{style:w([{height:"170px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${e.imageUrl})`}])},null,4)]),_:2},1032,["to"]),t("div",E,[t("span",M,n(e.category),1),t("h5",j,[t("a",G,n(e.title),1)]),t("p",H,n(e.description),1),t("div",J,n(s.$filters.currency(e.price))+" 元 ",1)]),t("div",K,[t("button",{type:"button",class:"btn btn-primary",disabled:s.isProcessing,onClick:$=>s.addToCart(e.id)},[e.id===s.loadingItem?(r(),a("span",Q)):V("",!0),S(" 加到購物車 ")],8,O)])])]))),128))])])}const W=_(q,[["render",R]]),X={data(){return{}},components:{ProductCategory:U,ProductList:W},methods:{...u(i,["getProducts","changeCategory"])},computed:{...c(i,["products","categories","filterProducts","filterCategory"]),...c(v,["isLoading","loadingItem"])},mounted(){this.getProducts()}},Y={class:"container my-9"},Z={class:"row"};function tt(s,d,p,g,h,f){const o=l("VueLoading"),e=l("ProductCategory"),$=l("ProductList");return r(),a("div",Y,[m(o,{active:s.isLoading,"onUpdate:active":d[0]||(d[0]=C=>s.isLoading=C)},null,8,["active"]),t("div",Z,[m(e),m($)])])}const it=_(X,[["render",tt]]);export{it as default};