(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{546:function(e,s,o){"use strict";o.r(s);var r=o(25),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"docker-compose"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[e._v("#")]),e._v(" docker-compose")]),e._v(" "),o("p",[e._v("服务（"),o("code",[e._v("service")]),e._v("）：一个应用的容器，实际上可以包括若干相同镜像的容器实例")]),e._v(" "),o("p",[e._v("项目（"),o("code",[e._v("project")]),e._v("）：由一组关联的应用容器组成的一个完整业务单元，在 "),o("code",[e._v("docker-compose.yml")]),e._v(" 文件中定义")]),e._v(" "),o("p",[o("code",[e._v("compose")]),e._v("  的默认管理对象是项目，通过子命令对项目的一组容器进行便捷的生命周期管理")]),e._v(" "),o("p",[e._v("创建"),o("code",[e._v("docker-compose.yml")]),e._v(" 文件")]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("version: "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"3"')]),e._v("\nservices:\n\n   db:\n     image: mysql:5.7\n     volumes:\n       - db_data:/var/lib/mysql\n     restart: always\n     environment:\n       MYSQL_ROOT_PASSWORD: somewordpress\n       MYSQL_DATABASE: wordpress\n       MYSQL_USER: wordpress\n       MYSQL_PASSWORD: wordpress\n\n   wordpress:\n     depends_on:\n       - db\n     image: wordpress:latest\n     ports:\n       - "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"5555:80"')]),e._v("\n     restart: always\n     environment:\n       WORDPRESS_DB_HOST: db:3306\n       WORDPRESS_DB_USER: wordpress\n       WORDPRESS_DB_PASSWORD: wordpress\nvolumes:\n  db_data:\n")])])]),o("h2",{attrs:{id:"构建并运行项目"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#构建并运行项目"}},[e._v("#")]),e._v(" 构建并运行项目")]),e._v(" "),o("p",[e._v("运行 "),o("code",[e._v("docker-compose up -d")]),e._v(" Compose 就会拉取镜像再创建我们所需要的镜像，然后启动 "),o("code",[e._v("wordpress")]),e._v(" 和数据库容器。 接着浏览器访问 "),o("code",[e._v("127.0.0.1:5555")]),e._v(" 端口就能看到 "),o("code",[e._v("WordPress")]),e._v(" 安装界面了。")]),e._v(" "),o("h3",{attrs:{id:"什么是docker-compose"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#什么是docker-compose"}},[e._v("#")]),e._v(" 什么是docker-compose")]),e._v(" "),o("p",[e._v("通过 docker-compose 用户可以很容器地用一个配置文件定义一个多容器的应用")]),e._v(" "),o("p",[e._v("docker-compose 解决了容器与容器之间如何管理编排的问题")])])}),[],!1,null,null,null);s.default=t.exports}}]);