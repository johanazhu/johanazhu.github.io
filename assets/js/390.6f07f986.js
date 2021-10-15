(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{849:function(t,e,r){"use strict";r.r(e);var a=r(25),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"微信小程序开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序开发"}},[t._v("#")]),t._v(" 微信小程序开发")]),t._v(" "),r("p",[t._v("小程序再架构方面最大的特点是采用了双线程的开发模式，隔离了 JS 逻辑和 UI 渲染。小程序的渲染层和逻辑层分别由 2 个线程管理：渲染层的界面使用了 WebView 进行渲染，逻辑层采用 JsCore 线程运行 JS 脚本")]),t._v(" "),r("p",[t._v("逻辑层：创建一个单独的线程去执行 JavaScript，在这个环境下执行的都是有关小程序业务逻辑的代码；")]),t._v(" "),r("p",[t._v("渲染层：界面渲染相关的任务全都在 WebView 线程里执行，通过逻辑层代码去控制渲染哪些界面。一个小程序存在多个界面，所以渲染层存在多个 WebView 线程")]),t._v(" "),r("p",[t._v("通信：这两个渲染的通信会经由微信客户端做中转，逻辑层发送网络请求也经由 Native 转发，小程序的通信模型如下图所示：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/09/28/ZRA2KnthIVfDUaB.png",alt:"小程序双线程架构"}})]),t._v(" "),r("h2",{attrs:{id:"双线程通信"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#双线程通信"}},[t._v("#")]),t._v(" 双线程通信")]),t._v(" "),r("p",[t._v("用 JS 对象模拟 DOM 树 ——> 比较两颗虚拟 DOM 树的差异 ——> 把差异应用到真正的 DOM 树上")]),t._v(" "),r("p",[t._v("如图所示：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/09/28/sQwWnqmECUp5a4H.png",alt:"双线程通信"}})]),t._v(" "),r("ol",[r("li",[t._v("在渲染层把 WXML 转化成对应的 JS 对象")]),t._v(" "),r("li",[t._v("在逻辑层发生数据变更的时候，通过宿主环境提供的 setData 方法把数据从逻辑层传递到 Native，再转发到逻辑层")]),t._v(" "),r("li",[t._v("经过对比前后差异，把差异应用在原来的 DOM 树上，更新界面")])]),t._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://godbasin.github.io/2018/09/02/wxapp-technology-architecture/",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序的底层框架"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000019131399",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅谈小程序运行机制"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/h562ECyLiQWkD3JpWXZg-g",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信小程序基础架构浅析"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=n.exports}}]);