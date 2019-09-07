/** byui-v2.5.4 By Achao github - https://github.com/achaospace/webdemo */
 ;byui.define("jquery",function(e){"use strict";var i=byui.jquery,t={config:{},index:byui.slider?byui.slider.index+1e4:0,set:function(e){var t=this;return t.config=i.extend({},t.config,e),t},on:function(e,i){return byui.onevent.call(this,a,e,i)}},n=function(){var e=this,i=e.config;return{setValue:function(i,t){return e.slide("set",i,t||0)},config:i}},a="slider",l="byui-disabled",s="byui-slider",r="byui-slider-bar",o="byui-slider-wrap",u="byui-slider-wrap-btn",d="byui-slider-tips",v="byui-slider-input",c="byui-slider-input-txt",m="byui-slider-input-btn",p="byui-slider-hover",f=function(e){var n=this;n.index=++t.index,n.config=i.extend({},n.config,t.config,e),n.render()};f.prototype.config={type:"default",min:0,max:100,value:0,step:1,showstep:!1,tips:!0,input:!1,range:!1,height:200,disabled:!1,theme:"#009688"},f.prototype.render=function(){var e=this,t=e.config;if(t.step<1&&(t.step=1),t.max<t.min&&(t.max=t.min+t.step),t.range){t.value="object"==typeof t.value?t.value:[t.min,t.value];var n=Math.min(t.value[0],t.value[1]),a=Math.max(t.value[0],t.value[1]);t.value[0]=n>t.min?n:t.min,t.value[1]=a>t.min?a:t.min,t.value[0]=t.value[0]>t.max?t.max:t.value[0],t.value[1]=t.value[1]>t.max?t.max:t.value[1];var r=Math.floor((t.value[0]-t.min)/(t.max-t.min)*100),v=Math.floor((t.value[1]-t.min)/(t.max-t.min)*100),m=v-r+"%";r+="%",v+="%"}else{"object"==typeof t.value&&(t.value=Math.min.apply(null,t.value)),t.value<t.min&&(t.value=t.min),t.value>t.max&&(t.value=t.max);var m=Math.floor((t.value-t.min)/(t.max-t.min)*100)+"%"}var p=t.disabled?"#c2c2c2":t.theme,f='<div class="byui-slider '+("vertical"===t.type?"byui-slider-vertical":"")+'">'+(t.tips?'<div class="byui-slider-tips"></div>':"")+'<div class="byui-slider-bar" style="background:'+p+"; "+("vertical"===t.type?"height":"width")+":"+m+";"+("vertical"===t.type?"bottom":"left")+":"+(r||0)+';"></div><div class="byui-slider-wrap" style="'+("vertical"===t.type?"bottom":"left")+":"+(r||m)+';"><div class="byui-slider-wrap-btn" style="border: 2px solid '+p+';"></div></div>'+(t.range?'<div class="byui-slider-wrap" style="'+("vertical"===t.type?"bottom":"left")+":"+v+';"><div class="byui-slider-wrap-btn" style="border: 2px solid '+p+';"></div></div>':"")+"</div>",h=i(t.elem),y=h.next("."+s);if(y[0]&&y.remove(),e.elemTemp=i(f),t.range?(e.elemTemp.find("."+o).eq(0).data("value",t.value[0]),e.elemTemp.find("."+o).eq(1).data("value",t.value[1])):e.elemTemp.find("."+o).data("value",t.value),h.html(e.elemTemp),"vertical"===t.type&&e.elemTemp.height(t.height+"px"),t.showstep){for(var b=(t.max-t.min)/t.step,g="",x=1;x<b+1;x++){var T=100*x/b;T<100&&(g+='<div class="byui-slider-step" style="'+("vertical"===t.type?"bottom":"left")+":"+T+'%"></div>')}e.elemTemp.append(g)}if(t.input&&!t.range){var w=i('<div class="byui-slider-input byui-input"><div class="byui-slider-input-txt"><input type="text" class="byui-input"></div><div class="byui-slider-input-btn"><i class="byui-icon byui-icon-up"></i><i class="byui-icon byui-icon-down"></i></div></div>');h.css("position","relative"),h.append(w),h.find("."+c).children("input").val(t.value),"vertical"===t.type?w.css({left:0,top:-48}):e.elemTemp.css("margin-right",w.outerWidth()+15)}t.disabled?(e.elemTemp.addClass(l),e.elemTemp.find("."+u).addClass(l)):e.slide(),e.elemTemp.find("."+u).on("mouseover",function(){var n="vertical"===t.type?t.height:e.elemTemp[0].offsetWidth,a=e.elemTemp.find("."+o),l="vertical"===t.type?n-i(this).parent()[0].offsetTop-a.height():i(this).parent()[0].offsetLeft,s=l/n*100,r=i(this).parent().data("value"),u=t.setTips?t.setTips(r):r;e.elemTemp.find("."+d).html(u),"vertical"===t.type?e.elemTemp.find("."+d).css({bottom:s+"%","margin-bottom":"20px",display:"inline-block"}):e.elemTemp.find("."+d).css({left:s+"%",display:"inline-block"})}).on("mouseout",function(){e.elemTemp.find("."+d).css("display","none")})},f.prototype.slide=function(e,t,n){var a=this,l=a.config,s=a.elemTemp,f=function(){return"vertical"===l.type?l.height:s[0].offsetWidth},h=s.find("."+o),y=s.next("."+v),b=y.children("."+c).children("input").val(),g=100/((l.max-l.min)/Math.ceil(l.step)),x=function(e,i){e=Math.ceil(e)*g>100?Math.ceil(e)*g:Math.round(e)*g,e=e>100?100:e,h.eq(i).css("vertical"===l.type?"bottom":"left",e+"%");var t=T(h[0].offsetLeft),n=l.range?T(h[1].offsetLeft):0;"vertical"===l.type?(s.find("."+d).css({bottom:e+"%","margin-bottom":"20px"}),t=T(f()-h[0].offsetTop-h.height()),n=l.range?T(f()-h[1].offsetTop-h.height()):0):s.find("."+d).css("left",e+"%"),t=t>100?100:t,n=n>100?100:n;var a=Math.min(t,n),o=Math.abs(t-n);"vertical"===l.type?s.find("."+r).css({height:o+"%",bottom:a+"%"}):s.find("."+r).css({width:o+"%",left:a+"%"});var u=l.min+Math.round((l.max-l.min)*e/100);if(b=u,y.children("."+c).children("input").val(b),h.eq(i).data("value",u),u=l.setTips?l.setTips(u):u,s.find("."+d).html(u),l.range){var v=[h.eq(0).data("value"),h.eq(1).data("value")];v[0]>v[1]&&v.reverse()}l.change&&l.change(l.range?v:u)},T=function(e){var i=e/f()*100/g,t=Math.round(i)*g;return e==f()&&(t=Math.ceil(i)*g),t},w=i(['<div class="byui-auxiliar-moving" id="LAY-slider-moving"></div'].join("")),M=function(e,t){var n=function(){t&&t(),w.remove()};i("#LAY-slider-moving")[0]||i("body").append(w),w.on("mousemove",e),w.on("mouseup",n).on("mouseleave",n)};if("set"===e)return x(t,n);s.find("."+u).each(function(e){var t=i(this);t.on("mousedown",function(i){i=i||window.event;var n=t.parent()[0].offsetLeft,a=i.clientX;"vertical"===l.type&&(n=f()-t.parent()[0].offsetTop-h.height(),a=i.clientY);var r=function(i){i=i||window.event;var r=n+("vertical"===l.type?a-i.clientY:i.clientX-a);r<0&&(r=0),r>f()&&(r=f());var o=r/f()*100/g;x(o,e),t.addClass(p),s.find("."+d).show(),i.preventDefault()},o=function(){t.removeClass(p),s.find("."+d).hide()};M(r,o)})}),s.on("click",function(e){var t=i("."+u);if(!t.is(event.target)&&0===t.has(event.target).length&&t.length){var n,a="vertical"===l.type?f()-e.clientY+i(this).offset().top:e.clientX-i(this).offset().left;a<0&&(a=0),a>f()&&(a=f());var s=a/f()*100/g;n=l.range?"vertical"===l.type?Math.abs(a-parseInt(i(h[0]).css("bottom")))>Math.abs(a-parseInt(i(h[1]).css("bottom")))?1:0:Math.abs(a-h[0].offsetLeft)>Math.abs(a-h[1].offsetLeft)?1:0:0,x(s,n),e.preventDefault()}}),y.hover(function(){var e=i(this);e.children("."+m).fadeIn("fast")},function(){var e=i(this);e.children("."+m).fadeOut("fast")}),y.children("."+m).children("i").each(function(e){i(this).on("click",function(){b=1==e?b-l.step<l.min?l.min:Number(b)-l.step:Number(b)+l.step>l.max?l.max:Number(b)+l.step;var i=(b-l.min)/(l.max-l.min)*100/g;x(i,0)})});var q=function(){var e=this.value;e=isNaN(e)?0:e,e=e<l.min?l.min:e,e=e>l.max?l.max:e,this.value=e;var i=(e-l.min)/(l.max-l.min)*100/g;x(i,0)};y.children("."+c).children("input").on("keydown",function(e){13===e.keyCode&&(e.preventDefault(),q.call(this))}).on("change",q)},f.prototype.events=function(){var e=this;e.config},t.render=function(e){var i=new f(e);return n.call(i)},e(a,t)});