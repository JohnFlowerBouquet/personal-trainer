(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(150),i=n(163),c=n(156);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a.Container,{id:"404",Background:Background},r.a.createElement(o.Box,{width:[320,400,600],m:"auto"},r.a.createElement(o.Heading,{color:"primaryDark",fontSize:["9rem","13rem","16rem"]},r.a.createElement("p",null,"404")),r.a.createElement(o.Heading,{color:"secondary",fontSize:["4rem","5rem","6rem"]},"There isn't anything here"))))}},152:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(33),s=n.n(c);n.d(t,"a",function(){return s.a});n(154);var l=r.a.createContext({}),m=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},156:function(e,t,n){"use strict";n(151);var a=n(0),r=n.n(a),o=n(149),i=n(153),c=n(150),s=n(4),l=n.n(s),m=n(174),u=n.n(m),d=n(157),p=o.default.div.withConfig({displayName:"Section__SectionContainer",componentId:"sc-18uueee-0"})(["min-height:100vh;min-width:320px;max-width:1366px;display:flex;margin:auto;flex:0 1 auto;flex-direction:column;justify-content:center;padding:5em 1em;scroll-behavior:smooth;"]),f=function(e){var t=e.id,n=e.children,a=e.Background;return r.a.createElement(i.b,{id:t,style:a?{position:"relative",backgroundImage:"url("+a+")",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"bottom"}:{backgroundColor:"#fff",marginBottom:"articles"===t?"200px":"0",boxShadow:"articles"===t?"rgba(0, 0, 0, 0.3) 0px 20px 30px -20px":"none"}},r.a.createElement(p,null,n))};f.propTypes={id:l.a.string.isRequired,children:l.a.node.isRequired,Background:l.a.func};var g=function(e){var t=e.name;return r.a.createElement(u.a,{top:!0},r.a.createElement(c.Heading,{color:"secondaryDark",mb:4,textAlign:"center",fontSize:[3,4,6]},r.a.createElement(d.a,{selected:!0},t)))};g.propTypes={name:l.a.string.isRequired},t.a={Container:f,Header:g}},157:function(e,t,n){"use strict";var a=n(149).default.span.withConfig({displayName:"LinkAnimated",componentId:"qj14bt-0"})(["text-decoration:none;position:relative;margin-bottom:0;padding-bottom:5px;color:inherit;",";transition:0.4s;cursor:",";&:after{content:'';position:absolute;right:0;width:0;bottom:-5px;background:",";height:5px;transition-property:width;transition-duration:0.3s;transition-timing-function:ease-out;}&:hover:after{left:0;right:auto;width:100%;}"],function(e){return e.selected&&"border-bottom:  5px solid "+e.theme.colors.primaryLight},function(e){return e.onClick?"pointer":"default"},function(e){return e.theme.colors.secondaryLight});t.a=a},159:function(e,t){e.exports={background:"#FFFFFF",backgroundDark:"#f0e6f6",primary:"#a865e1",primaryLight:"#9572e8",primaryDark:"#4b007d",secondary:"#fb397d;",secondaryLight:"#ff79b0",secondaryDark:"#c60055"}},160:function(e){e.exports={data:{contentfulAbout:{name:"Trener Personalny",description:"Trener Personalny w Wrocławiu.",profile:{favicon16:{src:"//images.ctfassets.net/1skuj8bidqs2/6nf3rNaaVaUqYcoAcciSeC/699d5091e5a784ad8067640c00cc472b/logo.png?w=16&fl=progressive&q=50"},favicon32:{src:"//images.ctfassets.net/1skuj8bidqs2/6nf3rNaaVaUqYcoAcciSeC/699d5091e5a784ad8067640c00cc472b/logo.png?w=32&fl=progressive&q=50"},bigIcon:{src:"//images.ctfassets.net/1skuj8bidqs2/6nf3rNaaVaUqYcoAcciSeC/699d5091e5a784ad8067640c00cc472b/logo.png?w=192&fl=progressive&q=50"},appleIcon:{src:"//images.ctfassets.net/1skuj8bidqs2/6nf3rNaaVaUqYcoAcciSeC/699d5091e5a784ad8067640c00cc472b/logo.png?w=180&fl=progressive&q=50"}}}}}},161:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(55),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},163:function(e,t,n){"use strict";var a=n(167),r=n.n(a),o=n(0),i=n.n(o),c=n(149),s=n(4),l=n.n(s),m=n(153),u=(n(168),n(164)),d=n.n(u),p=n(159),f=n.n(p),g=(n(151),n(160)),h=n(165),b=n.n(h),E=n(152),v=function(e){var t=e.theme,n=void 0===t?{}:t;return i.a.createElement(E.b,{query:"4063282471",render:function(e){var t=e.contentfulAbout,a=t.name,r=t.description,o=t.profile,c=""+a;return i.a.createElement(b.a,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,c),i.a.createElement("meta",{name:"description",content:r}),i.a.createElement("link",{rel:"shortcut icon",href:"https:"+o.favicon32.src}),i.a.createElement("meta",{name:"theme-color",content:n.background}),i.a.createElement("meta",{name:"image",content:"https:"+o.favicon32.src}),i.a.createElement("meta",{itemProp:"name",content:c}),i.a.createElement("meta",{itemProp:"description",content:r}),i.a.createElement("meta",{itemProp:"image",content:"https:"+o.favicon32.src}),i.a.createElement("meta",{name:"og:title",content:c}),i.a.createElement("meta",{name:"og:description",content:r}),i.a.createElement("meta",{name:"og:image",content:"https:"+o.bigIcon.src}),i.a.createElement("meta",{name:"og:site_name",content:c}),i.a.createElement("meta",{name:"og:locale",content:"en_US"}),i.a.createElement("meta",{name:"og:type",content:"website"}),i.a.createElement("meta",{name:"twitter:card",content:"summary"}),i.a.createElement("meta",{name:"twitter:title",content:c}),i.a.createElement("meta",{name:"twitter:description",content:r}),i.a.createElement("meta",{name:"twitter:image",content:"https:"+o.bigIcon.src}),i.a.createElement("meta",{name:"twitter:image:src",content:"https:"+o.bigIcon.src}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https:"+o.appleIcon.src}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"https:"+o.favicon32.src}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"https:"+o.favicon16.src}),i.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossOrigin:"anonymous"}))},data:g})};v.propTypes={theme:l.a.object};var y=Object(c.withTheme)(v);function k(){var e=r()(["\n*,\n*::after,\n*::before { \n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n  }\n\nbody {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; \n  margin: 0;\n  font-family: Cabin;\n  overflow-x: hidden;\n}\n"]);return k=function(){return e},e}var x=Object(c.createGlobalStyle)(k());d()({ssrFadeout:!0});var w=function(e){var t=e.children;return i.a.createElement(o.Fragment,null,i.a.createElement(x,null),i.a.createElement(c.ThemeProvider,{theme:{colors:f.a}},i.a.createElement(m.a,null,i.a.createElement(y,null),t)))};w.propTypes={children:l.a.node.isRequired};t.a=w}}]);
//# sourceMappingURL=component---src-pages-404-js-328537ea0fafa14e86f9.js.map