import{m as f,a as g,_ as l,r as n,o as d,c as _,b as t,d as a,w as e,e as c,t as $,f as x,F as k}from"./index-fc1b60a1.js";import{c as v}from"./cartStore-ae31ee09.js";import"./Toast-2c11397b.js";import"./statusStore-aef80293.js";const w={data(){return{}},methods:{...f(v,["getCarts"])},computed:{...g(v,["cart"])},mounted(){this.getCarts()}},y={class:"sticky-top"},C={id:"nav"},N={class:"navbar navbar-expand-lg bg-dark navbar-dark"},S={class:"container"},B=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),F={class:"collapse navbar-collapse",id:"navbarSupportedContent"},V={class:"navbar-nav ms-auto mb-2 mb-lg-0"},T={class:"nav-item"},j={class:"nav-item"},A={class:"nav-item"},D=t("i",{class:"bi bi-bag-fill text-secondary"},null,-1),E={class:"badge badge-pill rounded-pill bg-danger"};function L(r,p,i,m,u,h){const s=n("router-link");return d(),_("div",y,[t("div",C,[t("nav",N,[t("div",S,[a(s,{to:"/",class:"navbar-brand fs-1 logo"},{default:e(()=>[c("11 街咖啡")]),_:1}),B,t("div",F,[t("ul",V,[t("li",T,[a(s,{to:"/products",class:"nav-link text-secondary"},{default:e(()=>[c(" 商品列表 ")]),_:1})]),t("li",j,[a(s,{to:"/articles",class:"nav-link text-secondary",href:"#"},{default:e(()=>[c(" 咖啡專欄 ")]),_:1})]),t("li",A,[a(s,{to:"/cart",class:"nav-link"},{default:e(()=>{var o;return[D,t("span",E,$((o=r.cart.carts)==null?void 0:o.length),1)]}),_:1})])])])])])])])}const q=l(w,[["render",L]]),z={},G={class:"bg-dark"},H={class:"container"},I={class:"text-white py-3"},J={class:"d-flex justify-content-center"},K={class:"d-flex list-unstyled mb-0"},M=x('<li class="nav-item me-2"><a href="#" class="nav-link text-white"> 商品列表 </a></li><li class="nav-item me-2"><a href="#" class="nav-link text-white"> 關於我們 </a></li><li class="nav-item me-2"><a href="#" class="nav-link text-white"> 常見問題 </a></li>',3),O={class:"nav-item"},P=t("p",{class:"mb-0 text-center"},[t("small",null,"無商業用途，僅供學習使用")],-1);function Q(r,p){const i=n("router-link");return d(),_("div",G,[t("div",H,[t("div",I,[t("div",J,[t("ul",K,[M,t("li",O,[a(i,{to:"/login",href:"#",class:"nav-link text-white"},{default:e(()=>[c(" 後台管理 ")]),_:1})])])]),P])])])}const R=l(z,[["render",Q]]),U={data(){return{}},components:{NavBar:q,FooterCard:R}};function W(r,p,i,m,u,h){const s=n("NavBar"),o=n("router-view"),b=n("FooterCard");return d(),_(k,null,[a(s),a(o),a(b)],64)}const at=l(U,[["render",W]]);export{at as default};
