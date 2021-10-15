(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{829:function(e,r,t){"use strict";t.r(r);var a=t(25),n=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"微信网页开发之常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微信网页开发之常见问题"}},[e._v("#")]),e._v(" 微信网页开发之常见问题")]),e._v(" "),t("p",[e._v("这里记录笔者常遇到的问题，有些坑真的让笔者痛不欲生，如果你尝过明明一样的配置，一个页面可以，另一个页面不可以你就能明白我的意思了...")]),e._v(" "),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),t("h3",{attrs:{id:"_40048-invalid-url-domain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_40048-invalid-url-domain"}},[e._v("#")]),e._v(" 40048,invalid url domain")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#66",target:"_blank",rel:"noopener noreferrer"}},[e._v("微信文档附录5-常见错误及解决方法"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2021/06/30/lrAxdMK1Ic48smh.png",alt:"invalid url domain"}})]),e._v(" "),t("p",[e._v("用测试号调试，有几点要注意：")]),e._v(" "),t("ol",[t("li",[e._v("本地调式时，自己需要弄个测试号，要注意 ip 一致，本地需要开启 wxCentralControl（中控服务），以及 wxsdk 服务（包括网页授权服务+微信 jssdk 服务），其中的 appid 和 appsecret 写成自己的测试号")]),e._v(" "),t("li",[e._v("本地调用服务器上的 wxsdk 是调不通的")]),e._v(" "),t("li",[e._v("JS 接口安全域名、授权回调页面域名需要一致，才能调通\n"),t("ol",[t("li",[e._v("为什么，JS 接口安全域名是服务于 JSSDK，JSSDK 中有分享、发朋友圈等功能，它和你的域名一致才能成功")]),e._v(" "),t("li",[e._v("授权回调域名，主要是通过 Oauth2.0 来实现，就是你一个网页要获取我App（微信）的信息，有两种模式，一是 snsapi_base，用户无感知，二是 snsapi_userinfo ，手动授权")])])])]),e._v(" "),t("p",[t("strong",[e._v("总而言之，如果你要调通，必须三者一致")])]),e._v(" "),t("h3",{attrs:{id:"微信分享报这个错-the-permission-value-is-offline-verifying"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微信分享报这个错-the-permission-value-is-offline-verifying"}},[e._v("#")]),e._v(" 微信分享报这个错：the permission value is offline verifying?")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/00066cd7ee4a385c645c9be1856000?highLine=the%2520permission%2520value%2520is%2520offline%2520verifying%253F",target:"_blank",rel:"noopener noreferrer"}},[e._v("苹果小部分手机设置分享弹出 the permission value is offline ver？"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"我的单页面应用配置错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我的单页面应用配置错误"}},[e._v("#")]),e._v(" 我的单页面应用配置错误")]),e._v(" "),t("p",[e._v("俺找到原因了我找到我的原因了，点击菜单链接配置为"),t("a",{attrs:{href:"http://xxx.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("xxx.com"),t("OutboundLink")],1),e._v("。而我的项目首页是"),t("a",{attrs:{href:"http://xxx.com/mall",target:"_blank",rel:"noopener noreferrer"}},[e._v("xxx.com/mall"),t("OutboundLink")],1),e._v("，框架帮我重定向到/mall，但是微信link还是停留在/，所以微信分享的时候link不对，这也是为什么我在开发者工具中ok，但是部分同事在手机端里有时候不行的原因\n配置文件里改成 xxx.com/mall 即可")]),e._v(" "),t("h3",{attrs:{id:"微信保存图片只能-长按保存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微信保存图片只能-长按保存"}},[e._v("#")]),e._v(" 微信保存图片只能“长按保存”")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/260941705",target:"_blank",rel:"noopener noreferrer"}},[e._v("从微信H5点击保存图片说起"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("保存图片的效果点击 “保存图片”按钮，   如果是app中的H5，就调用app给的方法  如果是微信中，不能使用这样的方法，"),t("strong",[e._v("只能长按保存")])]),e._v(" "),t("p",[e._v("别人的经验：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/yongheng2016/blog/issues/78",target:"_blank",rel:"noopener noreferrer"}},[e._v("微信分享 总结（SPA/history模式）"),t("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=n.exports}}]);