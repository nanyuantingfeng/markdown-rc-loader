webpackJsonp([1],{171:function(e,t,a){a(115),e.exports=a(373)},373:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var n=l(a(51)),r=l(a(150)),u=l(a(388));a(389),r.default.render(n.default.createElement(u.default,null),document.getElementById("root"))},388:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.className,l=e.style;return r.default.createElement("div",{className:t,style:l},r.default.createElement("center",null,r.default.createElement("h1",null,r.default.createElement("img",{id:"logo",src:a(157),alt:"Markdown Component Loader"})),r.default.createElement("p",null,"A Webpack loader that turns Markdown into dynamic, stateless React components!"),r.default.createElement("p",null,r.default.createElement("a",{className:"bubble-link github-link",href:"https://github.com/ticky/markdown-component-loader"},"Check it out on GitHub"))),r.default.createElement("h3",{id:"welcomemdx"},r.default.createElement("a",{className:"header-anchor",href:"#welcomemdx","aria-hidden":"true"},"🔗")," welcome.mdx"),r.default.createElement("pre",null,r.default.createElement("code",{className:"language-markdown"},r.default.createElement("span",{className:"emphasis"},"Hey there **","{{ props.who }}","** ✌🏼"),r.default.createElement("br",null))),r.default.createElement("h3",{id:"appjsx"},r.default.createElement("a",{className:"header-anchor",href:"#appjsx","aria-hidden":"true"},"🔗")," app.jsx"),r.default.createElement("pre",null,r.default.createElement("code",{className:"language-jsx"},r.default.createElement("span",{className:"emphasis"},"import Welcome from './welcome.mdx';"),r.default.createElement("br",null)," ",r.default.createElement("br",null),"ReactDOM.render(",r.default.createElement("br",null),r.default.createElement("span",{className:"emphasis"},'  <Welcome who="'+(e.who||"Monkey Magic")+'" />,'),r.default.createElement("br",null),"  document.getElementById('app')",r.default.createElement("br",null),");",r.default.createElement("br",null))),r.default.createElement("h3",{id:"rendered"},r.default.createElement("a",{className:"header-anchor",href:"#rendered","aria-hidden":"true"},"🔗")," Rendered:"),r.default.createElement("pre",null,r.default.createElement("code",{className:"language-html"},r.default.createElement("span",{className:"hljs-tag"},"<",r.default.createElement("span",{className:"hljs-name"},"div")," ",r.default.createElement("span",{className:"hljs-attr"},"id"),"=",r.default.createElement("span",{className:"hljs-string"},'"app"'),">"),r.default.createElement("br",null),r.default.createElement("span",{className:"emphasis"},"  <p>Hey there <strong>"+(e.who||"Monkey Magic")+"</strong> ✌🏼</p>"),r.default.createElement("br",null),r.default.createElement("span",{className:"hljs-tag"},"</",r.default.createElement("span",{className:"hljs-name"},"div"),">"),r.default.createElement("br",null))),r.default.createElement("h2",{id:"what-else-can-it-do"},r.default.createElement("a",{className:"header-anchor",href:"#what-else-can-it-do","aria-hidden":"true"},"🔗")," What else can it do?"),r.default.createElement("p",null,"Use JSX within Markdown. Plus import objects such as shared snippets, fancy library functions or even whole React components, using YAML front-matter:"),r.default.createElement("pre",null,r.default.createElement("code",{className:"language-markdown"},"---",r.default.createElement("br",null),r.default.createElement("span",{className:"emphasis"},"imports:"),r.default.createElement("br",null),r.default.createElement("span",{className:"emphasis"},"  numberFormat: number-format"),r.default.createElement("br",null),r.default.createElement("span",{className:"hljs-section"},r.default.createElement("span",{className:"emphasis"},"  Button: ui/button"),r.default.createElement("br",null),"---"),r.default.createElement("br",null),r.default.createElement("br",null),"You are visitor number ",r.default.createElement("span",{className:"emphasis"},"{{ numberFormat(1000000) }}"),"!",r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement("span",{className:"emphasis"},'<Button path="/browser-info">Details</Button>'),r.default.createElement("br",null))),r.default.createElement("p",null,"Destructured imports, with some added single quotes:"),r.default.createElement("pre",null,r.default.createElement("code",{className:"language-markdown"},"---",r.default.createElement("br",null),"imports:",r.default.createElement("br",null),r.default.createElement("span",{className:"hljs-section"},r.default.createElement("span",{className:"emphasis"},"  '{ window, document }': global"),r.default.createElement("br",null),"---"),r.default.createElement("br",null),r.default.createElement("br",null),"Hello, your user agent is ",r.default.createElement("span",{className:"emphasis"},"{{ window.navigator.userAgent }}"),".",r.default.createElement("br",null))),r.default.createElement("h2",{id:"give-it-a-go"},r.default.createElement("a",{className:"header-anchor",href:"#give-it-a-go","aria-hidden":"true"},"🔗")," Give it a go!"),r.default.createElement("p",null,"Want to see exactly what Markdown Component Loader will generate when it translates the mdx into a stateless React component?"),r.default.createElement("div",{className:"repl-image"},r.default.createElement("div",null,r.default.createElement("a",{className:"bubble-link white-bubble",href:"repl.html"},"Launch editor"))),r.default.createElement("h2",{id:"get-started"},r.default.createElement("a",{className:"header-anchor",href:"#get-started","aria-hidden":"true"},"🔗")," Get started"),r.default.createElement("p",null,"Check out the ",r.default.createElement("a",{href:"https://github.com/ticky/markdown-component-loader"},"GitHub Readme")," for how to get started, including details on how to add styles and event handlers to the DOM nodes generated by the markdown, and other options for customizing the loader."),r.default.createElement("center",null,r.default.createElement("a",{className:"bubble-link github-link",href:"https://github.com/ticky/markdown-component-loader"},"Check it out on GitHub"),r.default.createElement("hr",null),r.default.createElement("p",null,"Made with 💜 by ",r.default.createElement("a",{href:"https://twitter.com/ticky"},"@ticky"))))}Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(51)),u=l(a(156));n.propTypes={className:u.default.string,style:u.default.object},n.title="Markdown Component Loader",t.default=n},389:function(e,t){}},[171]);
//# sourceMappingURL=site.js.map