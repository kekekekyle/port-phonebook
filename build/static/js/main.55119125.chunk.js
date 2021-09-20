(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var s=t(2),a=t.n(s),c=t(15),r=t.n(c),u=t(6),o=t(3),i=t(4),d=t.n(i),m="/api/persons",l=function(){return d.a.get(m).then((function(e){return e.data}))},f=function(e){return d.a.post(m,e).then((function(e){return e.data}))},j=function(e,n){return d.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return d.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},h=t(0),g=function(e){var n=e.message;return null===n.message?null:Object(h.jsx)("div",{className:n.messageType,children:n.message})},p=function(e){var n=e.newFilter,t=e.handleFilterChange;return Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{value:n,onChange:t})]})},O=function(e){var n=e.addPerson,t=e.newName,s=e.handleNameChange,a=e.newNumber,c=e.handleNumberChange;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:t,onChange:s})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:a,onChange:c})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},v=function(e){var n=e.persons,t=e.deletePerson;return Object(h.jsx)("div",{children:n.map((function(e){return Object(h.jsxs)("div",{children:[e.name," ",e.number,Object(h.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]},e.name)}))})},x=function(){var e=Object(s.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(s.useState)([]),r=Object(o.a)(c,2),i=r[0],d=r[1],m=Object(s.useState)(""),x=Object(o.a)(m,2),T=x[0],w=x[1],y=Object(s.useState)(""),C=Object(o.a)(y,2),N=C[0],S=C[1],k=Object(s.useState)(""),P=Object(o.a)(k,2),F=P[0],D=P[1],E=Object(s.useState)({message:null,messageType:""}),J=Object(o.a)(E,2),L=J[0],A=J[1];Object(s.useEffect)((function(){l().then((function(e){a(e),d(e)}))}),[]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(g,{message:L}),Object(h.jsx)(p,{newFilter:F,handleFilterChange:function(e){var n=e.target.value,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));D(n),d(s)}}),Object(h.jsx)("h2",{children:"add a new"}),Object(h.jsx)(O,{addPerson:function(e){if(e.preventDefault(),t.some((function(e){return e.name===T}))){if(window.confirm("".concat(T," is already added to the phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===T})),s=Object(u.a)(Object(u.a)({},n),{},{number:N});j(n.id,s).then((function(e){a(t.map((function(t){return t.id!==n.id?t:e}))),d(t.map((function(t){return t.id!==n.id?t:e}))),A({message:"Updated ".concat(n.name),messageType:"success"}),setTimeout((function(){A({message:null,messageType:""})}),3e3),w(""),S(""),D("")})).catch((function(e){A({message:e.response.data.error,messageType:"error"}),setTimeout((function(){A({message:null,messageType:""})}),3e3)}))}}else f({name:T,number:N}).then((function(e){a(t.concat(e)),d(t.concat(e)),A({message:"Added ".concat(T),messageType:"success"}),setTimeout((function(){A({message:null,messageType:""})}),3e3),w(""),S(""),D("")})).catch((function(e){A({message:e.response.data.error,messageType:"error"}),setTimeout((function(){A({message:null,messageType:""})}),3e3)}))},newName:T,newNumber:N,handleNameChange:function(e){w(e.target.value)},handleNumberChange:function(e){S(e.target.value)}}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(v,{persons:i,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&b(e).then((function(s){a(t.filter((function(n){return n.id!==e}))),d(t.filter((function(n){return n.id!==e}))),A({message:"Deleted ".concat(n.name),messageType:"success"}),setTimeout((function(){A({message:null,messageType:""})}),3e3),w(""),S(""),D("")})).catch((function(n){console.log(n.response.data),a(t.filter((function(n){return n.id!==e}))),d(t.filter((function(n){return n.id!==e}))),A({message:n.response.data.error,messageType:"error"}),setTimeout((function(){A({message:null,messageType:""})}),3e3),w(""),S(""),D("")}))}})]})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.55119125.chunk.js.map