/** byui-v2.5.4 By Achao github - www.baidu.com */
 ;byui.define("jquery",function(e){"use strict";var o=byui.$,t=function(e){},i='<i class="byui-anim byui-anim-rotate byui-anim-loop byui-icon ">&#xe63e;</i>';t.prototype.load=function(e){var t,l,n,r,c=this,a=0;e=e||{};var f=o(e.elem);if(f[0]){var m=o(e.scrollElem||document),u=e.mb||50,s=!("isAuto"in e)||e.isAuto,v=e.end||"没有更多了",y=e.scrollElem&&e.scrollElem!==document,d="<cite>加载更多</cite>",h=o('<div class="byui-flow-more"><a href="javascript:;">'+d+"</a></div>");f.find(".byui-flow-more")[0]||f.append(h);var p=function(e,i){e=o(e),h.before(e),i=0==i||null,i?h.html(v):h.find("a").html(d),l=i,t=null,n&&n()},g=function(){t=!0,h.find("a").html(i),"function"==typeof e.done&&e.done(++a,p)};if(g(),h.find("a").on("click",function(){o(this);l||t||g()}),e.isLazyimg)var n=c.lazyimg({elem:e.elem+" img",scrollElem:e.scrollElem});return s?(m.on("scroll",function(){var e=o(this),i=e.scrollTop();r&&clearTimeout(r),l||(r=setTimeout(function(){var l=y?e.height():o(window).height(),n=y?e.prop("scrollHeight"):document.documentElement.scrollHeight;n-i-l<=u&&(t||g())},100))}),c):c}},t.prototype.lazyimg=function(e){var t,i=this,l=0;e=e||{};var n=o(e.scrollElem||document),r=e.elem||"img",c=e.scrollElem&&e.scrollElem!==document,a=function(e,o){var t=n.scrollTop(),r=t+o,a=c?function(){return e.offset().top-n.offset().top+t}():e.offset().top;if(a>=t&&a<=r&&!e.attr("src")){var m=e.attr("lay-src");byui.img(m,function(){var o=i.lazyimg.elem.eq(l);e.attr("src",m).removeAttr("lay-src"),o[0]&&f(o),l++})}},f=function(e,t){var f=c?(t||n).height():o(window).height(),m=n.scrollTop(),u=m+f;if(i.lazyimg.elem=o(r),e)a(e,f);else for(var s=0;s<i.lazyimg.elem.length;s++){var v=i.lazyimg.elem.eq(s),y=c?function(){return v.offset().top-n.offset().top+m}():v.offset().top;if(a(v,f),l=s,y>u)break}};if(f(),!t){var m;n.on("scroll",function(){var e=o(this);m&&clearTimeout(m),m=setTimeout(function(){f(null,e)},50)}),t=!0}return f},e("flow",new t)});