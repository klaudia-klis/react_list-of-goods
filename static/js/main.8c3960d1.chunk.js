(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,i=s(4),o=s.n(i),r=s(5),l=s(6),c=s(8),a=s(7),u=s(1),d=s(2),b=(s(13),s(14),s(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function v(t,e){var s,i,o,r,l,c=e.sortType,a=e.isReversed,d=Object(u.a)(t);if(null===(s=document.getElementById("alphabet-button"))||void 0===s||s.classList.add("is-light"),null===(i=document.getElementById("reverse-button"))||void 0===i||i.classList.add("is-light"),null===(o=document.getElementById("length-button"))||void 0===o||o.classList.add("is-light"),c===n.ALPHABET)null===(r=document.getElementById("alphabet-button"))||void 0===r||r.classList.remove("is-light"),d=Object(u.a)(d).sort((function(t,e){return t.localeCompare(e)}));else if(c===n.LENGTH){var b;null===(b=document.getElementById("length-button"))||void 0===b||b.classList.remove("is-light"),d=Object(u.a)(d).sort((function(t,e){return t.length-e.length}))}a&&(null===(l=document.getElementById("reverse-button"))||void 0===l||l.classList.remove("is-light"),d=Object(u.a)(d).reverse());return console.log(c,a),d}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var g=function(t){Object(c.a)(s,t);var e=Object(a.a)(s);function s(){var t;Object(r.a)(this,s);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:n.NONE},t.reverseOrder=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortAlphabetically=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{id:"alphabet-button",type:"button",className:"button is-info is-light",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(b.jsx)("button",{id:"length-button",type:"button",className:"button is-success is-light",onClick:this.sortByLength,children:"Sort by length"}),Object(b.jsx)("button",{id:"reverse-button",type:"button",className:"button is-warning is-light",onClick:this.reverseOrder,children:"Reverse"}),this.state.isReversed||this.state.sortType!==n.NONE?Object(b.jsx)("button",{id:"reset-button",type:"button",className:"button is-danger is-light",onClick:function(){return t.setState((function(){return{sortType:n.NONE,isReversed:!1}}))},children:"Reset"}):void 0]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:v(h,{sortType:this.state.sortType,isReversed:this.state.isReversed}).map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(d.Component);o.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8c3960d1.chunk.js.map