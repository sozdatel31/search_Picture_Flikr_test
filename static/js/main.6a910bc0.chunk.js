(this.webpackJsonpelinext_test=this.webpackJsonpelinext_test||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(10),r=n.n(c),o=(n(117),n(118),n(190)),i=n(194),s=n(152),u=n(195),l=n(196),j=n(32),d=n(63),b=n.n(d),O=n(4);function p(){return Object(O.jsx)("div",{className:b.a.div,children:Object(O.jsx)(o.a,{color:"inherit",position:"static",children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(j.b,{className:b.a.navLink,to:"/search",children:Object(O.jsx)(s.a,{variant:"h5",children:"Image Finder"})}),Object(O.jsx)("div",{className:b.a.div}),Object(O.jsx)(u.a,{color:"inherit",children:Object(O.jsx)(l.a,{})})]})})})}var h=n(211),f=n(206),x=n(12),g=n(31),m=n(19),v=n(42),P=n(15),S=n(94),T=n.n(S),A=function(e,t){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return T.a.create({baseURL:"https://www.flickr.com/services/rest/",params:{method:"flickr.photos.search",api_key:"7b8388b09c7b64e0df597f927aef2657",extras:"original_format",tags:e,page:t,format:"json",nojsoncallback:1,per_page:15}})}(e,t).get("")},E={status:"idle",error:void 0},_=function(e){return{type:"APP/SETTINGS/SET-STATUS",status:e}},y=function(e){return{type:"APP/SETTINGS/SET-ERROR",error:e}},N=function(e,t){"fail"===e.stat?t(y(e.message)):t(y("Server is not responding")),t(_("failed"))},C={page:1,pages:0,photo:[],isDisabled:!1},k=function(e){return{type:"APP/SET-PHOTOS",photos:e}},I=function(e){return{type:"APP/SET-PAGES",payload:e}},D=function(e){return{type:"APP/DISABLED",isDisabled:e}};function L(e,t){"ok"===e.stat?e.photos.photo.length?(t(k(e.photos.photo)),t(I({page:e.photos.page,pages:e.photos.pages})),t(D(!1))):t(y("Error:( Please, try again/Please enter a valid query")):N(e,t)}var H=[],R=function(e){return{type:"APP/LOCALSTORAGE/SET-PHOTOS",photos:e}},w=n(212),G=n(197),B=n(198),F=n(201),J=n(199),V=n(202),W=n(200),q=n(51),z=n.n(q);function K(e){return Object(O.jsxs)(G.a,{className:z.a.root,style:{background:"#e4ea73"},children:[Object(O.jsxs)(B.a,{children:[Object(O.jsx)(J.a,{className:z.a.media,image:e.picture.url}),Object(O.jsx)(W.a,{className:z.a.itemsText,style:{background:"#e4ea73"},children:Object(O.jsx)(s.a,{variant:"body1",color:"textSecondary",component:"p",children:e.picture.title})})]}),Object(O.jsx)(F.a,{className:z.a.button,children:Object(O.jsx)(V.a,{variant:"outlined",size:"small",color:"default",onClick:function(){return e.remotePhoto(e.picture.id,e.picture)},children:e.description})})]})}var M=n(216),U=n(215);function X(e){return Object(O.jsx)(U.a,Object(P.a)({elevation:6,variant:"filled"},e))}function Q(){var e=Object(m.c)((function(e){return e.settings.error})),t=Object(m.b)(),n=function(e,n){"clickaway"!==n&&t(y(void 0))};return Object(O.jsx)(M.a,{open:void 0!==e,autoHideDuration:4e3,onClose:n,style:{bottom:"80px"},children:Object(O.jsx)(X,{onClose:n,severity:"error",children:e})})}function Y(e){var t=Object(m.c)((function(e){return e.settings.status})),n=Object(m.b)();return Object(O.jsx)(M.a,{open:"succeeded"===t,autoHideDuration:1e3,onClose:function(){n(_("idle"))},style:{bottom:"80px"},children:Object(O.jsx)(U.a,{severity:"success",children:e.value})})}var Z=n(46),$=n.n(Z),ee=n(204),te=n(205),ne=n(213);function ae(e){var t=Object(a.useState)(e.currentPage),n=Object(g.a)(t,2),c=n[0],r=n[1];return Object(O.jsx)(ne.a,{page:c,count:e.totalPages,disabled:e.isDisabled,onChange:function(t,n){r(n),e.nextPage(n)},variant:"outlined",shape:"rounded",showFirstButton:!0,showLastButton:!0})}function ce(e){var t=e.photo,n=e.isDisabled,a=e.error,c=e.title,r=e.nextPage,o=e.onChangeHandler,i=e.onKeyPressHandler,s=e.remotePhoto,l=e.currentPage,j=e.totalPages,d=e.clearInput;return Object(O.jsxs)("div",{children:[Object(O.jsx)(Q,{}),Object(O.jsx)(Y,{value:"Add picture success!"}),Object(O.jsx)(w.a,{id:"outlined-basic",label:"Find images",variant:"outlined",className:$.a.root,error:!!a,helperText:a,value:c,onChange:o,onKeyPress:i,InputProps:{endAdornment:Object(O.jsx)(ee.a,{position:"end",onClick:d,children:Object(O.jsx)(u.a,{onClick:d,children:Object(O.jsx)(te.a,{})})})}}),!!t.length&&Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:$.a.pagination,children:Object(O.jsx)(ae,{currentPage:l,totalPages:j,isDisabled:n,nextPage:r})}),Object(O.jsx)(f.a,{container:!0,className:$.a.images,children:t.map((function(e){return Object(O.jsx)(K,{picture:e,remotePhoto:function(){return s(e.id,e)},description:"Bookmark it!"},e.id)}))})]})]})}function re(){var e=Object(m.c)((function(e){return e.app.photo})),t=Object(m.c)((function(e){return e.app.isDisabled})),n=Object(m.c)((function(e){return e.app.page})),c=Object(m.c)((function(e){return e.app.pages})),r=Object(m.b)(),o=Object(a.useState)(null),i=Object(g.a)(o,2),s=i[0],u=i[1],l=Object(a.useState)(""),j=Object(g.a)(l,2),d=j[0],b=j[1],p=function(e,t){var n=Object(a.useState)(e),c=Object(g.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){return o(e)}),t);return function(){return clearTimeout(n)}}),[e]),r}(d,500),h=Object(a.useCallback)((function(e){var t;""!==e.trim()?r((t=e,function(e){e(k([])),e(D(!0)),A(t).then((function(t){return L(t.data,e)})).catch((function(t){return N(t,e)}))})):u("Title is required")}),[r]);Object(a.useEffect)((function(){r(k([])),r(I({page:1,pages:0}))}),[r]),Object(a.useEffect)((function(){p&&h(d)}),[p,d,h]);return Object(O.jsx)(ce,{photo:e,isDisabled:t,error:s,title:d,nextPage:function(e){r(function(e,t){return function(n,a){n(function(e){return{type:"APP/NEXT-PAGES",page:e}}(t)),n(D(!0)),A(e,a().app.page).then((function(e){return L(e.data,n)})).catch((function(e){return N(e,n)}))}}(d,e))},currentPage:n,totalPages:c,onChangeHandler:function(e){e.currentTarget.value||r(k([])),b(e.currentTarget.value)},remotePhoto:function(e,t){r({type:"APP/REMOVE-PHOTO",photoId:e}),r(function(e){return function(t,n){var a=localStorage.getItem("state");a&&t(R(JSON.parse(a))),t(function(e){return{type:"APP/LOCALSTORAGE/ADD-PHOTO",photo:e}}(e)),localStorage.setItem("state",JSON.stringify(n().localstorage))}}(t)),r(_("succeeded"))},onKeyPressHandler:function(e){null!==s&&u(null),"Enter"===e.key&&h(d)},clearInput:function(){b(""),u(null),r(k([])),r(I({page:1,pages:0}))}})}function oe(){var e=Object(m.c)((function(e){return e.localstorage})),t=Object(m.b)();function n(e){t(function(e){return function(t,n){t(function(e){return{type:"APP/LOCALSTORAGE/REMOVE-PHOTO",photoId:e}}(e)),localStorage.setItem("state",JSON.stringify(n().localstorage))}}(e)),t(_("succeeded"))}return Object(a.useEffect)((function(){t((function(e){var t=localStorage.getItem("state");t&&e(R(JSON.parse(t)))}))}),[]),Object(O.jsxs)("div",{className:$.a.images,children:[Object(O.jsx)(Y,{value:"Delete picture success!"}),Object(O.jsx)(f.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:!!e.length&&e.map((function(e){return Object(O.jsx)(K,{picture:e,remotePhoto:n,description:"Remove it"},e.id)}))})]})}function ie(){return Object(O.jsxs)(x.d,{children:[Object(O.jsx)(x.b,{exact:!0,path:"/search",render:function(){return Object(O.jsx)(re,{})}}),Object(O.jsx)(x.b,{path:"/bookmarks",render:function(){return Object(O.jsx)(oe,{})}}),Object(O.jsx)(x.a,{exact:!0,from:"/",to:"/search"}),Object(O.jsx)(x.a,{from:"*",to:"/404"})]})}var se=n(207),ue=n(208),le=n(64),je=n.n(le);function de(){return Object(O.jsx)("div",{className:je.a.menu,children:Object(O.jsxs)(f.a,{container:!0,direction:"column",alignItems:"center",children:[Object(O.jsx)(j.b,{to:"/search",activeClassName:je.a.active,children:Object(O.jsx)(u.a,{children:Object(O.jsx)(se.a,{})})}),Object(O.jsx)(j.b,{to:"/bookmarks",activeClassName:je.a.active,children:Object(O.jsx)(u.a,{children:Object(O.jsx)(ue.a,{})})})]})})}var be=n(75),Oe=n.n(be);function pe(){return Object(O.jsx)("div",{className:Oe.a.div,children:Object(O.jsx)(o.a,{color:"inherit",position:"static",children:Object(O.jsx)(i.a,{children:Object(O.jsx)(s.a,{variant:"h6",className:Oe.a.div,children:"Copyrights"})})})})}var he=n(209),fe=n(217),xe=n(214),ge=n(210),me=n(153),ve=n(96),Pe=Object(he.a)((function(e){return Object(fe.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{maxWidth:300,backgroundColor:"#282c34",textAlign:"center",color:"#ccc",boxShadow:e.shadows[10],padding:e.spacing(2,4,3)}})}));function Se(){var e=Pe(),t=Object(a.useState)(!1),n=Object(g.a)(t,2),c=n[0],r=n[1],o=function(){r(!1)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(ve.a,{timeout:6e4,onIdle:function(){r(!0)},onActive:o}),Object(O.jsx)(xe.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:c,onClose:o,closeAfterTransition:!0,BackdropComponent:ge.a,BackdropProps:{timeout:1e3},children:Object(O.jsx)(me.a,{in:c,children:Object(O.jsxs)("div",{className:e.paper,children:[Object(O.jsx)("h2",{id:"transition-modal-title",children:"App is not active"}),Object(O.jsx)("p",{id:"transition-modal-description",children:"We are waiting for you!)"}),Object(O.jsx)("q",{children:"Enjoy the moment"})]})})})]})}var Te=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(Se,{}),Object(O.jsx)(p,{}),Object(O.jsx)(h.a,{maxWidth:"xl",className:"container",children:Object(O.jsxs)(f.a,{container:!0,className:"grid",children:[Object(O.jsx)(de,{}),Object(O.jsx)("div",{className:"wrap-content",children:Object(O.jsx)(ie,{})})]})}),Object(O.jsx)(pe,{})]})},Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,218)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},Ee=n(65),_e=n(100),ye=Object(Ee.b)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SETTINGS/SET-STATUS":return Object(P.a)(Object(P.a)({},e),{},{status:t.status});case"APP/SETTINGS/SET-ERROR":return Object(P.a)(Object(P.a)({},e),{},{error:t.error});default:return e}},localstorage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/LOCALSTORAGE/ADD-PHOTO":return[].concat(Object(v.a)(e),[t.photo]);case"APP/LOCALSTORAGE/REMOVE-PHOTO":return Object(v.a)(e.filter((function(e){return e.id!==t.photoId})));case"APP/LOCALSTORAGE/SET-PHOTOS":return Object(v.a)(t.photos);default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-PHOTOS":return Object(P.a)(Object(P.a)({},e),{},{photo:Object(v.a)(t.photos.map((function(e){return Object(P.a)(Object(P.a)({},e),{},{url:e.originalformat?"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,".").concat(e.originalformat):"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")})})))});case"APP/REMOVE-PHOTO":return Object(P.a)(Object(P.a)({},e),{},{photo:Object(v.a)(e.photo.filter((function(e){return e.id!==t.photoId})))});case"APP/SET-PAGES":return Object(P.a)(Object(P.a)({},e),t.payload);case"APP/NEXT-PAGES":return Object(P.a)(Object(P.a)({},e),{},{page:t.page});case"APP/DISABLED":return Object(P.a)(Object(P.a)({},e),{},{isDisabled:t.isDisabled});default:return e}}}),Ne=Object(Ee.c)(ye,Object(Ee.a)(_e.a));r.a.render(Object(O.jsx)(m.a,{store:Ne,children:Object(O.jsx)(j.a,{children:Object(O.jsx)(Te,{})})}),document.getElementById("root")),Ae()},46:function(e,t,n){e.exports={root:"SearchBoard_root__zB-zx",images:"SearchBoard_images__26SV4",pagination:"SearchBoard_pagination__399r5"}},51:function(e,t,n){e.exports={itemsText:"ImageCard_itemsText__2viTt",root:"ImageCard_root__Kit5P",button:"ImageCard_button__1Wsn_",media:"ImageCard_media__2tDh-"}},63:function(e,t,n){e.exports={div:"Header_div__2qzaf",navLink:"Header_navLink__1yAgw"}},64:function(e,t,n){e.exports={menu:"Nav_menu__1cAsj",active:"Nav_active__hnkFe"}},75:function(e,t,n){e.exports={div:"Footer_div__2GPWF"}}},[[151,1,2]]]);
//# sourceMappingURL=main.6a910bc0.chunk.js.map