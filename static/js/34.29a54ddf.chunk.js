"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[34],{392:function(t,e,r){r.r(e),r.d(e,{getCastsMovies:function(){return f},getDetailsMovies:function(){return p},getReviewsMovies:function(){return v},getSearchMovies:function(){return u},getTrendigs:function(){return o}});var n=r(861),a=r(757),c=r.n(a),i=r(44);i.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var s="229fbe9d63b5c8a5f0b4044564440235",u=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},34:function(t,e,r){r.r(e),r.d(e,{default:function(){return o}});var n=r(885),a=r(392),c=r(791),i=r(689),s={list:"MovieCredits_list__vs6xm",item:"MovieCredits_item__V1ro+"},u=r(184),o=function(){var t=(0,i.UO)().id,e=(0,c.useState)([]),r=(0,n.Z)(e,2),o=r[0],p=r[1],f="https://image.tmdb.org/t/p/",v="w300";return(0,c.useEffect)((function(){(0,a.getCastsMovies)(t).then((function(t){return p(t.cast)}))}),[t]),(0,u.jsx)("ul",{className:s.list,children:o.map((function(t){var e=t.name,r=t.id,n=t.profile_path;return null===n?(0,u.jsxs)("li",{className:s.item,children:[(0,u.jsx)("img",{alt:e,height:450,width:300,src:"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}),(0,u.jsx)("p",{children:e})]},r):(0,u.jsxs)("li",{className:s.item,children:[(0,u.jsx)("img",{alt:"",src:"".concat(f).concat(v).concat(n)}),(0,u.jsx)("p",{className:s.text,children:e})]},r)}))})}}}]);
//# sourceMappingURL=34.29a54ddf.chunk.js.map