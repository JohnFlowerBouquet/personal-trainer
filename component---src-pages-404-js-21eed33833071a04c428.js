(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(150),i=n(160),c=n(155);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.d.Container,{id:"404"},r.a.createElement(o.Box,{width:[320,400,600],m:"auto"},r.a.createElement(o.Heading,{color:"primaryDark",fontSize:["9rem","13rem","16rem"]},r.a.createElement("p",null,"404")),r.a.createElement(o.Heading,{color:"secondary",fontSize:["4rem","5rem","6rem"]},"There isn't anything here"))))}},151:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=(n(33),n(153),r.a.createContext({})),s=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext({open:!1,onOpenModal:function(){},onCloseModal:function(){}}),o={Provider:r.Provider,Consumer:r.Consumer};t.a=o},153:function(e,t,n){var a;e.exports=(a=n(159))&&a.default||a},155:function(e,t,n){"use strict";n.d(t,"b",function(){return p}),n.d(t,"c",function(){return f}),n.d(t,"a",function(){return h});n(162);var a=n(0),r=n.n(a),o=n(149),i=n(154),c=n(150),s=n(4),l=n.n(s),m=n(171),d=n.n(m),u=n(156),p=o.default.div.withConfig({displayName:"Section__SectionContainer",componentId:"ayedgz-0"})(["min-height:100vh;min-width:320px;max-width:1366px;display:flex;margin:auto;flex:0 1 auto;flex-direction:column;justify-content:",";padding:10em 1em;scroll-behavior:smooth;@media (min-width:450px){padding:5em 1em;}"],function(e){return e.justifyContent?e.justifyContent:"space-evenly"}),f=Object(o.default)(i.b).withConfig({displayName:"Section__SectionWithBackground",componentId:"ayedgz-1"})(["background:",";background-repeat:no-repeat;background-size:cover;background-position:initial;position:relative;margin-bottom:",";box-shadow:",";@media (min-width:450px){margin-bottom:",";}"],function(e){return"#f8f9fa url("+e.backgroundSrc+")"},function(e){return e.lastSection?"120vh":"0"},function(e){return e.lastSection?"rgba(0, 0, 0, 0.3) 0px 20px 30px -20px":"none"},function(e){return e.lastSection?"600px":"0"}),g=function(e){var t=e.id,n=e.children;return r.a.createElement(i.b,{id:t,style:{backgroundColor:"#f8f9fa"}},r.a.createElement(p,null,n))};g.propTypes={id:l.a.string.isRequired,children:l.a.node.isRequired};var h=function(e){var t=e.name,n=e.color;return r.a.createElement(d.a,{top:!0},r.a.createElement(c.Heading,{color:n||"secondaryDark",mb:4,textAlign:"center",fontSize:[5,4,6]},r.a.createElement(u.a,{selected:!0},t)))};h.propTypes={name:l.a.string.isRequired,color:l.a.string.isRequired},t.d={Container:g,Header:h,SectionWithBackground:f,SectionContainer:p}},156:function(e,t,n){"use strict";var a=n(149).default.span.withConfig({displayName:"LinkAnimated",componentId:"sc-1jqr56o-0"})(["text-decoration:none;position:relative;margin-bottom:0;padding-bottom:5px;color:inherit;",";transition:0.4s;cursor:",";&:after{content:'';position:absolute;right:0;width:0;bottom:-5px;background:",";height:5px;transition-property:width;transition-duration:0.3s;transition-timing-function:ease-out;}&:hover:after{left:0;right:auto;width:100%;}"],function(e){return e.selected&&"border-bottom:  5px solid "+e.theme.colors.primaryLight},function(e){return e.onClick?"pointer":"default"},function(e){return e.theme.colors.secondaryLight});t.a=a},157:function(e,t){e.exports={background:"#FFFFFF",backgroundDark:"#f0e6f6",white:"#ffffff",primary:"#7b69b3",primaryLight:"#e6a9dd",primaryDark:"#6a57a8",primaryGradient:"linear-gradient(to right, #7b69b3 0%,#e6a9dd 100%)",secondary:"#fb397d;",secondaryLight:"#ff79b0",secondaryDark:"#c60055"}},158:function(e){e.exports={data:{contentfulSiteMetadata:{title:"Małgorzata Małaczek",description:"Trener Personalny we Wrocławiu.",favicon32:{favicon16:{src:"//images.ctfassets.net/1skuj8bidqs2/6nf3rNaaVaUqYcoAcciSeC/28cdabda06c4c64214213a39bbc48e43/Mate_Logo.png?w=16&fl=progressive&q=50"},favicon32:{src:"//images.ctfassets.net/1skuj8bidqs2/6nf3rNaaVaUqYcoAcciSeC/28cdabda06c4c64214213a39bbc48e43/Mate_Logo.png?w=32&fl=progressive&q=50"},bigIcon:{src:"//images.ctfassets.net/1skuj8bidqs2/6nf3rNaaVaUqYcoAcciSeC/28cdabda06c4c64214213a39bbc48e43/Mate_Logo.png?w=192&fl=progressive&q=50"},appleIcon:{src:"//images.ctfassets.net/1skuj8bidqs2/6nf3rNaaVaUqYcoAcciSeC/28cdabda06c4c64214213a39bbc48e43/Mate_Logo.png?w=180&fl=progressive&q=50"}}}}}},159:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(56),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},160:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(164),i=n.n(o),c=n(0),s=n.n(c),l=n(149),m=n(4),d=n.n(m),u=n(154),p=(n(165),n(161)),f=n.n(p),g=n(157),h=n.n(g),b=n(158),v=n(163),y=n.n(v),E=n(151),w=function(e){var t=e.theme,n=void 0===t?{}:t;return s.a.createElement(E.a,{query:"1039770140",render:function(e){var t=e.contentfulSiteMetadata,a=t.title,r=t.description,o=t.favicon32;return s.a.createElement(y.a,null,s.a.createElement("meta",{charSet:"utf-8"}),s.a.createElement("title",null,a),s.a.createElement("meta",{name:"description",content:r}),s.a.createElement("link",{rel:"shortcut icon",href:"https:"+o.favicon32.src}),s.a.createElement("meta",{name:"theme-color",content:n.background}),s.a.createElement("meta",{name:"image",content:"https:"+o.favicon32.src}),s.a.createElement("meta",{itemProp:"name",content:a}),s.a.createElement("meta",{itemProp:"description",content:r}),s.a.createElement("meta",{itemProp:"image",content:"https:"+o.favicon32.src}),s.a.createElement("meta",{name:"og:title",content:a}),s.a.createElement("meta",{name:"og:description",content:r}),s.a.createElement("meta",{name:"og:image",content:"https:"+o.bigIcon.src}),s.a.createElement("meta",{name:"og:site_name",content:a}),s.a.createElement("meta",{name:"og:locale",content:"en_US"}),s.a.createElement("meta",{name:"og:type",content:"website"}),s.a.createElement("meta",{name:"twitter:card",content:"summary"}),s.a.createElement("meta",{name:"twitter:title",content:a}),s.a.createElement("meta",{name:"twitter:description",content:r}),s.a.createElement("meta",{name:"twitter:image",content:"https:"+o.bigIcon.src}),s.a.createElement("meta",{name:"twitter:image:src",content:"https:"+o.bigIcon.src}),s.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https:"+o.appleIcon.src}),s.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"https:"+o.favicon32.src}),s.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"https:"+o.favicon16.src}),s.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossOrigin:"anonymous"}))},data:b})};w.propTypes={theme:d.a.object};var x=Object(l.withTheme)(w),k=n(152);function S(){var e=i()(["\n*,\n*::after,\n*::before { \n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n  }\n\nbody {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; \n  margin: 0;\n  font-family: Cabin;\n  overflow-x: hidden;\n}\n"]);return S=function(){return e},e}n.d(t,"a",function(){return C});var q=Object(l.createGlobalStyle)(S());f()({ssrFadeout:!0});var C=function(e){function t(t){var n;return(n=e.call(this,t)||this).onOpenModal=function(){n.setState({open:!0})},n.onCloseModal=function(){n.setState({open:!1})},n.state={open:!1,onOpenModal:n.onOpenModal,onCloseModal:n.onCloseModal},n}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement(c.Fragment,null,s.a.createElement(q,null),s.a.createElement(l.ThemeProvider,{theme:{colors:h.a}},s.a.createElement(k.a.Provider,{value:this.state},s.a.createElement(u.a,null,s.a.createElement(x,null),e))))},t}(s.a.Component);C.propTypes={children:d.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-404-js-21eed33833071a04c428.js.map