(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(3),s=n.n(r),o=n(4),c=n(5),a=n(7),i=n(6),l=n(1),h=n.n(l),u=n(0),d=function(t){var e=t.goods;return Object(u.jsx)("ul",{className:"goods",children:e.map((function(t){return Object(u.jsx)("li",{children:t},t)}))})},g=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={goods:[].concat(g),started:!1,reversed:!1,sortBy:"default",lengthLimit:1,lengthOptions:Object.keys(Array(10).fill(0))},t.startApp=function(){t.setState({started:!0})},t.reset=function(){t.setState({reversed:!1,sortBy:"default",lengthLimit:1})},t.reverse=function(){t.setState((function(t){return{reversed:!t.reversed}}))},t.sortByAlpha=function(){t.setState({sortBy:"alpha"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.onLengthChange=function(e){t.setState({lengthLimit:+e.target.value})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.started,r=t.reversed,s=t.sortBy,o=t.lengthLimit,c=t.lengthOptions,a=e.filter((function(t){return t.length>=o}));switch(s){case"alpha":a.sort((function(t,e){return t.localeCompare(e)}));break;case"length":a.sort((function(t,e){return t.length-e.length}))}return r&&a.reverse(),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Goods"}),n?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{goods:a}),Object(u.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"}),Object(u.jsx)("button",{type:"button",onClick:this.reverse,children:"Reverse"}),Object(u.jsx)("button",{type:"button",onClick:this.sortByAlpha,children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(u.jsx)("select",{name:"length",id:"length",value:o,onChange:this.onLengthChange,children:c.map((function(t){return Object(u.jsx)("option",{value:+t+1,children:+t+1})}))})]}):Object(u.jsx)("button",{type:"button",onClick:this.startApp,children:"Start"})]})}}]),n}(h.a.Component),j=b;s.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d9f91f28.chunk.js.map