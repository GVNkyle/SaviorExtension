!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./",o(o.s=442)}({26:function(e,t,o){"use strict";var n=Object.prototype.hasOwnProperty,r="~";function f(){}function s(e,t,o){this.fn=e,this.context=t,this.once=o||!1}function i(e,t,o,n,f){if("function"!=typeof o)throw new TypeError("The listener must be a function");var i=new s(o,n||e,f),a=r?r+t:t;return e._events[a]?e._events[a].fn?e._events[a]=[e._events[a],i]:e._events[a].push(i):(e._events[a]=i,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new f:delete e._events[t]}function c(){this._events=new f,this._eventsCount=0}Object.create&&(f.prototype=Object.create(null),(new f).__proto__||(r=!1)),c.prototype.eventNames=function(){var e,t,o=[];if(0===this._eventsCount)return o;for(t in e=this._events)n.call(e,t)&&o.push(r?t.slice(1):t);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},c.prototype.listeners=function(e){var t=r?r+e:e,o=this._events[t];if(!o)return[];if(o.fn)return[o.fn];for(var n=0,f=o.length,s=new Array(f);n<f;n++)s[n]=o[n].fn;return s},c.prototype.listenerCount=function(e){var t=r?r+e:e,o=this._events[t];return o?o.fn?1:o.length:0},c.prototype.emit=function(e,t,o,n,f,s){var i=r?r+e:e;if(!this._events[i])return!1;var a,c,u=this._events[i],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,o),!0;case 4:return u.fn.call(u.context,t,o,n),!0;case 5:return u.fn.call(u.context,t,o,n,f),!0;case 6:return u.fn.call(u.context,t,o,n,f,s),!0}for(c=1,a=new Array(d-1);c<d;c++)a[c-1]=arguments[c];u.fn.apply(u.context,a)}else{var p,E=u.length;for(c=0;c<E;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,o);break;case 4:u[c].fn.call(u[c].context,t,o,n);break;default:if(!a)for(p=1,a=new Array(d-1);p<d;p++)a[p-1]=arguments[p];u[c].fn.apply(u[c].context,a)}}return!0},c.prototype.on=function(e,t,o){return i(this,e,t,o,!1)},c.prototype.once=function(e,t,o){return i(this,e,t,o,!0)},c.prototype.removeListener=function(e,t,o,n){var f=r?r+e:e;if(!this._events[f])return this;if(!t)return a(this,f),this;var s=this._events[f];if(s.fn)s.fn!==t||n&&!s.once||o&&s.context!==o||a(this,f);else{for(var i=0,c=[],u=s.length;i<u;i++)(s[i].fn!==t||n&&!s[i].once||o&&s[i].context!==o)&&c.push(s[i]);c.length?this._events[f]=1===c.length?c[0]:c:a(this,f)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new f,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=r,c.EventEmitter=c,e.exports=c},44:function(e,t,o){"use strict";(function(e){var t=o(26);e.EE||(e.EE=new t.EventEmitter),e.IS_CONTENT_SCRIPT=!0,e.savior_referrer=location.href,e.tab_url=location.href}).call(this,o(9))},442:function(e,t,o){e.exports=o(443)},443:function(e,t,o){"use strict";o.r(t);o(44);"chrome-extension:"!==location.protocol&&setTimeout(()=>{var e;EE.emit("dom-scanner.destroy"),EE.emit("widget-controller.destroy"),EE.off("ads-skipper.load"),EE.off("SERP.yserp_log"),EE.off("should_promote_serp"),EE.off("promote_serp_result"),EE.off("get_promote_serp_result"),EE.off("youtube_get_info_result"),EE.off("youtube_set_mpd_info"),EE.off("background_request_result"),EE.off("utils.send_message_result"),EE.off("media-provider.cache.hit"),EE.off("media-provider.cache.miss"),EE.off("media-provider.cache.get"),EE.off("media-provider.cache.put"),EE.off("dom-scanner.load"),EE.off("dom-scanner.refresh"),EE.off("dom-scanner.destroy"),EE.off("dom-scanner.node-changed"),EE.off("inner_pip"),EE.off("pip.on_state_change"),EE.off("message.background.send"),EE.off("message.popup.send"),EE.off("message.received"),EE.off("message.content-script.send"),EE.off("message.background.send"),EE.off("onboarding-popup.init"),EE.off("onboarding-popup.get_shadow_dom"),EE.off("onboarding-popup.shadow_dom_result"),EE.off("onboarding-popup.onboard_track_result"),EE.off("onboarding-popup.show_popup"),EE.off("onboarding-popup.refresh_popup"),EE.off("widget.show_playnow"),EE.off("widget.download_canceled"),EE.off("widget.downloads.get.success"),EE.off("widget.shadow_dom_result"),EE.off("widget.forceUpdate"),EE.off("widget.node-changed"),EE.off("widget.get_shadow_dom"),EE.off("widget.request_matched"),EE.off("widget.toast.open"),EE.off("widget.load"),EE.off("widget.downloads.get"),EE.off("widget.onboard-yaa.activate"),EE.off("widget.onboard-yaa.deactivate"),EE.off("widget.updateMedia"),EE.off("widget-controller.destroy"),EE.off("download"),EE.off("download_list.download_result"),EE.off("preferred-quality-level.changed"),EE.off("popup.downloads.get.success"),EE.off("mobile-transfer-panel.loadQrCode"),null===(e=document.querySelector("savior-host"))||void 0===e||e.remove()},0)},9:function(e,t){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"==typeof window&&(o=window)}e.exports=o}});