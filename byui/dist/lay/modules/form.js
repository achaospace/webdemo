/** byui-v2.5.4 By Achao github - www.baidu.com */
 ;byui.define("layer",function(e){"use strict";var t=byui.$,i=byui.layer,n=byui.hint(),a=byui.device(),r="form",l=".byui-form",s="byui-this",o="byui-hide",c="byui-disabled",u=function(){this.config={verify:{required:[/[\S]+/,"必填项不能为空"],phone:[/^1\d{10}$/,"请输入正确的手机号"],email:[/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,"邮箱格式不正确"],url:[/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/,"链接格式不正确"],number:function(e){if(!e||isNaN(e))return"只能填写数字"},date:[/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/,"日期格式不正确"],identity:[/(^\d{15}$)|(^\d{17}(x|X|\d)$)/,"请输入正确的身份证号"]}}};u.prototype.set=function(e){var i=this;return t.extend(!0,i.config,e),i},u.prototype.verify=function(e){var i=this;return t.extend(!0,i.config.verify,e),i},u.prototype.on=function(e,t){return byui.onevent.call(this,r,e,t)},u.prototype.val=function(e,i){var n=t(l+'[lay-filter="'+e+'"]');n.each(function(e,n){var a=t(this);byui.each(i,function(e,t){var i,n=a.find('[name="'+e+'"]');n[0]&&(i=n[0].type,"checkbox"===i?n[0].checked=t:"radio"===i?n.each(function(){this.value==t&&(this.checked=!0)}):n.val(t))})}),f.render(null,e)},u.prototype.render=function(e,i){var a=this,u=t(l+function(){return i?'[lay-filter="'+i+'"]':""}()),d={select:function(){var e,i="请选择",n="byui-form-select",a="byui-select-title",l="byui-select-none",d="",f=u.find("select"),v=function(i,r){t(i.target).parent().hasClass(a)&&!r||(t("."+n).removeClass(n+"ed "+n+"up"),e&&d&&e.val(d)),e=null},y=function(i,u,f){var y,p=t(this),b=i.find("."+a),m=b.find("input"),k=i.find("dl"),x=k.children("dd"),g=this.selectedIndex;if(!u){var C=function(){var e=i.offset().top+i.outerHeight()+5-h.scrollTop(),t=k.outerHeight();g=p[0].selectedIndex,i.addClass(n+"ed"),x.removeClass(o),y=null,x.eq(g).addClass(s).siblings().removeClass(s),e+t>h.height()&&e>=t&&i.addClass(n+"up"),T()},w=function(e){i.removeClass(n+"ed "+n+"up"),m.blur(),y=null,e||$(m.val(),function(e){var i=p[0].selectedIndex;e&&(d=t(p[0].options[i]).html(),0===i&&d===m.attr("placeholder")&&(d=""),m.val(d||""))})},T=function(){var e=k.children("dd."+s);if(e[0]){var t=e.position().top,i=k.height(),n=e.height();t>i&&k.scrollTop(t+k.scrollTop()-i+n-5),t<0&&k.scrollTop(t+k.scrollTop()-5)}};b.on("click",function(e){i.hasClass(n+"ed")?w():(v(e,!0),C()),k.find("."+l).remove()}),b.find(".byui-edge").on("click",function(){m.focus()}),m.on("keyup",function(e){var t=e.keyCode;9===t&&C()}).on("keydown",function(e){var t=e.keyCode;9===t&&w();var i=function(t,n){var a,r;e.preventDefault();var l=function(){var e=k.children("dd."+s);if(k.children("dd."+o)[0]&&"next"===t){var i=k.children("dd:not(."+o+",."+c+")"),a=i.eq(0).index();if(a>=0&&a<e.index()&&!i.hasClass(s))return i.eq(0).prev()[0]?i.eq(0).prev():k.children(":last")}return n&&n[0]?n:y&&y[0]?y:e}();return r=l[t](),a=l[t]("dd:not(."+o+")"),r[0]?(y=l[t](),a[0]&&!a.hasClass(c)||!y[0]?(a.addClass(s).siblings().removeClass(s),void T()):i(t,y)):y=null};38===t&&i("prev"),40===t&&i("next"),13===t&&(e.preventDefault(),k.children("dd."+s).trigger("click"))});var $=function(e,i,n){var a=0;byui.each(x,function(){var i=t(this),r=i.text(),l=r.indexOf(e)===-1;(""===e||"blur"===n?e!==r:l)&&a++,"keyup"===n&&i[l?"addClass":"removeClass"](o)});var r=a===x.length;return i(r),r},q=function(e){var t=this.value,i=e.keyCode;return 9!==i&&13!==i&&37!==i&&38!==i&&39!==i&&40!==i&&($(t,function(e){e?k.find("."+l)[0]||k.append('<p class="'+l+'">无匹配项</p>'):k.find("."+l).remove()},"keyup"),""===t&&k.find("."+l).remove(),void T())};f&&m.on("keyup",q).on("blur",function(i){var n=p[0].selectedIndex;e=m,d=t(p[0].options[n]).html(),0===n&&d===m.attr("placeholder")&&(d=""),setTimeout(function(){$(m.val(),function(e){d||m.val("")},"blur")},200)}),x.on("click",function(){var e=t(this),n=e.attr("lay-value"),a=p.attr("lay-filter");return!e.hasClass(c)&&(e.hasClass("byui-select-tips")?m.val(""):(m.val(e.text()),e.addClass(s)),e.siblings().removeClass(s),p.val(n).removeClass("byui-form-danger"),byui.event.call(this,r,"select("+a+")",{elem:p[0],value:n,othis:i}),w(!0),!1)}),i.find("dl>dt").on("click",function(e){return!1}),t(document).off("click",v).on("click",v)}};f.each(function(e,r){var l=t(this),o=l.next("."+n),u=this.disabled,d=r.value,f=t(r.options[r.selectedIndex]),v=r.options[0];if("string"==typeof l.attr("lay-ignore"))return l.show();var h="string"==typeof l.attr("lay-search"),p=v?v.value?i:v.innerHTML||i:i,b=t(['<div class="'+(h?"":"byui-unselect ")+n,(u?" byui-select-disabled":"")+'">','<div class="'+a+'">','<input type="text" placeholder="'+p+'" '+('value="'+(d?f.html():"")+'"')+(h?"":" readonly")+' class="byui-input'+(h?"":" byui-unselect")+(u?" "+c:"")+'">','<i class="byui-edge"></i></div>','<dl class="byui-anim byui-anim-upbit'+(l.find("optgroup")[0]?" byui-select-group":"")+'">',function(e){var t=[];return byui.each(e,function(e,n){0!==e||n.value?"optgroup"===n.tagName.toLowerCase()?t.push("<dt>"+n.label+"</dt>"):t.push('<dd lay-value="'+n.value+'" class="'+(d===n.value?s:"")+(n.disabled?" "+c:"")+'">'+n.innerHTML+"</dd>"):t.push('<dd lay-value="" class="byui-select-tips">'+(n.innerHTML||i)+"</dd>")}),0===t.length&&t.push('<dd lay-value="" class="'+c+'">没有选项</dd>'),t.join("")}(l.find("*"))+"</dl>","</div>"].join(""));o[0]&&o.remove(),l.after(b),y.call(this,b,u,h)})},checkbox:function(){var e={checkbox:["byui-form-checkbox","byui-form-checked","checkbox"],_switch:["byui-form-switch","byui-form-onswitch","switch"]},i=u.find("input[type=checkbox]"),n=function(e,i){var n=t(this);e.on("click",function(){var t=n.attr("lay-filter"),a=(n.attr("lay-text")||"").split("|");n[0].disabled||(n[0].checked?(n[0].checked=!1,e.removeClass(i[1]).find("em").text(a[1])):(n[0].checked=!0,e.addClass(i[1]).find("em").text(a[0])),byui.event.call(n[0],r,i[2]+"("+t+")",{elem:n[0],value:n[0].value,othis:e}))})};i.each(function(i,a){var r=t(this),l=r.attr("lay-skin"),s=(r.attr("lay-text")||"").split("|"),o=this.disabled;"switch"===l&&(l="_"+l);var u=e[l]||e.checkbox;if("string"==typeof r.attr("lay-ignore"))return r.show();var d=r.next("."+u[0]),f=t(['<div class="byui-unselect '+u[0],a.checked?" "+u[1]:"",o?" byui-checkbox-disbaled "+c:"",'"',l?' lay-skin="'+l+'"':"",">",function(){var e=a.title.replace(/\s/g,""),t={checkbox:[e?"<span>"+a.title+"</span>":"",'<i class="byui-icon byui-icon-ok"></i>'].join(""),_switch:"<em>"+((a.checked?s[0]:s[1])||"")+"</em><i></i>"};return t[l]||t.checkbox}(),"</div>"].join(""));d[0]&&d.remove(),r.after(f),n.call(this,f,u)})},radio:function(){var e="byui-form-radio",i=["&#xe643;","&#xe63f;"],n=u.find("input[type=radio]"),a=function(n){var a=t(this),s="byui-anim-scaleSpring";n.on("click",function(){var o=a[0].name,c=a.parents(l),u=a.attr("lay-filter"),d=c.find("input[name="+o.replace(/(\.|#|\[|\])/g,"\\$1")+"]");a[0].disabled||(byui.each(d,function(){var n=t(this).next("."+e);this.checked=!1,n.removeClass(e+"ed"),n.find(".byui-icon").removeClass(s).html(i[1])}),a[0].checked=!0,n.addClass(e+"ed"),n.find(".byui-icon").addClass(s).html(i[0]),byui.event.call(a[0],r,"radio("+u+")",{elem:a[0],value:a[0].value,othis:n}))})};n.each(function(n,r){var l=t(this),s=l.next("."+e),o=this.disabled;if("string"==typeof l.attr("lay-ignore"))return l.show();s[0]&&s.remove();var u=t(['<div class="byui-unselect '+e,r.checked?" "+e+"ed":"",(o?" byui-radio-disbaled "+c:"")+'">','<i class="byui-anim byui-icon">'+i[r.checked?0:1]+"</i>","<div>"+function(){var e=r.title||"";return"string"==typeof l.next().attr("lay-radio")&&(e=l.next().html(),l.next().remove()),e}()+"</div>","</div>"].join(""));l.after(u),a.call(this,u)})}};return e?d[e]?d[e]():n.error("不支持的"+e+"表单渲染"):byui.each(d,function(e,t){t()}),a};var d=function(){var e=t(this),n=f.config.verify,s=null,o="byui-form-danger",c={},u=e.parents(l),d=u.find("*[lay-verify]"),v=e.parents("form")[0],h=u.find("input,select,textarea"),y=e.attr("lay-filter");if(byui.each(d,function(e,r){var l=t(this),c=l.attr("lay-verify").split("|"),u=l.attr("lay-verType"),d=l.val();if(l.removeClass(o),byui.each(c,function(e,t){var c,f="",v="function"==typeof n[t];if(n[t]){var c=v?f=n[t](d,r):!n[t][0].test(d);if(f=f||n[t][1],"required"===t&&(f=l.attr("lay-reqText")||f),c)return"tips"===u?i.tips(f,function(){return"string"==typeof l.attr("lay-ignore")||"select"!==r.tagName.toLowerCase()&&!/^checkbox|radio$/.test(r.type)?l:l.next()}(),{tips:1}):"alert"===u?i.alert(f,{title:"提示",shadeClose:!0}):i.msg(f,{icon:5,shift:6}),a.android||a.ios||setTimeout(function(){r.focus()},7),l.addClass(o),s=!0}}),s)return s}),s)return!1;var p={};return byui.each(h,function(e,t){if(t.name=(t.name||"").replace(/^\s*|\s*&/,""),t.name){if(/^.*\[\]$/.test(t.name)){var i=t.name.match(/^(.*)\[\]$/g)[0];p[i]=0|p[i],t.name=t.name.replace(/^(.*)\[\]$/,"$1["+p[i]++ +"]")}/^checkbox|radio$/.test(t.type)&&!t.checked||(c[t.name]=t.value)}}),byui.event.call(this,r,"submit("+y+")",{elem:this,form:v,field:c})},f=new u,v=t(document),h=t(window);f.render(),v.on("reset",l,function(){var e=t(this).attr("lay-filter");setTimeout(function(){f.render(null,e)},50)}),v.on("submit",l,d).on("click","*[lay-submit]",d),e(r,f)});