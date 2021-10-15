(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{808:function(a,t,s){"use strict";s.r(t);var n=s(25),v=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"重学前端学习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重学前端学习"}},[a._v("#")]),a._v(" 重学前端学习")]),a._v(" "),s("h3",{attrs:{id:"建立知识架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立知识架构"}},[a._v("#")]),a._v(" 建立知识架构")]),a._v(" "),s("p",[a._v("前端知识结构")]),a._v(" "),s("ul",[s("li",[a._v("文法\n"),s("ul",[s("li",[a._v("词法")]),a._v(" "),s("li",[a._v("语法")])])]),a._v(" "),s("li",[a._v("语义")]),a._v(" "),s("li",[a._v("运行时\n"),s("ul",[s("li",[a._v("类型")]),a._v(" "),s("li",[a._v("执行过程")])])])]),a._v(" "),s("p",[a._v("“用规定的文法，去表达特定语义，最终操作运行时”")]),a._v(" "),s("p",[s("strong",[a._v("程序 = 算法 + 数据结构")])]),a._v(" "),s("p",[s("strong",[a._v("对运行时来说，类型就是数据结构，执行过程就是算法")])]),a._v(" "),s("p",[a._v("词法中有各种直接量、关键字、运算符，语法和语义则是表达式、语句、函数、对象、模块，类型则包含了对象、数字、字符串等......")]),a._v(" "),s("h3",{attrs:{id:"_05-javascript类型-关于类型-有哪些你不知道的细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_05-javascript类型-关于类型-有哪些你不知道的细节"}},[a._v("#")]),a._v(" 05-JavaScript类型：关于类型，有哪些你不知道的细节")]),a._v(" "),s("p",[a._v("问题：")]),a._v(" "),s("ul",[s("li",[a._v("为什么有的编程规范要求用void 0代替undefined？")]),a._v(" "),s("li",[a._v("字符串有最大长度吗？")]),a._v(" "),s("li",[a._v("0.1 + 0.2不是等于0.3么？为什么JavaScript里不是这样的？")]),a._v(" "),s("li",[a._v("ES6新加入的Symbol是个什么东西？")]),a._v(" "),s("li",[a._v("为什么给对象添加的方法能用在基本类型上？")])]),a._v(" "),s("blockquote",[s("p",[a._v("运行时类型是代码实际执行过程中我们用到的类型。所有的类型数据都会属于7个类型之一。从变量、参数、返回值到表达式中间结果，任何JavaScript代码运行过程中产生的数据，都具有运行时类型")])]),a._v(" "),s("p",[a._v("1.为什么有的编程规范要求用void 0代替undefined？")]),a._v(" "),s("p",[a._v("Undefined 类型表示为定义，它的类型只有一个值，就是 undefined。任何比那里在赋值前是 Undefined类型，值为 undefined，一般我们可以用全局变量undefined（就是名为undefined的这个变量）来表示这个值，或者void运算来把任一表达式变成undefined值。")]),a._v(" "),s("p",[a._v("但是javascript中的undefined是一个变量，而并非一个关键字，这是javascript语言公认的设计失误之一，所以为了避免无意被篡改，建议void(0)来获取undefined值")]),a._v(" "),s("p",[a._v("undefined和null有一定的表意差别，null表示的是："),s("strong",[a._v("定义了但是为空")]),a._v(" 。所以实际编程时，一般把变量赋值为undefined，这样可以保证所以值为undefined的遍历，都是从未赋值的自然状态")]),a._v(" "),s("p",[a._v("Null类型也是一个值，就是null，它的语义表示控制，与undefined不同，，null是JavaScript关键字，所有在任何代码中，你都可以放心用null关键字来获取null值")]),a._v(" "),s("p",[a._v("2.我们来看看字符串是否有最大长度。")]),a._v(" "),s("p",[a._v("2^53 - 1")]),a._v(" "),s("p",[a._v("JavaScript中的Number类型有 18437736874454810627(即2^64-2^53+3) 个值")]),a._v(" "),s("p",[a._v("3.为什么在JavaScript中，0.1+0.2不能=0.3：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("loh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// false")]),a._v("\n")])])]),s("p",[a._v("因为浮点数运算的精度问题导致左右结果相差微小的值")]),a._v(" "),s("p",[a._v("一般用JavaScript提供的最小精度值")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("abs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<=")]),a._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("EPSILON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n")])])]),s("h3",{attrs:{id:"symbol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[a._v("#")]),a._v(" Symbol")]),a._v(" "),s("p",[a._v("symbol是ES6中引入的新类型，它是一切非字符串的对象key的集合，在ES6规范中，整个对象系统被用Symbol重塑")]),a._v(" "),s("h3",{attrs:{id:"object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[a._v("#")]),a._v(" Object")]),a._v(" "),s("p",[a._v("Object是JavaScript中最复杂的类型，也是JavaScript的核心机制之一。Object表示对象的意思，它是一切有形和无形物体的总称")]),a._v(" "),s("h3",{attrs:{id:"javascipt-对象的特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascipt-对象的特征"}},[a._v("#")]),a._v(" JavaScipt 对象的特征")]),a._v(" "),s("ul",[s("li",[a._v("对象具有唯一标识性：即使完全相同的两个对象，也并非同一对象")]),a._v(" "),s("li",[a._v("对象有状态：对象具有状态，同一对象可能处于不同状态之下")]),a._v(" "),s("li",[a._v("对象具有行为：即对象的状态，因为它的行为产生变迁")])]),a._v(" "),s("p",[a._v("对象具有唯一性")]),a._v(" "),s("p",[a._v("一般来说，各种语言的对象唯一标识性都是用内存地址来体现的，对象具有唯一标识的内存地址，所以具有唯一的标识")]),a._v(" "),s("p",[a._v("在JavaScript中，对象的状态和行为其实都被抽象为了属性")]),a._v(" "),s("p",[s("strong",[a._v("JavaScript中对象具有的特定是：对象具有高度的动态性")])]),a._v(" "),s("p",[a._v("动态语言")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" o "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1, 2 ")]),a._v("\n")])])]),s("p",[a._v("能在对象定义后，再往对象上加状态和行为，Java则不行，因为他是静态的")]),a._v(" "),s("h4",{attrs:{id:"javascript-对象的两类属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-对象的两类属性"}},[a._v("#")]),a._v(" JavaScript 对象的两类属性")])])}),[],!1,null,null,null);t.default=v.exports}}]);