webpackJsonp([298,366],{571:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(51),s(50)),o=t(p),c=s(1),e=t(c),u=s(2);t(u);n.exports={content:[["p","\u7b80\u5355\u7684 checkbox\u3002"]],meta:{order:0,title:"\u57fa\u672c\u7528\u6cd5",filename:"components/checkbox/demo/basic.md",id:"components-checkbox-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Checkbox <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`checked = </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>checked<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Checkbox</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Checkbox<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Checkbox</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("checked = "+n.target.checked)}return e["default"].createElement(o["default"],{onChange:n},"Checkbox")}}}});