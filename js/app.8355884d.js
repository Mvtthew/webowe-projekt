(function(t){function a(a){for(var e,l,c=a[0],n=a[1],r=a[2],u=0,p=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);d&&d(a);while(p.length)p.shift()();return o.push.apply(o,r||[]),s()}function s(){for(var t,a=0;a<o.length;a++){for(var s=o[a],e=!0,c=1;c<s.length;c++){var n=s[c];0!==i[n]&&(e=!1)}e&&(o.splice(a--,1),t=l(l.s=s[0]))}return t}var e={},i={app:0},o=[];function l(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=e,l.d=function(t,a,s){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)l.d(s,e,function(a){return t[a]}.bind(null,e));return s},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=a,c=c.slice();for(var r=0;r<c.length;r++)a(c[r]);var d=n;o.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"0103":function(t,a,s){},1325:function(t,a,s){"use strict";var e=s("285a"),i=s.n(e);i.a},"1be1":function(t,a,s){},"22df":function(t,a,s){"use strict";var e=s("0103"),i=s.n(e);i.a},"285a":function(t,a,s){},"34c1":function(t,a,s){"use strict";var e=s("7b13"),i=s.n(e);i.a},4062:function(t,a,s){"use strict";var e=s("1be1"),i=s.n(e);i.a},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("navbar"),s("hello-image"),s("main",[s("about-life"),s("quotes")],1),s("Form"),s("Footer")],1)},o=[],l=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"image"},[s("div",{staticClass:"container"},[s("div",{staticClass:"text-right",attrs:{"data-aos":"fade-up-left","data-aos-duration":"1000"}},[s("h1",[t._v("ŻYCIE.")]),s("p",[t._v(" Tragedią życia nie jest śmierć, "),s("br"),t._v("ale to czemu pozwalamy umrzeć w sobie, "),s("br"),t._v("kiedy żyjemy. ")]),s("span",[t._v("— Norman Cousins")])])])])}],n={name:"hello-image"},r=n,d=(s("7920"),s("2877")),u=Object(d["a"])(r,l,c,!1,null,"5e9c6d82",null),p=u.exports,m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark",class:{top:t.onTop}},[s("div",{staticClass:"container"},[s("a",{staticClass:"navbar-brand",attrs:{href:"/","data-aos":"fade-down-left"}},[t._v("O wszystkim i o niczym")]),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","aria-label":"Toggle navigation"},on:{click:function(a){return t.toggleCollapse()}}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("div",{staticClass:"collapse navbar-collapse",class:{show:t.colapseOpened},attrs:{id:"navbarSupportedContent"}},[t._m(0)])])])},v=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"/"}},[t._v(" Home "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"http://github.com/Mvtthew",target:"_blank"}},[s("i",{staticClass:"bx bxl-github"})])])])}],b={data:function(){return{colapseOpened:!1,onTop:!0}},created:function(){window.addEventListener("scroll",this.checkOnTop)},methods:{toggleCollapse:function(){this.colapseOpened=!this.colapseOpened},checkOnTop:function(){window.scrollY>0?this.onTop=!1:this.onTop=!0}}},f=b,C=(s("34c1"),Object(d["a"])(f,m,v,!1,null,"f62677c8",null)),h=C.exports,y=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container mt-5 pt-5 mb-5 pb-5"},[s("h2",{staticClass:"text-center mb-5",attrs:{"data-aos":"fade-up"}},[t._v(" Kilka ludzi, którzy powiedzieli coś mądrego "),s("br"),s("small",{staticStyle:{"font-size":"0.8rem"}},[t._v("ale i tak tego nikt nie rozumie")])]),s("div",{staticClass:"row",attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"center-bottom"}},[s("div",{staticClass:"col-lg-8"},[s("blockquote",{staticClass:"blockquote"},[s("p",{staticClass:"mb-0"},[t._v("Lepiej jest być nienawidzonym za to, kim jesteś, niż być kochanym za to, kim nie jesteś.")]),s("footer",{staticClass:"blockquote-footer"},[t._v("Andre Gide")])])])]),s("div",{staticClass:"row mt-lg-5",attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"center-bottom"}},[s("div",{staticClass:"col-lg-8 ml-auto"},[s("blockquote",{staticClass:"blockquote"},[s("p",{staticClass:"mb-0"},[t._v("Różnica pomiędzy niemożliwym a możliwym leży w determinacji człowieka.")]),s("footer",{staticClass:"blockquote-footer"},[t._v("Tommy Lasorda")])])])]),s("div",{staticClass:"row mt-lg-5",attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"center-bottom"}},[s("div",{staticClass:"col-lg-8"},[s("blockquote",{staticClass:"blockquote"},[s("p",{staticClass:"mb-0"},[t._v("Nikt nigdy nie stał się wielki przez pokazywanie jak mały jest ktoś inny.")]),s("footer",{staticClass:"blockquote-footer"},[t._v("Irvin Himmel")])])])]),s("div",{staticClass:"row mt-lg-5",attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"center-bottom"}},[s("div",{staticClass:"col-lg-8 ml-auto"},[s("blockquote",{staticClass:"blockquote"},[s("p",{staticClass:"mb-0"},[t._v("Krytyka jest czymś, czego możemy łatwo uniknąć nie mówiąc nic, nie robiąc nic i będąc nikim.")]),s("footer",{staticClass:"blockquote-footer"},[t._v("Arystoteles")])])])]),s("div",{staticClass:"row mt-lg-5",attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"center-bottom"}},[s("div",{staticClass:"col-lg-8"},[s("blockquote",{staticClass:"blockquote"},[s("p",{staticClass:"mb-0"},[t._v("Jest tylko jedna rzecz, która sprawia, że marzenie jest niemożliwe do osiągnięcia: strach przed porażką.")]),s("footer",{staticClass:"blockquote-footer"},[t._v("Paulo Coelho")])])])]),s("div",{staticClass:"row mt-lg-5",attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"center-bottom"}},[s("div",{staticClass:"col-lg-8 ml-auto"},[s("blockquote",{staticClass:"blockquote"},[s("p",{staticClass:"mb-0"},[t._v("Nie odnajdziesz spokoju unikając życia.")]),s("footer",{staticClass:"blockquote-footer"},[t._v("Virginia Woolf")])])])]),s("div",{staticClass:"row mt-lg-5",attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"center-bottom"}},[s("div",{staticClass:"col-lg-8"},[s("blockquote",{staticClass:"blockquote"},[s("p",{staticClass:"mb-0"},[t._v("Na końcu będziemy pamiętać nie słowa naszych wrogów, ale milczenie naszych przyjaciół.")]),s("footer",{staticClass:"blockquote-footer"},[t._v("Martin Luther King")])])])]),s("div",{staticClass:"row mt-lg-5",attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"center-bottom"}},[s("div",{staticClass:"col-lg-8 ml-auto"},[s("blockquote",{staticClass:"blockquote"},[s("p",{staticClass:"mb-0"},[t._v("Jeśli zmienisz sposób, w jaki patrzysz na rzeczy, rzeczy na które patrzysz się zmienią.")]),s("footer",{staticClass:"blockquote-footer"},[t._v("Wayne Dyer")])])])]),s("div",{staticClass:"row mt-lg-5",attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"center-bottom"}},[s("div",{staticClass:"col-lg-8"},[s("blockquote",{staticClass:"blockquote"},[s("p",{staticClass:"mb-0"},[t._v("Martw się, co inni ludzie o tobie myślą, a zawsze będziesz ich więźniem.")]),s("footer",{staticClass:"blockquote-footer"},[t._v("Lao Tzu")])])])])])}],g=(s("22df"),{}),k=Object(d["a"])(g,y,_,!1,null,"2acf8bbb",null),w=k.exports,z=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container mt-5 pt-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 pr-5"},[s("h1",{staticClass:"mb-4"},[t._v(" Czym jest życie "),s("i",{staticClass:"bx bx-question-mark"})]),s("p",{attrs:{"data-aos":"zoom-in-right"}},[t._v("Jak dotąd tak naprawdę nikt jeszcze tego nie wie, nie wyłączając biologii i medycyny. Nikt nie podał dotychczas adekwatnej definicji życia.")]),s("p",{staticClass:"text-right p-5 m-5 hand",attrs:{"data-aos":"zoom-in-left"}},[t._v(" Bóg jest komikiem grającym dla publiczności zbyt przestraszonej, "),s("br"),t._v("by się śmiać. "),s("small",[t._v("- Wolter")])]),s("p",{attrs:{"data-aos":"zoom-in-left"}},[t._v("[...] przez wiele lat świat oczekiwał, że lada chwila uda się materię nieożywioną powołać do życia. Musiało jednak wiele czasu upłynąć, zanim zrozumiano, że nie da się tego osiągnąć, bo życie to proces znacznie ważniejszy i bardziej skomplikowany niż dotychczas przypuszczano. [...]")])]),s("div",{staticClass:"col-md-6 photo-1",attrs:{"data-aos":"fade-down-right"}})]),s("div",{staticClass:"row mt-5 pt-5"},[s("div",{staticClass:"col-md-10"},[s("div",{staticClass:"all-p"},[s("p",{staticClass:"display-1"},[t._v("Strach")]),s("p",{staticClass:"display-3"},[t._v("Złość")]),s("p",{staticClass:"display-2"},[t._v("Niepokój")]),s("p",{staticClass:"display-4"},[t._v("Valorant")]),s("p",{staticClass:"display-4"},[t._v("Grymas")]),s("p",{staticClass:"display-4"},[t._v("Spokój")]),s("p",{staticClass:"display-4"},[t._v("Relacje")]),s("p",{staticClass:"display-4"},[t._v("Ludzie")]),s("p",{staticClass:"display-2"},[t._v("Miłość")]),s("p",{staticClass:"display-4"},[t._v("Dobroć")]),s("p",{staticClass:"display-1"},[t._v("Zło")]),s("p",{staticClass:"display-3"},[t._v("Dobro")]),s("p",{staticClass:"display-4"},[t._v("Złośliwość")]),s("p",{staticClass:"display-1"},[t._v("Nienawiść")]),s("p",{staticClass:"display-4"},[t._v("Pożądanie")]),s("p",{staticClass:"display-2"},[t._v("Plany")]),s("p",{staticClass:"display-2"},[t._v("Marzenia")]),s("p",{staticClass:"display-3"},[t._v("Sny")]),s("p",{staticClass:"display-4"},[t._v("Rodzice")]),s("p",{staticClass:"display-1"},[t._v("Problemy")]),s("p",{staticClass:"display-1"},[t._v("Stres")])])])])])}],x=(s("4160"),s("159b"),{name:"about-life",created:function(){var t=this;setTimeout((function(){t.moveDreams(),setInterval((function(){t.moveDreams()}),5e3)}),10)},methods:{moveDreams:function(){document.querySelectorAll(".all-p p").forEach((function(t){t.style.top=70*Math.random()+"%",t.style.left=90*Math.random()+"%"}))}}}),q=x,O=(s("1325"),Object(d["a"])(q,z,j,!1,null,"13dbd448",null)),T=O.exports,E=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-lg-4"},[s("h3",{staticClass:"text-light"},[t._v("Linki")]),s("a",{attrs:{href:"/"}},[s("i",{staticClass:"bx bx-chevron-right"}),t._v(" Link do tej strony ")]),s("a",{attrs:{href:"https://google.com"}},[s("i",{staticClass:"bx bx-chevron-right"}),t._v(" Google ")]),s("a",{attrs:{href:"https://youtube.com"}},[s("i",{staticClass:"bx bx-chevron-right"}),t._v(" Youtube ")]),s("a",{attrs:{href:"https://twitch.com/levvvy"}},[s("i",{staticClass:"bx bx-chevron-right"}),t._v(" Twitch ")])]),s("div",{staticClass:"col-md-6 col-lg-4"},[s("h3",{staticClass:"text-light"},[t._v(" Więcej "),s("small",[t._v("tych samych")]),t._v(" linków ")]),s("a",{attrs:{href:"/"}},[s("i",{staticClass:"bx bx-chevron-right"}),t._v(" Link do tej strony ")]),s("a",{attrs:{href:"https://google.com"}},[s("i",{staticClass:"bx bx-chevron-right"}),t._v(" Google ")]),s("a",{attrs:{href:"https://youtube.com"}},[s("i",{staticClass:"bx bx-chevron-right"}),t._v(" Youtube ")]),s("a",{attrs:{href:"https://twitch.com/levvvy"}},[s("i",{staticClass:"bx bx-chevron-right"}),t._v(" Twitch ")])]),s("div",{staticClass:"col-md-12 col-lg-4 text-light"},[t._v(" © Mateusz Ożóg 2020 "),s("br"),s("img",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCafUOxRBwBsNbSoHg2QRDkmwhIEBnM4YXi18vJY2YxIwVk_Em&usqp=CAU",alt:"\nPinterest\npainting. thinking... how about a crayon drip background and then ..."}})])])])])}],$={name:"footer"},S=$,P=(s("4062"),Object(d["a"])(S,E,M,!1,null,"66065508",null)),L=P.exports,N=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container mb-5 pb-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-7 ml-auto"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h1",{staticClass:"mb-0"},[t._v("Kontakt")])]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[t._v("Twoje imię")]),s("input",{staticClass:"form-control",attrs:{type:"text",name:"name",id:"name",placeholder:"Jan"}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"surname"}},[t._v("Twoje nazwisko")]),s("input",{staticClass:"form-control",attrs:{type:"text",name:"surname",id:"surname",placeholder:"Kowalski"}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"nickname"}},[t._v("Twoje przezwisko")]),s("input",{staticClass:"form-control",attrs:{type:"text",name:"nickname",id:"nickname"}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"message"}},[t._v("Twoja wiadomość")]),s("textarea",{staticClass:"form-control",attrs:{name:"message",id:"message",rows:"5",placeholder:"Aa..."}})]),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-success"},[t._v(" Wyślij wiadomość "),s("i",{staticClass:"bx bx-envelope"})])])])])])])])}],D={},J=D,Y=Object(d["a"])(J,N,A,!1,null,null,null),I=Y.exports,G={name:"App",components:{Quotes:w,HelloImage:p,Navbar:h,AboutLife:T,Footer:L,Form:I}},K=G,R=(s("5c0b"),Object(d["a"])(K,i,o,!1,null,null,null)),W=R.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(W)}}).$mount("#app")},"5c0b":function(t,a,s){"use strict";var e=s("9c0c"),i=s.n(e);i.a},7920:function(t,a,s){"use strict";var e=s("d038"),i=s.n(e);i.a},"7b13":function(t,a,s){},"9c0c":function(t,a,s){},d038:function(t,a,s){}});
//# sourceMappingURL=app.8355884d.js.map