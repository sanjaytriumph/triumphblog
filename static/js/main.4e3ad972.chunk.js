(this.webpackJsonptriumphblog=this.webpackJsonptriumphblog||[]).push([[0],{34:function(e,t,c){},36:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(28),r=c.n(n),l=(c(34),c(3)),i=(c(35),c(36),c(4)),d=c(2),j=c(6),o=c.n(j),b=c(0),m=function(e){var t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){o.a.get("".concat(e.apiurl,"posts")).then((function(e){var t=e.data;return n(t)})),console.log("after posts"+s)}),[]),Object(b.jsx)(b.Fragment,{children:s.slice(0).reverse().map((function(e){var t=e.content;return console.log(t.length),t.length>100&&(t=t.substr(0,100)+"..."),Object(b.jsxs)("article",{className:"card mb-4",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h2",{className:"h4",children:Object(b.jsx)(i.b,{to:"post-detail/:".concat(e.id),children:e.title})})}),Object(b.jsxs)("div",{className:"card-body article-content",children:[t,t.length>100?Object(b.jsx)("p",{className:"text-end mt-3",children:Object(b.jsx)(i.b,{className:"btn btn-primary btn-sm",to:"post-detail/:".concat(e.id),children:"Read More"})}):""]})]},e.id)}))})},u=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(m,{apiurl:e.apiurl})})},O=s.a.createContext({loggedin:sessionStorage.getItem("loggedIn"),setLoggedin:function(){}}),h=function(){var e=Object(a.useContext)(O),t=e.loggedin;e.setLoggedin;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-5",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),"true"==t?Object(b.jsx)(i.b,{className:"nav-link",to:"/admin/dashboard",children:"Dashboard"}):"",Object(b.jsx)("li",{className:"nav-item",children:"true"==t?Object(b.jsx)(i.b,{className:"nav-link",to:"/logout",children:"Logout"}):Object(b.jsx)(i.b,{className:"nav-link",to:"/login",children:"Login"})})]})})]})})})},x=function(e){var t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],n=c[1],r=Object(d.g)().id.replace(":",""),i="".concat(e.apiurl,"posts?id=").concat(r);return Object(a.useEffect)((function(){o.a.get(i).then((function(e){var t=e.data;return n(t)}))}),[]),Object(b.jsx)(b.Fragment,{children:s.map((function(e){return Object(b.jsxs)("article",{className:"card mb-4",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h2",{className:"h4",children:e.title})}),Object(b.jsx)("div",{className:"card-body article-content",children:e.content})]},e.id)}))})},g=c(12),p=c(11),v=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=(t[0],t[1]),s=Object(a.useState)({postTitle:"",postContent:""}),n=Object(l.a)(s,2),r=n[0],i=n[1],j=Object(a.useState)(!1),m=Object(l.a)(j,2),u=m[0],O=m[1],h=function(e){i(Object(p.a)(Object(p.a)({},r),{},Object(g.a)({},e.target.name,e.target.value)))};return u?Object(b.jsx)(d.a,{push:!0,to:{pathname:"/"}}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"mb-5",children:"Add Blog Post Here"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:r.postTitle,content:r.postContent};o.a.post("http://localhost:3000/posts",t).then((function(e){O(!0);var t=e.data;return c(t)}))},children:[Object(b.jsxs)("div",{className:"form-group mb-4",children:[Object(b.jsx)("labe",{children:"Blog title"}),Object(b.jsx)("input",{type:"text",name:"postTitle",className:"form-control",required:!0,onChange:h})]}),Object(b.jsxs)("div",{className:"form-group mb-4",children:[Object(b.jsx)("labe",{children:"Blog content"}),Object(b.jsx)("textarea",{name:"postContent",className:"form-control",required:!0,onChange:h})]}),Object(b.jsx)("p",{className:"text-end",children:Object(b.jsx)("button",{className:"btn btn-info",children:"Submit Post"})})]})]})},f=function(e){var t=Object(a.useState)([]),c=Object(l.a)(t,2),s=(c[0],c[1]),n=Object(d.g)().id.replace(":",""),r=Object(a.useState)(!1),i=Object(l.a)(r,2),j=i[0],m=i[1],u="".concat(e.apiurl,"posts/").concat(n);return Object(a.useEffect)((function(){o.a.delete(u).then((function(e){m(!0);var t=e.data;return s(t)}))}),[]),j?Object(b.jsx)(d.a,{push:!0,to:{pathname:"/"}}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("div",{className:"spinner-border text-danger",role:"status",children:Object(b.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})},N=function(e){var t=Object(a.useContext)(O),c=(t.loggedin,t.setLoggedin),s=Object(a.useState)(!1),n=Object(l.a)(s,2),r=n[0],i=n[1],j=Object(a.useState)({username:"",password:""}),m=Object(l.a)(j,2),u=m[0],h=m[1],x=Object(a.useState)(!1),v=Object(l.a)(x,2),f=v[0],N=v[1],S=Object(a.useState)(""),y=Object(l.a)(S,2),w=y[0],C=y[1],I=function(e){var t=e.target.id;document.getElementById(t).classList.remove("is-invalid"),h(Object(p.a)(Object(p.a)({},u),{},Object(g.a)({},e.target.name,e.target.value)))};return r?Object(b.jsx)(d.a,{push:!0,to:{pathname:"/admin/dashboard"}}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsxs)("h5",{className:"card-header",children:["Login ",Object(b.jsx)("small",{className:"h6",children:"(username: sanjaykumar, password: sanjay123)"})," "]}),Object(b.jsxs)("div",{className:"card-body",children:[f?Object(b.jsx)("div",{className:"alert alert-danger",children:w}):"",Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),u.username&&u.password?(console.log("submitted with the values ".concat(u.username," and ").concat(u.password)),o.a.get("".concat(e.apiurl,"login")).then((function(e){e.data.map((function(e,t){e.username==u.username&&e.password==u.password?(console.log("good to go"),sessionStorage.setItem("loggedIn","true"),sessionStorage.setItem("username",e.name),i(!0),c(sessionStorage.getItem("loggedIn"))):(N(!0),C("Invalid Credentials"))}))}))):(N(!0),C("Please enter username and password")),0==u.username&&document.getElementById("username").classList.add("is-invalid"),0==u.password&&document.getElementById("password").classList.add("is-invalid")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"username",className:"form-label",children:"Username"}),Object(b.jsx)("input",{autoComplete:"off",type:"text",className:"form-control",id:"username","aria-describedby":"usernameHelp",name:"username",onChange:I})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(b.jsx)("input",{autoComplete:"off",type:"password",className:"form-control",id:"password",name:"password",onChange:I})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})]})})})})},S=function(){var e=Object(a.useContext)(O),t=(e.loggedin,e.setLoggedin);sessionStorage.removeItem("loggedIn"),sessionStorage.removeItem("username"),Object(a.useEffect)((function(){t("false")}),[]);return Object(b.jsx)(d.a,{push:!0,to:{pathname:"/"}})},y=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("ul",{className:"list-group",children:[Object(b.jsxs)("li",{className:"list-group-item","aria-current":"true",children:["Dashboard",Object(b.jsx)("ul",{children:Object(b.jsxs)("li",{children:[" ",Object(b.jsx)(i.c,{to:"/admin/dashboard",children:"Home"})]})})]}),Object(b.jsxs)("li",{className:"list-group-item",children:["Posts",Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[" ",Object(b.jsx)(i.c,{to:"/admin/all-posts",children:"All Posts"})]}),Object(b.jsxs)("li",{children:[" ",Object(b.jsx)(i.c,{to:"/admin/add-new-post",children:"Add New Post"})]})]})]})]})})},w=function(){var e=sessionStorage.getItem("username");return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"col-md-9",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:"Dashboard"}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("h2",{children:["Welcome, ",e]})})]})})]})})},C=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"col-md-9",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:"Add New Post"}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)(v,{})})]})})]})})},I=function(e){var t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){o.a.get("".concat(e.apiurl,"posts")).then((function(e){var t=e.data;return n(t)})),console.log("after posts"+s)}),[]),Object(b.jsx)(b.Fragment,{children:s.slice(0).reverse().map((function(e){return Object(b.jsx)("article",{className:"card mb-4",children:Object(b.jsxs)("div",{className:"card-header",children:[Object(b.jsx)("h2",{className:"h4",children:Object(b.jsx)(i.b,{to:"edit-post/:".concat(e.id),children:e.title})}),Object(b.jsx)(i.b,{to:"edit-post/:".concat(e.id),children:" Edit"}),Object(b.jsx)(i.b,{to:"delete-post/:".concat(e.id),children:" Delete"})]})},e.id)}))})},F=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"col-md-9",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:"Add New Post"}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)(I,{apiurl:e.apiurl})})]})})]})})},P=function(e){var t=Object(a.useState)(!1),c=Object(l.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)({}),i=Object(l.a)(r,2),j=i[0],m=i[1],u=Object(a.useState)(),O=Object(l.a)(u,2),h=O[0],x=O[1],v=Object(d.g)().id.replace(":","");console.log(v),console.log(e);Object(a.useEffect)((function(){o.a.get("".concat(e.apiurl,"posts/").concat(v)).then((function(e){var t=e.data;return m(t)}))}),[]);var f=function(e){x(Object(p.a)(Object(p.a)({},h),{},Object(g.a)({},e.target.name,e.target.value)))};return s?Object(b.jsx)(d.a,{push:!0,to:{pathname:"/"}}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"mb-5",children:"Edit Blog Post Here"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log("submitted"),o.a.patch("".concat(e.apiurl,"posts/").concat(v),{title:h.postTitle,content:h.postContent}).then((function(e){n(!0);var t=e.data;return console.log(t),m(t)}))},children:[Object(b.jsxs)("div",{className:"form-group mb-4",children:[Object(b.jsx)("labe",{children:"Blog title"}),Object(b.jsx)("input",{type:"text",name:"postTitle",className:"form-control",required:!0,defaultValue:j.title,onChange:f})]}),Object(b.jsxs)("div",{className:"form-group mb-4",children:[Object(b.jsx)("labe",{children:"Blog content"}),Object(b.jsx)("textarea",{name:"postContent",className:"form-control",required:!0,defaultValue:j.content,onChange:f})]}),Object(b.jsx)("p",{className:"text-end",children:Object(b.jsx)("button",{className:"btn btn-info",children:"Submit Post"})})]})]})},L=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"col-md-9",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:"Edit Post"}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)(P,{apiurl:e.apiurl})})]})})]})})},E=function(){return Object(b.jsx)("div",{className:"card",children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)("h3",{className:"text-center",children:"This page could not be found"})})})};var B=function(){var e=Object(a.useState)(sessionStorage.getItem("loggedIn")),t=Object(l.a)(e,2),c=t[0],s={loggedin:c,setLoggedin:t[1]};console.log(c);var n="";return n="https://my-json-server.typicode.com/sanjaytriumph/mockjson/",Object(b.jsx)(O.Provider,{value:s,children:Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h,{}),Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{exact:!0,path:"/",children:Object(b.jsx)(u,{apiurl:n})}),Object(b.jsx)(d.b,{exact:!0,path:"/post-detail/:id",children:Object(b.jsx)(x,{apiurl:n})}),Object(b.jsx)(d.b,{exact:!0,path:"/add-post",children:Object(b.jsx)(v,{})}),Object(b.jsx)(d.b,{exact:!0,path:"/login",children:Object(b.jsx)(N,{apiurl:n})}),Object(b.jsx)(d.b,{exact:!0,path:"/logout",children:Object(b.jsx)(S,{})}),c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.b,{exact:!0,path:"/admin/dashboard",children:Object(b.jsx)(w,{})}),Object(b.jsx)(d.b,{exact:!0,path:"/admin/add-new-post",children:Object(b.jsx)(C,{})}),Object(b.jsx)(d.b,{exact:!0,path:"/admin/all-posts",children:Object(b.jsx)(F,{apiurl:n})}),Object(b.jsx)(d.b,{exact:!0,path:"/admin/edit-post/:id",children:Object(b.jsx)(L,{apiurl:n})}),Object(b.jsx)(d.b,{exact:!0,path:"/admin/delete-post/:id",children:Object(b.jsx)(f,{apiurl:n})})]}):"",Object(b.jsx)(d.b,{component:E})]})]})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),T()}},[[61,1,2]]]);
//# sourceMappingURL=main.4e3ad972.chunk.js.map