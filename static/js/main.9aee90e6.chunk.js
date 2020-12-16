(this["webpackJsonppersonal-expenses"]=this["webpackJsonppersonal-expenses"]||[]).push([[0],{51:function(t,e,r){t.exports={App:"App_App__3HxXK"}},56:function(t,e,r){t.exports={ShoppingList:"ShoppingList_ShoppingList__2gAi6"}},57:function(t,e,r){t.exports={ShoppingItem:"ShoppingItem_ShoppingItem__3TJ9H"}},58:function(t,e,r){t.exports={Total:"Total_Total__1Z7xn"}},72:function(t,e,r){},90:function(t,e,r){"use strict";r.r(e);var c=r(4),a=r(0),n=r(16),s=r.n(n),i=r(18),o=r(19),u=r(50),l=r(13),p=r(8),d="add",j="total",b="clear",h="list",O="error",v={purchases:[],total:"",totalIsActive:!1,errors:[]},f={listIsActive:!0},x=Object(o.c)({purchases:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0,r=t.purchases,c=e.payload;switch(e.type){case d:var a={date:c.date,purchase:{price:c.price,currency:c.currency,title:c.title}},n=function(t){return r.map((function(e){return e.date===t.date})).includes(!0)?s(t):i(t)},s=function(t){var e=t.date,c=t.purchase;return r.map((function(t){return t.date===e?Object(p.a)(Object(p.a)({},t),{},{purchases:[].concat(Object(l.a)(t.purchases),[c])}):t}))},i=function(t){var e=t.date,c=t.purchase;return[].concat(Object(l.a)(r),[{date:e,purchases:[c]}])};return Object(p.a)(Object(p.a)({},t),{},{purchases:n(a),errors:[]});case b:return Object(p.a)(Object(p.a)({},t),{},{purchases:r.filter((function(t){return t.date!==c.date})),errors:[]});case j:var o=e.payload,u=o.selectedCurrency,h=o.fixerData,f={PLN:0,USD:0,EUR:0};r.map((function(t){return t.purchases.map((function(t){return f[t.currency]+=+t.price}))}));var x=0,m=h.rates;for(var y in m)x+=m[u]/m[y]*f[y];return Object(p.a)(Object(p.a)({},t),{},{total:"".concat(Math.ceil(100*x)/100," ").concat(u),totalIsActive:!0,errors:[]});case O:return Object(p.a)(Object(p.a)({},t),{},{errors:Object(l.a)(e.payload)});default:return Object(p.a)(Object(p.a)({},t),{},{totalIsActive:!1})}},listIsActive:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return Object(p.a)(Object(p.a)({},t),{},{listIsActive:!t.listIsActive});default:return t}}}),m=Object(o.d)(x,Object(o.a)(u.a));window.store=m;var y=m,g=(r(72),r(51)),A=r.n(g),I=r(31),S=r(111),w=r(112),_=r(110),D=r(113),L=r(109),N=r(108),T=r(40),C=function(t){if(!Date.parse(t))return!1;return/\b\d{4}-\d{2}-\d{2}\b/.test(t)},E=function(t){return/[A-Z]{3}/.test(t)},U=function(t){var e=[],r=t.split(" "),c=Object(T.a)(r),a=c[0],n=c.slice(1);switch(a){case"add":var s=Object(T.a)(n),i=s[0],o=s[1],u=s[2],p=s.slice(3);return C(i)||(e=[].concat(Object(l.a)(e),["date"])),/\d+\.?\d*/.test(o)||(e=[].concat(Object(l.a)(e),["price"])),E(u)||(e=[].concat(Object(l.a)(e),["currency"])),function(t){return/([A-z]+\s?)+/.test(t)}(p.join(" "))||(e=[].concat(Object(l.a)(e),["title"])),{action:a,date:Date.parse(i),price:o,currency:u,title:p.join(" "),errors:e};case"total":var d=Object(I.a)(n,1)[0];return E(d)||(e=[].concat(Object(l.a)(e),["currency"])),{action:a,currency:d,errors:e};case"clear":var j=Object(I.a)(n,1)[0];return C(j)||(e=[].concat(Object(l.a)(e),["date"])),{action:a,date:Date.parse(j),errors:e};case"list":return{action:a};default:return{errors:e=["wrong command"]}}},k=r(52),J=r.n(k);function R(t){var e=U(t);if(e.errors&&0!==e.errors.length)return{type:O,payload:e.errors};switch(e.action){case d:return{type:d,payload:e};case b:return{type:b,payload:e};case j:return function(t){return t((r=e.currency,function(t){J.a.get("http://data.fixer.io/api/latest",{params:{access_key:"a0a7bd9637b9a7b7a4e3b7914007b073",base:"EUR",symbols:"PLN,USD,EUR"}}).then((function(e){var c=e.data;return t({type:j,payload:{selectedCurrency:r,fixerData:c}})}))}));var r};case h:return{type:h}}}var F=Object(i.b)((function(t){return{errors:t.purchases.errors}}),(function(t){return{onSubmit:function(e){return t(R(e))}}}))((function(t){var e=t.onSubmit,r=t.errors,n=Object(a.useState)(""),s=Object(I.a)(n,2),i=s[0],o=s[1],u=function(t){t.preventDefault(),e(i)};return Object(c.jsx)("form",{style:{width:"100%"},onSubmit:u,children:Object(c.jsxs)(S.a,{error:0!==r.length,variant:"outlined",style:{width:"100%"},children:[Object(c.jsx)(w.a,{htmlFor:"outlined-adornment",children:"Command"}),Object(c.jsx)(_.a,{error:0!==r.length,id:"outlined-adornment",value:i,onChange:function(t){o(t.target.value)},endAdornment:Object(c.jsx)(D.a,{position:"end",children:Object(c.jsx)(L.a,{variant:"contained",color:"primary",onClick:u,children:"submit"})}),labelWidth:75}),0!==r.length&&Object(c.jsxs)(N.a,{id:"outlined-weight-helper-text",children:["Errors: ",r.join(", ")]})]})})})),H=r(56),M=r.n(H),P=r(57),Z=r.n(P),z=function(t){var e=new Date(t);return"".concat(e.getFullYear(),"-").concat(("0"+(e.getMonth()+1)).slice(-2),"-").concat(e.getDate())},B=function(t){var e=t.purchases;return Object(c.jsxs)("div",{className:Z.a.ShoppingItem,children:[Object(c.jsx)("h3",{children:z(e.date)}),Object(c.jsx)("ul",{children:e.purchases.map((function(t,e){return Object(c.jsx)("li",{children:"".concat(t.title," ").concat(t.price," ").concat(t.currency)},e)}))})]})};var K=Object(i.b)((function(t){return{list:t.purchases.purchases}}))((function(t){var e=t.list;return Object(c.jsx)("ul",{className:M.a.ShoppingList,children:e&&e.map((function(t,e){return Object(c.jsx)("li",{children:Object(c.jsx)(B,{purchases:t})},e)}))})})),W=r(58),X=r.n(W),Y=function(t){var e=t.total;return Object(c.jsx)("div",{className:X.a.Total,children:Object(c.jsx)("span",{children:"Total: ".concat(e)})})};var q=Object(i.b)((function(t){return{listIsActive:t.listIsActive.listIsActive,totalIsActive:t.purchases.totalIsActive,total:t.purchases.total}}))((function(t){var e=t.listIsActive,r=t.totalIsActive,a=t.total;return Object(c.jsxs)("div",{className:A.a.App,children:[Object(c.jsx)(F,{}),e&&Object(c.jsx)(K,{}),r&&Object(c.jsx)(Y,{total:a})]})}));s.a.render(Object(c.jsx)(i.a,{store:y,children:Object(c.jsx)(q,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.9aee90e6.chunk.js.map