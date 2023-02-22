import{T as c}from"./Toast-14418d70.js";import{_ as m,o as u,c as p,b as e,j as d,v as l,i as _,r as f,d as h}from"./index-b7acc520.js";const{VITE_API:g}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/cafe_backend/",MODE:"production",DEV:!1,PROD:!0},b={data(){return{user:{username:"",password:""},isProcessing:!1}},methods:{login(){this.isProcessing=!0,this.$http.post(`${g}/admin/signin`,this.user).then(t=>{if(t.data.success){const{token:s,expired:r,message:i}=t.data;document.cookie=`hexToken=${s}; expires=${r}; path=/`,this.$router.push("/admin/products"),c.fire({title:`${i}`,icon:"success"})}}).catch(t=>{var r;const s=((r=t.data)==null?void 0:r.message)||"登入失敗";this.isProcessing=!1,c.fire({title:`${s}`,icon:"error"})})}}},$={class:"col-6"},w={class:"form-floating mb-3"},x=e("label",{for:"username"},"Email address",-1),v={class:"form-floating"},P=e("label",{for:"password"},"Password",-1),E=["disabled"];function T(t,s,r,i,n,a){return u(),p("div",$,[e("form",{id:"form",class:"form-signin",onSubmit:s[2]||(s[2]=_((...o)=>a.login&&a.login(...o),["prevent"]))},[e("div",w,[d(e("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com","onUpdate:modelValue":s[0]||(s[0]=o=>n.user.username=o),required:"",autofocus:""},null,512),[[l,n.user.username]]),x]),e("div",v,[d(e("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":s[1]||(s[1]=o=>n.user.password=o),placeholder:"Password",required:""},null,512),[[l,n.user.password]]),P]),e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit",disabled:n.isProcessing}," 登入 ",8,E)],32)])}const V=m(b,[["render",T]]),k={data(){return{}},components:{LoginForm:V}},y={class:"mt-5"},A={class:"row justify-content-center"},I=e("h1",{class:"h3 mb-3 font-weight-normal text-center"},"請先登入",-1),L=e("p",{class:"mt-5 mb-3 text-muted text-center"},"© 2021~∞ - 六角學院",-1);function B(t,s,r,i,n,a){const o=f("LoginForm");return u(),p("div",y,[e("div",A,[I,h(o)]),L])}const F=m(k,[["render",B]]);export{F as default};
