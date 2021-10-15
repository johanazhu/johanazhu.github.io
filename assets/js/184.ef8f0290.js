(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{635:function(t,r,e){"use strict";e.r(r);var a=e(25),v=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"图片懒加载解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载解决方案"}},[t._v("#")]),t._v(" 图片懒加载解决方案")]),t._v(" "),e("h2",{attrs:{id:"为什么使用图片懒加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用图片懒加载"}},[t._v("#")]),t._v(" 为什么使用图片懒加载？")]),t._v(" "),e("p",[e("strong",[t._v("为了性能")]),t._v("。如果你要访问")]),t._v(" "),e("p",[t._v("我们在讲 "),e("RouterLink",{attrs:{to:"/Browser/页面生命周期.html"}},[t._v("浏览器的页面生命周期")]),t._v(" 中曾经说过：")],1),t._v(" "),e("blockquote",[e("p",[t._v("DOMContentLoaded：浏览器已完全加载完 HTML，并构建了 DOM 树，但像图片、样式表之类的外部资源可能尚未加载完成")]),t._v(" "),e("p",[t._v("load：浏览器不仅加载完成了 HTML，还加载完所有的外部资源：图片、字体、样式等")])]),t._v(" "),e("p",[t._v("我们要让图片小，一是压缩图片，还有些方法如换图片格式，比如 Google 提出的 WebP，")]),t._v(" "),e("p",[t._v("还有例如图片懒加载")]),t._v(" "),e("p",[t._v("一个页面如果一开始就加载整个站的图片无疑会花很多时间，那么我们通过一些手段，用 placeholder 来代替图片，或者用小图来代替，等")]),t._v(" "),e("p",[t._v("视图内看到的图片可以第一时间显示，没看到的先不用展示")]),t._v(" "),e("p",[t._v("图片的加载权重比较高，会让页面卡顿")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/09/13/vW7DyaxABizjuNr.jpg",alt:"resource-priority"}})]),t._v(" "),e("h2",{attrs:{id:"最简单的实现-以小换大"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最简单的实现-以小换大"}},[t._v("#")]),t._v(" 最简单的实现——以小换大")]),t._v(" "),e("p",[t._v("最开始是小图片或 placeholder 图，等图片加载完毕后换成大图")]),t._v(" "),e("p",[t._v("小图所花的时间少，马上就能显示出来，然后通过 JS 显示原来的图")]),t._v(" "),e("h2",{attrs:{id:"监听图片高度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#监听图片高度"}},[t._v("#")]),t._v(" 监听图片高度")]),t._v(" "),e("p",[t._v("最开始展示页面范围内的图片，然后往下滑再逐步展示图片")]),t._v(" "),e("p",[t._v("在这里也要做节流")]),t._v(" "),e("p",[t._v("主要技术点：节流 + 当前元素 offsetTop")]),t._v(" "),e("h2",{attrs:{id:"intersection-observer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intersection-observer"}},[t._v("#")]),t._v(" Intersection Observer")]),t._v(" "),e("p",[t._v("它是什么")]),t._v(" "),e("p",[t._v("它的语法是怎么样")]),t._v(" "),e("p",[t._v("怎么用这个实现图片懒加载")]),t._v(" "),e("h2",{attrs:{id:"以实养战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#以实养战"}},[t._v("#")]),t._v(" 以实养战")]),t._v(" "),e("p",[t._v("我们已经用 JS 来实现了图片懒加载，但是这还不够。因为现在的项目基本基于 React/Vue 框架实现，我们来用 React 来实现一下图片懒加载")]),t._v(" "),e("h3",{attrs:{id:"图片-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片-api"}},[t._v("#")]),t._v(" 图片 API")]),t._v(" "),e("p",[t._v("申请 unsplash API 的使用，")]),t._v(" "),e("h3",{attrs:{id:"自定义-hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义-hooks"}},[t._v("#")]),t._v(" 自定义 Hooks")]),t._v(" "),e("p",[t._v("自定义 Intersection Observer  Hooks")]),t._v(" "),e("h3",{attrs:{id:"参考佳作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考佳作"}},[t._v("#")]),t._v(" 参考佳作")]),t._v(" "),e("p",[t._v("看别人怎么做的？ medium 如何加载图片")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("直到图片进入可是范围才加载图片")])]),t._v(" "),e("li",[e("p",[t._v("然后，加载一张模糊的缩略图")])]),t._v(" "),e("li",[e("p",[t._v("然后，加载全尺寸图片，并替代调缩略图")])])]),t._v(" "),e("p",[t._v("Github 地址")]),t._v(" "),e("p",[t._v("线上 demo")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000017795499",target:"_blank",rel:"noopener noreferrer"}},[t._v("懒加载的3种实现方式"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://hateonion.me/posts/19jan30/",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片懒加载从简单到复杂"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("https://codepen.io/jojobo/pen/QWEzYvY")])])}),[],!1,null,null,null);r.default=v.exports}}]);