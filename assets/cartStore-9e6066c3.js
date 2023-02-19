import{f as l,g as r}from"./index-6fd02e4d.js";import{T as s}from"./Toast-8690d0f6.js";import{s as g}from"./statusStore-6119fa29.js";const t=g(),{VITE_API:o,VITE_PATH:c}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/cafe_backend/",MODE:"production",DEV:!1,PROD:!0},p=l("cart",{state:()=>({cart:{}}),actions:{getCarts(){t.isLoading=!0,r.get(`${o}/api/${c}/cart`).then(e=>{const{data:a}=e.data;t.isLoading=!1,this.cart=a}).catch(()=>{t.isLoading=!1,s.fire({title:"無法取得資料，稍後再試",icon:"error"})})},addToCart(e,a=1){t.loadingItem=e;const i={product_id:e,qty:a};r.post(`${o}/api/${c}/cart`,{data:i}).then(n=>{const{message:d}=n.data;t.loadingItem="",s.fire({title:`${d}`,icon:"success"}),this.getCarts()}).catch(()=>{t.loadingItem="",s.fire({title:"無法取得資料，稍後再試",icon:"error"})})},updateCart(e,a){const i={product_id:e.product_id,qty:a};t.loadingItem=e.id,r.put(`${o}/api/${c}/cart/${e.id}`,{data:i}).then(n=>{const{message:d}=n.data;t.loadingItem="",s.fire({title:`${d}`,icon:"success"}),this.getCarts()}).catch(()=>{t.loadingItem="",s.fire({title:"無法取得資料，稍後再試",icon:"error"})})},removeCartItem(e){t.loadingItem=e,r.delete(`${o}/api/${c}/cart/${e}`).then(a=>{const{message:i}=a.data;t.loadingItem="",s.fire({title:`${i}`,icon:"success"}),this.getCarts()}).catch(()=>{t.loadingItem="",s.fire({title:"無法刪除資料，稍後再試",icon:"error"})})},deleteAllCarts(){t.isProcessing=!0,r.delete(`${o}/api/${c}/carts`).then(e=>{const{message:a}=e.data;t.isProcessing=!1,s.fire({title:`${a}`,icon:"success"}),this.getCarts()}).catch(()=>{t.isProcessing=!1,s.fire({title:"無法刪除資料，稍後再試",icon:"error"})})}}});export{p as c};
