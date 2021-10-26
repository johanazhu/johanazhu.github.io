# 个人网站

版式参考：[bytetopia](https://dongxing.xin/)

样式参考：[GitHub](https://github.com/)

网站图标来源：[favicon.io](https://favicon.io/)

部署服务器：[GitHub.Page](https://pages.github.com/)

SEO 优化：只针对（只会）title、keyword、description 进行描写

Lighthouse 跑分，查出 "Links to cross-origin destinations are unsafe"
解决方案：[Links to cross-origin destinations are unsafe](https://web.dev/external-anchors-use-rel-noopener/)
在有 target="\_blank" 的地方加上 rel="noreferrer"
