!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(9),o=n(10);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e,n){var r=n(11);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){t.exports=n(8)},function(t,e){function n(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,l,"next",t)}function l(t){n(a,o,i,c,l,"throw",t)}c(void 0)})}}},function(t,e,n){var r=n(12);function o(e,n,i){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=o=Reflect.get:t.exports=o=function(t,e,n){var o=r(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}},o(e,n,i||e)}t.exports=o},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=s;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===s)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var l=u(t,e,n);if("normal"===l.type){if(r=n.done?d:f,l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=d,n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s="suspendedStart",f="suspendedYield",h="executing",d="completed",p={};function v(){}function y(){}function m(){}var _={};_[i]=function(){return this};var b=Object.getPrototypeOf,g=b&&b(b(S([])));g&&g!==n&&r.call(g,i)&&(_=g);var w=m.prototype=v.prototype=Object.create(_);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(n,o){function i(){return new Promise(function(e,i){!function e(n,o,i,a){var c=u(t[n],t,o);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){l.value=t,i(l)},function(t){return e("throw",t,i,a)})}a(c.arg)}(n,o,e,i)})}return e=e?e.then(i,i):i()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=w.constructor=m,m.constructor=y,m[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,r,o){var i=new k(l(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(w),w[c]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e,n){var r=n(2);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}},function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r),i=n(6),a=n.n(i),c=n(0),l=n.n(c),u=n(1),s=n.n(u),f=n(3),h=n.n(f),d=n(2),p=n.n(d),v=n(4),y=n.n(v),m=function(){function t(){l()(this,t)}return s()(t,[{key:"on",value:function(t,e){this._el.addEventListener(t,e)}},{key:"updateBalance",value:function(t){this._balance=t}}]),t}(),_=function(t){function e(t){var n,r=t.element,o=t.data;return l()(this,e),(n=h()(this,p()(e).call(this)))._el=r,n._render(o),n._el.addEventListener("click",function(t){return n._onRowClick(t)}),n}return y()(e,t),s()(e,[{key:"_onRowClick",value:function(t){var e=t.target.closest("tbody tr");if(e){var n=e.dataset.id;if(n){var r=new CustomEvent("rowClick",{detail:n});this._el.dispatchEvent(r)}}}},{key:"update",value:function(t){this._render(t)}},{key:"_render",value:function(t){this._el.innerHTML='\n      <table class="data-table highlight">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Symbol</th>\n            <th>Rank</th>\n            <th>Price</th>\n          </tr>\n        </thead>\n        <tbody>\n          '.concat(t.map(function(t){return'\n              <tr data-id="'.concat(t.id,'">\n                <td>').concat(t.name,"</td>\n                <td>").concat(t.symbol,"</td>\n                <td>").concat(t.rank,"</td>\n                <td>").concat(t.price,"</td>\n              </tr>\n            ")}).join(""),"\n        </tbody>\n      </table>\n    ")}}]),e}(m),b=500,g=function(t){function e(t){var n,r,o,i,a=t.element;return l()(this,e),(n=h()(this,p()(e).call(this)))._el=a,n._render(),n._el.addEventListener("input",(r=function(t){var e=t.target.value,r=new CustomEvent("filter",{detail:e.toLowerCase()});n._el.dispatchEvent(r)},o=b,function(){for(var t=this,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];clearTimeout(i),i=setTimeout(function(){r.apply(t,n)},o)})),n}return y()(e,t),s()(e,[{key:"_render",value:function(){this._el.innerHTML='\n      <div class="input-field col s4">\n        <input type="text">\n        <label>Filter by name</label>\n      </div>\n    '}}]),e}(m);var w=n(7),x=n.n(w),k=function(t){function e(t){var n,r=t.element,o=t.balance,i=t.items,a=void 0===i?{}:i;return l()(this,e),(n=h()(this,p()(e).call(this)))._el=r,n._balance=o,n._items=a,n._portfolioWorth=0,n._render(),n}return y()(e,t),s()(e,[{key:"updatePortfolio",value:function(t,e){var n=t.id,r=t.name,o=t.price,i=this._items[n]||{id:n,name:r,price:o,amount:0,totalPrice:0};i.amount+=e,i.totalPrice=i.amount*i.price,this._items[n]=i,this._portfolioWorth=Object.values(this._items).reduce(function(t,e){return t+e.totalPrice},0),this._render()}},{key:"updateBalance",value:function(t){x()(p()(e.prototype),"updateBalance",this).call(this,t),this._render()}},{key:"_render",value:function(){var t=Object.values(this._items);this._el.innerHTML='\n      <ul class="collapsible portfolio">\n        <li>\n          <p class="collapsible-header">\n            Current balance: $'.concat(this._balance,".\n            Portfolio Worth: $").concat(this._portfolioWorth,'\n          </p>\n          <div class="collapsible-body">\n            <table class="highlight striped">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Amount</th>\n                  <th>Price</th>\n                  <th>Total</th>\n                </tr>\n              </thead>\n              <tbody>\n                ').concat(t.map(function(t){return"\n                  <tr data-id='".concat(t.id,"'>\n                    <td>").concat(t.name,"</td>\n                    <td>").concat(t.amount,"</td>\n                    <td>").concat(t.price,"</td>\n                    <td>").concat(t.totalPrice,"</td>\n                  </tr>\n                ")}).join(""),"\n              </tbody>\n            </table>\n          </div>\n        </li>\n      </ul>\n    ");var e=this._el.querySelectorAll(".collapsible");M.Collapsible.init(e)}}]),e}(m),L=function(t){function e(t){var n,r=t.element,o=t.balance;return l()(this,e),(n=h()(this,p()(e).call(this)))._el=r,n._balance=o,n._el.addEventListener("keydown",function(t){var e,n=t.target,r=t.key;n.closest("#amount")&&(e=r,!isNaN(parseFloat(e))&&isFinite(e)||"Backspace"===r||"."===r||t.preventDefault())}),n._el.addEventListener("input",function(t){var e=+t.target.value;n._updateDisplay(e)}),n._el.addEventListener("click",function(t){return n._buy(t)}),n}return y()(e,t),s()(e,[{key:"trade",value:function(t){this._currentItem=t,this._total=0*t.price,this._render(t)}},{key:"_updateDisplay",value:function(t){this._totalEl=this._el.querySelector("#item-total"),this._totalEl.textContent=this._currentItem.price*t}},{key:"_buy",value:function(t){t.preventDefault();var e=t.target;if(e.closest(".modal-close"))if("cancel"!==e.dataset.widget){var n=this._el.querySelector("#amount");if("buy"===e.dataset.widget&&this._validateInput(n)){var r=new CustomEvent("buy",{detail:{item:this._currentItem,amount:+n.value}});this._el.dispatchEvent(r),this.closeWidget()}}else this.closeWidget()}},{key:"_validateInput",value:function(t){return this._currentItem.price*t.value<=this._balance||(t.style.color="red",!1)}},{key:"closeWidget",value:function(){this._el.querySelector("#modal").classList.remove("open")}},{key:"_render",value:function(t){this._el.innerHTML='\n      <div id="modal" class="modal open">\n        <div class="modal-content">\n          <h4>Buying '.concat(t.name,":</h4>\n          <p>\n            Current price: ").concat(t.price,'. Total: <span id="item-total">').concat(this._total,'</span>\n          </p>\n          <div class="row">\n            <form class="col s12">\n              <div class="input-field col s4">\n                <input id="amount" type="number">\n                <label for="amount">Amount</label>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class="modal-footer">\n          <a href="#!" class="modal-close waves-effect waves-teal btn-flat" data-widget="buy">Buy</a>\n          <a href="#!" class="modal-close waves-effect waves-teal btn-flat" data-widget="cancel">Cancel</a>\n        </div>\n      </div>\n    ');var e=this._el.querySelectorAll(".collapsible");M.Collapsible.init(e)}}]),e}(m);var E,P,O={setRequest:function(t){return fetch(t).then(function(t){return t.json()})},setMultipleRequests:function(t){var e=t.map(function(t){return O.setRequest(t)});return Promise.all(e)}},S="https://api.coinpaprika.com/v1/coins",j={getCurrencies:(P=a()(o.a.mark(function t(){var e,n,r,i=arguments;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:{filter:""},n=e.filter,t.next=4,O.setRequest(S);case 4:return r=(r=t.sent).filter(function(t){return t.name.toLowerCase().includes(n)&&t.is_active}).slice(0,10),t.abrupt("return",j.getCoinsPrice(r));case 7:case"end":return t.stop()}},t)})),function(){return P.apply(this,arguments)}),getCoinsPrice:(E=a()(o.a.mark(function t(e){var n,r,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.map(function(t){return e=t.id,"".concat(S,"/").concat(e,"/ohlcv/latest");var e}),t.next=3,O.setMultipleRequests(n);case 3:return r=t.sent,i=e.map(function(t,e){return t.price=r[e][0].close,t}),t.abrupt("return",i);case 6:case"end":return t.stop()}},t)})),function(t){return E.apply(this,arguments)})};new(function(){function t(e){var n=this,r=e.element;l()(this,t),this._el=r,this._userBalance=1e4,this._render(),j.getCurrencies().then(function(t){n._data=t,n._initTable(),n._initFilter()}),this._initPortfolio(),this._initTradeWidget()}return s()(t,[{key:"_tradeItem",value:function(t){var e=this._data.find(function(e){return e.id===t});this._tradeWidget.trade(e)}},{key:"_initTable",value:function(){var t=this;this._table=new _({data:this._data,element:this._el.querySelector("[data-element=table]")}),this._table.on("rowClick",function(e){return t._tradeItem(e.detail)})}},{key:"_initFilter",value:function(){var t=this;this._filter=new g({element:this._el.querySelector("[data-element=filter]")}),this._filter.on("filter",function(){var e=a()(o.a.mark(function e(n){var r,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.detail,e.next=3,j.getCurrencies({filter:r});case 3:i=e.sent,t._table.update(i);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},{key:"_initPortfolio",value:function(){this._portfolio=new k({element:this._el.querySelector('[data-element="portfolio"]'),balance:this._userBalance})}},{key:"_initTradeWidget",value:function(){var t=this;this._tradeWidget=new L({element:this._el.querySelector('[data-element="trade-widget"]'),balance:this._userBalance}),this._tradeWidget.on("buy",function(e){var n=e.detail,r=n.item,o=n.amount,i=r.price*o;t._userBalance-=i,t._tradeWidget.updateBalance(t._userBalance),t._portfolio.updateBalance(t._userBalance),t._portfolio.updatePortfolio(r,o)})}},{key:"_render",value:function(){this._el.innerHTML='\n      <div class="row">\n        <div class="col s12">\n          <h1>Tiny Crypto Market</h1>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col s12" data-element="filter"></div>\n      </div>\n      <div class="row">\n        <div class="col s12" data-element="table"></div>\n      </div>\n      <div class="col s6 offset-s6" data-element="portfolio"></div>\n      <div data-element="trade-widget"></div>\n    '}}]),t}())({element:document.getElementById("app")})}]);