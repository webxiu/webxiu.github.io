(this["webpackJsonphooks-admin"]=this["webpackJsonphooks-admin"]||[]).push([[1],{75:function(e,a,t){"use strict";t.r(a);var n=t(373),r=t(374),l=t(1),c=t.n(l),s=function(e){var a=e.title,t=e.questions,l=function(e){return e.replace(/\uff1a/g,"\uff1a<br />").replace(/\u3002/gi,"\u3002<br />")};return c.a.createElement(n.b,{header:c.a.createElement("h2",null,a),bordered:!0,dataSource:t,renderItem:function(e){return c.a.createElement(n.b.Item,null,c.a.createElement("div",{className:"flex"},c.a.createElement(r.a.Text,{mark:!0},"[",e.number,"]"),c.a.createElement("div",{style:{fontSize:14}},c.a.createElement("h4",null,e.title),c.a.createElement("h3",{className:"exp_desc"},"\u7b54\u6848"),c.a.createElement("div",{className:"answer",dangerouslySetInnerHTML:{__html:l(Array.isArray(e.answer)?e.answer[0]:e.answer)}}),e.explanation?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"exp_desc"},"\u9898\u89e3"),c.a.createElement("div",{className:"explanation",dangerouslySetInnerHTML:{__html:l(e.explanation)}})):null)))}})},i=t(375),m=t(377),u=function(e){var a=e.title,t=e.questions;return c.a.createElement(n.b,{header:c.a.createElement("h2",null,a),bordered:!0,dataSource:t,renderItem:function(e){return c.a.createElement(n.b.Item,null,c.a.createElement("div",{className:"flex"},c.a.createElement(r.a.Text,{mark:!0},"[",e.number,"]"),c.a.createElement("div",{style:{fontSize:14}},c.a.createElement("h4",null,e.title.replace("\uff08","\uff08 "+e.answer[0])),c.a.createElement("div",null,c.a.createElement(i.a.Group,{value:e.answer[0]},c.a.createElement(m.b,{direction:"vertical"},e.options.map((function(a){return c.a.createElement(i.a,{key:a.value,value:a.value,style:{color:a.value===e.answer[0]?"#18cf86":""}},a.value," ",a.text)}))))),e.explanation?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"exp_desc"},"\u9898\u89e3"),c.a.createElement("div",{className:"explanation",dangerouslySetInnerHTML:{__html:(a=e.explanation,a.replace(/\uff1a/g,"\uff1a<br />").replace(/\u3002/g,"\u3002<br />"))}})):null)));var a}})},o=t(45),d=t(2);a.default=function(){var e=Object(d.i)();return{chioce:c.a.createElement(u,{title:o.a[e.id].title,questions:o.a[e.id].questions}),answer:c.a.createElement(s,{title:o.a.title,questions:o.a[e.id].questions})}[o.a[e.id].cate]}}}]);
//# sourceMappingURL=chapter.a895f580.chunk.js.map