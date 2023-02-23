import{H as x}from"./HomeCategory-1917fe04.js";import{c as h}from"./cartStore-8f3a5d8d.js";import{s as N}from"./statusStore-f31a54fe.js";import{m as j,a as m,_ as g,r as d,o,c as n,b as t,j as i,F as b,l as q,t as a,d as c,w as f,e as y,q as V}from"./index-d936bd64.js";import"./productsStore-65d6ac91.js";import"./Toast-cbad5ebd.js";const A={data(){return{}},components:{HomeCategory:x},methods:{...j(h,["getCarts","updateCart","removeCartItem","deleteAllCarts"])},computed:{...m(h,["cart"]),...m(N,["isProcessing"])},mounted(){this.getCarts()}},H={class:"col-md-6"},L={key:0},S={class:"d-flex justify-content-between mb-5"},T=t("h2",{class:"mt-2 text-brown font-weight-bold"},"購物車",-1),B=t("i",{class:"bi bi-x-lg"},null,-1),P=[B],E=["src","alt"],F={class:"w-100 p-3 position-relative"},I=["onClick"],z=t("i",{class:"bi bi-x-lg"},null,-1),D=[z],M={class:"mb-0 fw-bold"},U={class:"mb-1 text-muted",style:{"font-size":"14px"}},G={class:"d-flex justify-content-between align-items-center w-100"},J={class:"input-group w-50 align-items-center"},K={class:"input-group-prepend pe-1"},O=["onClick","disabled"],Q=t("i",{class:"bi bi-dash-lg"},null,-1),R=[Q],W=["value"],X={class:"input-group-append ps-1"},Y=["onClick","disabled"],Z=t("i",{class:"bi bi-plus"},null,-1),tt=[Z],st={class:"mb-0 ms-auto"},et={class:"table mt-4 text-muted"},ot=t("th",{scope:"row",class:"border-0 px-0 pt-0 font-weight-normal"}," 小計 ",-1),nt={class:"text-end border-0 px-0 pt-0"},at={class:"d-flex justify-content-between mt-4"},rt=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),it={class:"mb-0 h4 fw-bold"},ct={key:1},lt=t("h4",{class:"mt-5"},"購物車無商品，快去逛逛",-1),dt={key:0,class:"mt-7"};function pt(e,l,v,C,w,$){var p,_;const r=d("router-link"),k=d("HomeCategory");return o(),n(b,null,[t("div",H,[(p=e.cart.carts)!=null&&p.length?(o(),n("div",L,[t("div",S,[T,t("a",{href:"#",class:"fs-3",onClick:l[0]||(l[0]=i((...s)=>e.deleteAllCarts&&e.deleteAllCarts(...s),["prevent"]))},P)]),(o(!0),n(b,null,q(e.cart.carts,s=>(o(),n("div",{key:s.id,class:"d-flex mt-4 bg-light"},[t("img",{src:s.product.imageUrl,alt:s.product.title,class:"img-fluid",style:{width:"120px",height:"120px","object-fit":"cover"}},null,8,E),t("div",F,[t("a",{href:"#",onClick:i(u=>e.removeCartItem(s.id),["prevent"]),class:"position-absolute",style:{top:"16px",right:"16px"}},D,8,I),t("p",M,a(s.product.title),1),t("p",U,a(s.product.description),1),t("div",G,[t("div",J,[t("div",K,[t("button",{class:"btn btn-primary btn-sm",onClick:i(u=>e.updateCart(s,s.qty-1),["prevent"]),disabled:e.isProcessing||s.qty===1},R,8,O)]),t("input",{type:"text",class:"form-control form-control-sm border-0 text-center my-auto shadow-none bg-secondary px-0",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",readonly:"",value:s.qty},null,8,W),t("div",X,[t("button",{class:"btn btn-primary btn-sm",onClick:i(u=>e.updateCart(s,s.qty+1),["prevent"]),disabled:e.isProcessing||s.qty===5},tt,8,Y)])]),t("p",st,"NT$"+a(s.total),1)])])]))),128)),t("table",et,[t("tbody",null,[t("tr",null,[ot,t("td",nt,"NT$"+a(e.cart.total),1)])])]),t("div",at,[rt,t("p",it,"NT$"+a(e.cart.final_total),1)]),c(r,{to:"/order",class:"btn btn-primary btn-block mt-4 rounded-0 py-3"},{default:f(()=>[y("確認訂單")]),_:1})])):(o(),n("div",ct,[lt,c(r,{class:"btn btn-primary mt-5",to:"/products"},{default:f(()=>[y("選購去")]),_:1})]))]),(_=e.cart.carts)!=null&&_.length?V("",!0):(o(),n("div",dt,[c(k)]))],64)}const _t=g(A,[["render",pt]]),ut={data(){return{}},components:{CartList:_t}},ht={class:"container my-5"},mt={class:"row justify-content-center py-5"};function bt(e,l,v,C,w,$){const r=d("CartList");return o(),n("div",ht,[t("div",mt,[c(r)])])}const $t=g(ut,[["render",bt]]);export{$t as default};