(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{31:function(e,n,t){e.exports={recipe:"recipe_recipe__2hR5l",image:"recipe_image__3FD6m"}},59:function(e,n,t){},61:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(11),r=t.n(i),s=(t(59),t(35)),l=t(34),o=t.n(l),j=t(40),u=t(32),b=(t(61),t(10)),p=function(){return Object(b.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-warning",children:Object(b.jsxs)("a",{class:"navbar-brand   mx-auto font-weight-bold",href:"#",children:[Object(b.jsx)("i",{class:"fa fa-2x fa-cutlery","aria-hidden":"true"})," AMALFI GRAND RECIPE ",Object(b.jsx)("i",{class:"fa fa-2x fa-cutlery","aria-hidden":"true"})]})})},d=(t(63),t(110)),h=t(102),m=t(109),f=t(108),x=t(31),O=t.n(x),g=function(e){return Object(b.jsxs)("div",{className:O.a.recipe,children:[Object(b.jsx)("h1",{className:O.a.recipe,children:e.title}),Object(b.jsxs)("ol",{children:[Object(b.jsx)("h3",{children:"INGREDIENTS"}),e.ingredients.map((function(e){return Object(b.jsx)("li",{children:e.text})}))]}),Object(b.jsx)("img",{className:O.a.image,src:e.img,alt:"Recipe Menu"}),Object(b.jsxs)("p",{children:[" Calories : ",e.calories]})]})},v=[{name:"Mutton"},{name:"Fish"},{name:"Paneer"},{name:"ice-cream"},{name:"Crab"},{name:"Snake"},{name:"Juice"},{name:"Milk"},{name:"Mango"},{name:"Grapes"},{name:"Pig"}],k=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)(""),r=Object(u.a)(i,2),l=r[0],x=r[1],O=Object(a.useState)("chicken"),k=Object(u.a)(O,2),y=k[0],N=k[1],S=function(){var e=Object(j.a)(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(y,"&app_id=").concat("7222c80c","&app_key=").concat("8c647c61dc8bb77e9331b1eaa2819eb8\t"));case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,console.log(t),c(t.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){S(),console.log("UseEffect invoked...")}),[y]);var E=function(e){console.log("handle search invoking...."),x(e.target.value)};return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsx)(h.a,{fixed:!0,className:"container",children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d.a,{className:"ac",id:"multiple-limit-tags",options:v,getOptionLabel:function(e){return e.name},style:{width:"100%"},renderInput:function(e){return Object(b.jsx)(m.a,Object(s.a)(Object(s.a)({},e),{},{onChange:E,onSelect:E,value:l,label:"Search Recipe......",type:"text",variant:"outlined"}))}}),Object(b.jsx)(f.a,{onClick:function(e){console.log("handle query invoked..."),e.preventDefault(),N(l),"Enter"===e&&N(l)},variant:"contained",size:"large",color:"primary",children:"Search "}),t.map((function(e){return Object(b.jsx)(g,{title:e.recipe.label,img:e.recipe.image,calories:e.recipe.calories,ingredients:e.recipe.ingredients})}))]})})]})};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.74c402bf.chunk.js.map