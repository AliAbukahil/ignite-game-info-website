(this.webpackJsonpignite=this.webpackJsonpignite||[]).push([[0],{63:function(e,n,a){"use strict";a.r(n);var t,c,r,i,o=a(0),s=a.n(o),d=a(13),u=a.n(d),b=a(6),g=a(8),m=a(11),l=a.n(m),p=a(14),j=a(9),h=a.n(j),f="https://api.rawg.io/api/games?key=b5d97dce451641c3aba31c04a4a7f7af&dates=2021-09-01,2021-09-30&platforms=18,1,7",O=(new Date).getFullYear(),x=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),v=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),w="".concat(O,"-").concat(x,"-").concat(v),y="".concat(O-1,"-").concat(x,"-").concat(v),_="".concat(O+1,"-").concat(x,"-").concat(v),k="games?key=b5d97dce451641c3aba31c04a4a7f7af&dates=".concat(y,",").concat(w,"&ordering=-rating&page_size=10"),E="games?key=b5d97dce451641c3aba31c04a4a7f7af&dates=".concat(w,",").concat(_,"&ordering=-added&page_size=10"),G="games?key=b5d97dce451641c3aba31c04a4a7f7af&dates=".concat(y,",").concat(w,"&ordering=-released&page_size=10"),D=function(e){return"".concat(f,"games/").concat(e,"/screenshots")},T=a(7),z=a(64),A=a(1),M=Object(T.b)(z.a.div)(t||(t=Object(b.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  border-radius: 1rem;\n\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n  }\n"]))),S=function(e){var n=e.name,a=e.released,t=e.image,c=e.id,r=Object(g.b)();return Object(A.jsxs)(M,{onClick:function(){r(function(e){return function(){var n=Object(p.a)(l.a.mark((function n(a){var t,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.get((r=e,"".concat(f,"games/").concat(r)));case 2:return t=n.sent,n.next=5,h.a.get(D(e));case 5:c=n.sent,a({type:"GET_DETAIL",payLoad:{game:t.data,screen:c.data}});case 7:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()}(c))},children:[Object(A.jsx)("h3",{children:n}),Object(A.jsx)("p",{children:a}),Object(A.jsx)("img",{src:t,alt:n})]})},C=Object(T.b)(z.a.div)(c||(c=Object(b.a)(["\n  padding: 0rem 5rem;\n  h2 {\n    padding: 5rem 0rem;\n  }\n"]))),F=Object(T.b)(z.a.div)(r||(r=Object(b.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n"]))),I=function(){var e=Object(g.b)();Object(o.useEffect)((function(){e(function(){var e=Object(p.a)(l.a.mark((function e(n){var a,t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(f).concat(k));case 2:return a=e.sent,e.next=5,h.a.get("".concat(f).concat(G));case 5:return t=e.sent,e.next=8,h.a.get("".concat(f).concat(E));case 8:c=e.sent,n({type:"FETCH_GAMES",payload:{popular:a.data.results,upcoming:c.data.results,newGames:t.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[e]);var n=Object(g.c)((function(e){return e.games})),a=n.popular,t=n.newGames,c=n.upcoming;return Object(A.jsxs)(C,{children:[Object(A.jsx)("h2",{children:"Upcoming Games"}),Object(A.jsx)(F,{children:c.map((function(e){return Object(A.jsx)(S,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(A.jsx)("h2",{children:"Popular Games"}),Object(A.jsx)(F,{children:a.map((function(e){return Object(A.jsx)(S,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(A.jsx)("h2",{children:"New Games"}),Object(A.jsx)(F,{children:t.map((function(e){return Object(A.jsx)(S,{name:e.name,released:e.released,id:e.id,image:e.background_image},e.id)}))})]})},L=Object(T.a)(i||(i=Object(b.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html {\n        &::-webkit-scrollbar {\n            width: 0%.5rem;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-color: darkgray;\n        }\n    }\n\n    body{\n        font-family: 'Montserrat', sans-serif;\n        \n        width: 100%;\n    }\n    h2 {\n        font-size: 3rem;\n        font-family: 'Abril Fatface', cursive;\n        font-weight: lighter;\n        color: #333;\n    }\n    h3 {\n        font-size: 1.3rem;\n        color: #333;\n        padding: 1.5rem;\n    }\n    p{\n        font-size: 1.2rem;\n        line-height: 200%;\n        color: #696969;\n    }\n    a {\n        text-decoration: none;\n        color: #333;\n    }\n"])));var N=function(){return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(L,{}),Object(A.jsx)(I,{})]})},H=a(12),J=a(5),P={popular:[],newGames:[],upcoming:[],searched:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(J.a)(Object(J.a)({},e),{},{popular:n.payload.popular,upcoming:n.payload.upcoming,newGames:n.payload.newGames});default:return Object(J.a)({},e)}},X={game:{},screen:{}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_DETAIL":return Object(J.a)(Object(J.a)({},e),{},{game:n.payload.game,screen:n.payload.game});default:return Object(J.a)({},e)}},R=Object(H.b)({games:U,detail:B}),V=a(32),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.c,q=Object(H.d)(R,Y(Object(H.a)(V.a)));u.a.render(Object(A.jsx)(s.a.StrictMode,{children:Object(A.jsx)(g.a,{store:q,children:Object(A.jsx)(N,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.ab818671.chunk.js.map