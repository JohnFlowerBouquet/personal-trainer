(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(160),o=n(169),c=n(170),l=n(168);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,null),r.a.createElement(o.a,null),r.a.createElement(l.a,null))}},151:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=(n(33),n(153),r.a.createContext({})),l=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext({open:!1,onOpenModal:function(){},onCloseModal:function(){}}),i={Provider:r.Provider,Consumer:r.Consumer};t.a=i},153:function(e,t,n){var a;e.exports=(a=n(159))&&a.default||a},155:function(e,t,n){"use strict";n.d(t,"b",function(){return p}),n.d(t,"c",function(){return f}),n.d(t,"a",function(){return h});n(162);var a=n(0),r=n.n(a),i=n(149),o=n(154),c=n(150),l=n(4),s=n.n(l),d=n(171),m=n.n(d),u=n(156),p=i.default.div.withConfig({displayName:"Section__SectionContainer",componentId:"ayedgz-0"})(["min-height:100vh;min-width:320px;max-width:1366px;display:flex;margin:auto;flex:0 1 auto;flex-direction:column;justify-content:",";padding:10em 1em;scroll-behavior:smooth;@media (min-width:450px){padding:5em 1em;}"],function(e){return e.justifyContent?e.justifyContent:"space-evenly"}),f=Object(i.default)(o.b).withConfig({displayName:"Section__SectionWithBackground",componentId:"ayedgz-1"})(["background:",";background-repeat:no-repeat;background-size:cover;background-position:initial;position:relative;margin-bottom:",";box-shadow:",";@media (min-width:450px){margin-bottom:",";}"],function(e){return"#f8f9fa url("+e.backgroundSrc+")"},function(e){return e.lastSection?"120vh":"0"},function(e){return e.lastSection?"rgba(0, 0, 0, 0.3) 0px 20px 30px -20px":"none"},function(e){return e.lastSection?"600px":"0"}),g=function(e){var t=e.id,n=e.children;return r.a.createElement(o.b,{id:t,style:{backgroundColor:"#f8f9fa"}},r.a.createElement(p,null,n))};g.propTypes={id:s.a.string.isRequired,children:s.a.node.isRequired};var h=function(e){var t=e.name,n=e.color;return r.a.createElement(m.a,{top:!0},r.a.createElement(c.Heading,{color:n||"secondaryDark",mb:4,textAlign:"center",fontSize:[5,4,6]},r.a.createElement(u.a,{selected:!0},t)))};h.propTypes={name:s.a.string.isRequired,color:s.a.string.isRequired},t.d={Container:g,Header:h,SectionWithBackground:f,SectionContainer:p}},156:function(e,t,n){"use strict";var a=n(149).default.span.withConfig({displayName:"LinkAnimated",componentId:"sc-1jqr56o-0"})(["text-decoration:none;position:relative;margin-bottom:0;padding-bottom:5px;color:inherit;",";transition:0.4s;cursor:",";&:after{content:'';position:absolute;right:0;width:0;bottom:-5px;background:",";height:5px;transition-property:width;transition-duration:0.3s;transition-timing-function:ease-out;}&:hover:after{left:0;right:auto;width:100%;}"],function(e){return e.selected&&"border-bottom:  5px solid "+e.theme.colors.primaryLight},function(e){return e.onClick?"pointer":"default"},function(e){return e.theme.colors.secondaryLight});t.a=a},157:function(e,t){e.exports={background:"#FFFFFF",backgroundDark:"#f0e6f6",white:"#ffffff",primary:"#7b69b3",primaryLight:"#e6a9dd",primaryDark:"#6a57a8",primaryGradient:"linear-gradient(to right, #7b69b3 0%,#e6a9dd 100%)",secondary:"#fb397d;",secondaryLight:"#ff79b0",secondaryDark:"#c60055"}},158:function(e){e.exports={data:{contentfulSiteMetadata:{title:"Małgorzata Małaczek",description:"Trener Personalny we Wrocławiu.",favicon32:{favicon16:{src:"//images.ctfassets.net/1skuj8bidqs2/6nf3rNaaVaUqYcoAcciSeC/28cdabda06c4c64214213a39bbc48e43/Mate_Logo.png?w=16&fl=progressive&q=50"},favicon32:{src:"//images.ctfassets.net/1skuj8bidqs2/6nf3rNaaVaUqYcoAcciSeC/28cdabda06c4c64214213a39bbc48e43/Mate_Logo.png?w=32&fl=progressive&q=50"},bigIcon:{src:"//images.ctfassets.net/1skuj8bidqs2/6nf3rNaaVaUqYcoAcciSeC/28cdabda06c4c64214213a39bbc48e43/Mate_Logo.png?w=192&fl=progressive&q=50"},appleIcon:{src:"//images.ctfassets.net/1skuj8bidqs2/6nf3rNaaVaUqYcoAcciSeC/28cdabda06c4c64214213a39bbc48e43/Mate_Logo.png?w=180&fl=progressive&q=50"}}}}}},159:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(56),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},160:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(164),o=n.n(i),c=n(0),l=n.n(c),s=n(149),d=n(4),m=n.n(d),u=n(154),p=(n(165),n(161)),f=n.n(p),g=n(157),h=n.n(g),b=n(158),x=n(163),E=n.n(x),v=n(151),w=function(e){var t=e.theme,n=void 0===t?{}:t;return l.a.createElement(v.a,{query:"1039770140",render:function(e){var t=e.contentfulSiteMetadata,a=t.title,r=t.description,i=t.favicon32;return l.a.createElement(E.a,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,a),l.a.createElement("meta",{name:"description",content:r}),l.a.createElement("link",{rel:"shortcut icon",href:"https:"+i.favicon32.src}),l.a.createElement("meta",{name:"theme-color",content:n.background}),l.a.createElement("meta",{name:"image",content:"https:"+i.favicon32.src}),l.a.createElement("meta",{itemProp:"name",content:a}),l.a.createElement("meta",{itemProp:"description",content:r}),l.a.createElement("meta",{itemProp:"image",content:"https:"+i.favicon32.src}),l.a.createElement("meta",{name:"og:title",content:a}),l.a.createElement("meta",{name:"og:description",content:r}),l.a.createElement("meta",{name:"og:image",content:"https:"+i.bigIcon.src}),l.a.createElement("meta",{name:"og:site_name",content:a}),l.a.createElement("meta",{name:"og:locale",content:"en_US"}),l.a.createElement("meta",{name:"og:type",content:"website"}),l.a.createElement("meta",{name:"twitter:card",content:"summary"}),l.a.createElement("meta",{name:"twitter:title",content:a}),l.a.createElement("meta",{name:"twitter:description",content:r}),l.a.createElement("meta",{name:"twitter:image",content:"https:"+i.bigIcon.src}),l.a.createElement("meta",{name:"twitter:image:src",content:"https:"+i.bigIcon.src}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https:"+i.appleIcon.src}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"https:"+i.favicon32.src}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"https:"+i.favicon16.src}),l.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossOrigin:"anonymous"}))},data:b})};w.propTypes={theme:m.a.object};var y=Object(s.withTheme)(w),k=n(152);function C(){var e=o()(["\n*,\n*::after,\n*::before { \n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n  }\n\nbody {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; \n  margin: 0;\n  font-family: Cabin;\n  overflow-x: hidden;\n}\n"]);return C=function(){return e},e}n.d(t,"a",function(){return S});var q=Object(s.createGlobalStyle)(C());f()({ssrFadeout:!0});var S=function(e){function t(t){var n;return(n=e.call(this,t)||this).onOpenModal=function(){n.setState({open:!0})},n.onCloseModal=function(){n.setState({open:!1})},n.state={open:!1,onOpenModal:n.onOpenModal,onCloseModal:n.onCloseModal},n}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement(c.Fragment,null,l.a.createElement(q,null),l.a.createElement(s.ThemeProvider,{theme:{colors:h.a}},l.a.createElement(k.a.Provider,{value:this.state},l.a.createElement(u.a,null,l.a.createElement(y,null),e))))},t}(l.a.Component);S.propTypes={children:m.a.node.isRequired}},166:function(e){e.exports={data:{contentfulSiteHeader:{headerTitle:"Małgorzata Małaczek",headerTexts:["Treningi personalne","Prowadzenie zajęć z Yogi","Układanie diety"],headerImage:{fluid:{src:"//images.ctfassets.net/1skuj8bidqs2/53HbdgwP6rYVGehSXrcdpx/3f2216209ca7d379efc573552ab2b128/trener.png?w=800&q=100"}},headerBackground:{fluid:{src:"//images.ctfassets.net/1skuj8bidqs2/7orLdboQQowIUs22KAW4U/9f956a4c000ffa0a8b9b5981f98f554e/bg1.png?w=1920&q=50"}}}}}},167:function(e){e.exports={data:{contentfulSiteHeader:{navigationItems:["O mnie","Oferta","Cennik","Kontakt"],navigationTitle:"Trener Personalny",navigationBackground:{fluid:{src:"//images.ctfassets.net/1skuj8bidqs2/7o3ZQrYWbg9KhM5vpM7wMC/7bfac3810b9cd6105a7de8a626c7d661/navbg.png?w=1920&q=50"}}}}}},168:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(149),o=n(150),c=n(4),l=n.n(c),s=i.default.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-1ubtufs-0"})(["padding:1em;background:white;color:",";display:flex;flex:0 1 auto;flex-direction:column;justify-content:center;align-items:center;position:fixed;height:100vh;z-index:-101;bottom:0;width:100%;@media (min-width:450px){height:600px;}"],function(e){return e.theme.colors.primary}),d=(i.default.img.withConfig({displayName:"Footer__RenponsiveLogo",componentId:"sc-1ubtufs-1"})(["width:100px;height:25px;@media (min-width:400px){width:150px;height:35px;}"]),i.default.div.withConfig({displayName:"Footer__Map",componentId:"sc-1ubtufs-2"})([".gmap_canvas{overflow:hidden;background:none!important;width:100vw;height:auto;max-height:400px;box-shadow:0 2px 2px rgba(0,0,0,0.2);border-radius:0px;margin-bottom:3rem;@media (min-width:450px){height:450px;width:450px;border-radius:10px;margin-bottom:0;}}"]));l.a.string.isRequired,l.a.string.isRequired,l.a.string;t.a=function(){return r.a.createElement(s,null,r.a.createElement(o.Flex,{justifyContent:"space-evenly",flexWrap:"wrap",style:{width:"80%"}},r.a.createElement(d,null,r.a.createElement("div",{className:"gmap_canvas"},r.a.createElement("iframe",{title:"Google Map",width:"500",height:"500",id:"gmap_canvas",src:"https://maps.google.com/maps?q=hasta%20la%20vista&t=&z=13&ie=UTF8&iwloc=&output=embed",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"}))),r.a.createElement(o.Flex,{justifyContent:"center",alignItems:"center",flexDirection:"column"},r.a.createElement(o.Text,{pb:1,style:{textTransform:"uppercase"}},r.a.createElement("span",null,"Trener Personalny")),r.a.createElement(o.Text,{mt:2,fontSize:4},r.a.createElement("span",null,"Małgorzata Małaczek")),r.a.createElement(o.Text,{pb:1,mb:2},r.a.createElement("span",null,"malaczek.malgorzata@gmail.com")),r.a.createElement(o.Text,{pb:1,style:{textTransform:"uppercase",textAlign:"center"}},r.a.createElement("p",null,"Treningi prowadzę na obiekcie"),r.a.createElement("span",null,"Hasta La Vista")))))}},169:function(e,t,n){"use strict";var a=n(166),r=n(0),i=n.n(r),o=n(151),c=n(150),l=n(182),s=n(149),d=n(155),m=n(152),u=function(){return i.a.createElement(m.a.Consumer,null,function(e){return i.a.createElement(c.Button,{onClick:function(){return e.onOpenModal()},bg:"secondary",ml:[0,3,3],mt:[2,2,2],px:[2,4,4],py:[2,2,3],borderRadius:"25px"},i.a.createElement(c.Text,{fontSize:[1,2,3]},"Napisz do mnie!"))})},p=s.default.div.withConfig({displayName:"Landing__PhotoContainer",componentId:"sc-1gx8qel-0"})(["width:50%;order:1;@media (min-width:450px){order:2;width:25%;}"]),f=s.default.div.withConfig({displayName:"Landing__HeadingContainer",componentId:"sc-1gx8qel-1"})(["width:50%;text-align:center;order:2;@media (min-width:450px){order:1;}@media screen and (max-width:40em){z-index:1;width:100%;form{text-align:left;}}"]);t.a=function(){return i.a.createElement(o.a,{query:"1075291264",render:function(e){var t=e.contentfulSiteHeader,n=t.headerTitle,a=t.headerTexts,r=t.headerBackground,o=t.headerImage;return i.a.createElement(d.c,{id:"home",backgroundSrc:r.fluid.src},i.a.createElement(d.b,null,i.a.createElement(c.Flex,{alignItems:"center",flexWrap:"wrap",justifyContent:"center"},i.a.createElement(f,null,i.a.createElement(c.Heading,{as:"h1",color:"white",fontSize:[5,6,8],mb:[3,4,5]},i.a.createElement(c.Text,null,""+n)),i.a.createElement(c.Heading,{as:"h2",color:"white",fontSize:[4,5,6],mb:[3,5]},i.a.createElement(l.a,null,a.map(function(e){return i.a.createElement(c.Text,{width:[300,500],key:e},e)}))),i.a.createElement(u,null)),i.a.createElement(p,null,i.a.createElement(c.Image,{src:o.fluid.src})))))},data:a})}},170:function(e,t,n){"use strict";n(162),n(34),n(74),n(55),n(35),n(180);var a=n(167),r=n(0),i=n.n(r),o=n(151),c=n(181),l=n.n(c),s=n(150),d=n(149),m=n(154),u=n(174),p=n.n(u),f=n(4),g=n.n(f),h=n(156),b=function(e){var t=e.onClick,n=e.selected,a=e.children;return i.a.createElement(s.Box,{ml:[2,3],color:"background",fontSize:[2,3]},i.a.createElement(h.a,{onClick:t,selected:n},a))};b.propTypes={onClick:g.a.func,selected:g.a.bool,children:g.a.node};var x=b,E=Object(d.default)(l.a).withConfig({displayName:"Header__HeaderContainer",componentId:"wbdpz5-0"})(["z-index:9;.headroom--pinned{background:url(",");background-repeat:no-repeat;background-size:cover;box-shadow:rgba(0,0,0,0.3) 0px 1px 2px;}position:absolute;width:100%;"],function(e){return e.backgroundSrc});t.a=function(){return i.a.createElement(o.a,{query:"3944862541",render:function(e){var t=e.contentfulSiteHeader,n=t.navigationItems,a=t.navigationTitle,o=t.navigationBackground;return i.a.createElement(E,{backgroundSrc:o.fluid.src},i.a.createElement(p.a,{top:!0},i.a.createElement(s.Flex,{flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",p:3},i.a.createElement(m.c,null,function(e){var t=function(e){return Object.entries(e).reduce(function(e,t){var n,a=t[0],r=t[1];return"home"===a?Object.assign({},e,{home:r}):Object.assign({},e,{links:[].concat(e.links,[{name:(n=a,n&&n[0].toUpperCase()+n.slice(1)),value:r}])})},{links:[],home:null})}(e.allLinks),o=t.home,c=t.links,l=o&&i.a.createElement(x,{key:o.name,onClick:o.onClick},i.a.createElement(s.Heading,{textAlign:"center",as:"h3",color:"white",fontSize:[3,4,5]},a)),d=c.map(function(e,t){var a=e.name,r=e.value;return i.a.createElement(x,{key:a,onClick:r.onClick,selected:r.selected},n[t])});return i.a.createElement(r.Fragment,null,l,i.a.createElement(s.Flex,{mr:[0,3,5]},d))}))))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-start-js-a11a42e246fcf9d2addc.js.map