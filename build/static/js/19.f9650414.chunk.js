(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[19],{371:function(t,e,a){"use strict";a.d(e,"a",(function(){return j}));var n=a(0),o=a(52),s=a(1),r=a.n(s),l=a(591),i=a(507),c=a(616),u=a(18),d=a(66),p=a.n(d),b=a(2),f=Object(l.a)((function(t){return{root:{"& > *":{color:"white",borderColor:"white","&.Mui-focused":{color:"white",borderColor:"white"}},input:{color:"white",borderWidth:"1px",borderColor:"yellow !important"}}}}));function j(){var t=f(),e=r.a.useState({fullname:"",email:"",password:"",confirm_password:""}),a=Object(o.a)(e,2),s=a[0],l=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(b.jsx)(i.a,{id:"standard-basic",label:"Fullname",value:s.fullname,onChange:function(t){return l(Object(n.a)(Object(n.a)({},s),{},{fullname:t.target.value}))},className:t.root,fullWidth:!0,InputProps:{className:t.input}}),Object(b.jsx)(i.a,{id:"standard-basic",label:"Email",value:s.email,onChange:function(t){return l(Object(n.a)(Object(n.a)({},s),{},{email:t.target.value}))},className:t.root,fullWidth:!0,InputProps:{className:t.input}}),Object(b.jsx)(i.a,{id:"standard-basic",type:"password",label:"Password",value:s.password,onChange:function(t){return l(Object(n.a)(Object(n.a)({},s),{},{password:t.target.value}))},className:t.root,fullWidth:!0,InputProps:{className:t.input}}),Object(b.jsx)(i.a,{id:"standard-basic",type:"password",label:"Conrim Password",value:s.confirm_password,onChange:function(t){return l(Object(n.a)(Object(n.a)({},s),{},{confirm_password:t.target.value}))},className:t.root,fullWidth:!0,InputProps:{className:t.input}}),Object(b.jsx)(c.a,{fullWidth:!0,style:{marginTop:35,minWidth:100},variant:"contained",disabled:s.confirm_password!==s.password&&s.password.length>6,onClick:function(){return function(){var t={email:s.email,fullname:s.fullname,password:s.password};p.a.post("http://localhost:4001/auth/signup",t,{headers:{"Content-Type":"application/json"}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}()},children:"Sign up"})]}),Object(b.jsx)("div",{children:Object(b.jsx)(u.b,{to:"/login",style:{color:"white",float:"left"},children:"Login "})})]})}},545:function(t,e,a){},624:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return s}));a(1),a(545);var n=a(371),o=a(2);function s(){return Object(o.jsx)("div",{id:"container",children:Object(o.jsxs)("div",{class:"box",id:"bluebox",children:[Object(o.jsx)("h3",{children:"Create a New Account"}),"It\u2019s quick and easy.",Object(o.jsx)(n.a,{})]})})}}}]);
//# sourceMappingURL=19.f9650414.chunk.js.map