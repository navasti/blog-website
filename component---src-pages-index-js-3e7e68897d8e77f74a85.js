(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CZVI:function(A,e,a){"use strict";var t=a("q1tI"),s=a.n(t),c=a("Wbzz"),i=a("9eSz"),l=a.n(i),r=a("BLzl"),n=a("/kxI"),o=a("ChEw"),g=a("x863"),E=a("ezmu"),b=a("2Te1"),d=a("b+5I");e.a=function(A){var e=A.title,a=A.author,t=A.slug,i=A.date,f=A.body,m=A.fluid,j=A.tags;return s.a.createElement(r.a,null,s.a.createElement(c.Link,{to:t},s.a.createElement(l.a,{className:"card-image-top",fluid:m})),s.a.createElement(n.a,null,s.a.createElement(o.a,null,s.a.createElement(c.Link,{to:t,style:{color:"black",fontWeight:"bold"}},e)),s.a.createElement(g.a,{style:{marginBottom:"10px"}},s.a.createElement("span",{className:"text-info"},i),s.a.createElement("br",null),"Author ",s.a.createElement("span",{className:"text-info"},a)),s.a.createElement(E.a,null,f),s.a.createElement("ul",{className:"post-tags"},j.map((function(A){return s.a.createElement("li",{key:A},s.a.createElement(c.Link,{to:"/tag/"+Object(d.slugify)(A)},s.a.createElement(b.a,{style:{padding:"5px 8px",fontWeight:"200",fontSize:"13px"},color:"primary"},A)))}))),s.a.createElement(c.Link,{to:t,className:"btn btn-outline-primary float-right"},"Read more")))}},Co3s:function(A,e,a){"use strict";a("XfO3"),a("HEwt");var t=a("q1tI"),s=a.n(t),c=a("wx14"),i=a("zLVn"),l=a("17x9"),r=a.n(l),n=a("TSYQ"),o=a.n(n),g=a("33Jr"),E={children:r.a.node,className:r.a.string,listClassName:r.a.string,cssModule:r.a.object,size:r.a.string,tag:g.h,listTag:g.h,"aria-label":r.a.string},b=function(A){var e,a=A.className,t=A.listClassName,l=A.cssModule,r=A.size,n=A.tag,E=A.listTag,b=A["aria-label"],d=Object(i.a)(A,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),f=Object(g.e)(o()(a),l),m=Object(g.e)(o()(t,"pagination",((e={})["pagination-"+r]=!!r,e)),l);return s.a.createElement(n,{className:f,"aria-label":b},s.a.createElement(E,Object(c.a)({},d,{className:m})))};b.propTypes=E,b.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var d=b,f={active:r.a.bool,children:r.a.node,className:r.a.string,cssModule:r.a.object,disabled:r.a.bool,tag:g.h},m=function(A){var e=A.active,a=A.className,t=A.cssModule,l=A.disabled,r=A.tag,n=Object(i.a)(A,["active","className","cssModule","disabled","tag"]),E=Object(g.e)(o()(a,"page-item",{active:e,disabled:l}),t);return s.a.createElement(r,Object(c.a)({},n,{className:E}))};m.propTypes=f,m.defaultProps={tag:"li"};var j=m,B=(a("LK8F"),{"aria-label":r.a.string,children:r.a.node,className:r.a.string,cssModule:r.a.object,next:r.a.bool,previous:r.a.bool,first:r.a.bool,last:r.a.bool,tag:g.h}),p=function(A){var e,a=A.className,t=A.cssModule,l=A.next,r=A.previous,n=A.first,E=A.last,b=A.tag,d=Object(i.a)(A,["className","cssModule","next","previous","first","last","tag"]),f=Object(g.e)(o()(a,"page-link"),t);r?e="Previous":l?e="Next":n?e="First":E&&(e="Last");var m,j=A["aria-label"]||e;r?m="‹":l?m="›":n?m="«":E&&(m="»");var B=A.children;return B&&Array.isArray(B)&&0===B.length&&(B=null),d.href||"a"!==b||(b="button"),(r||l||n||E)&&(B=[s.a.createElement("span",{"aria-hidden":"true",key:"caret"},B||m),s.a.createElement("span",{className:"sr-only",key:"sr"},j)]),s.a.createElement(b,Object(c.a)({},d,{className:f,"aria-label":j}),B)};p.propTypes=B,p.defaultProps={tag:"a"};var u=p;e.a=function(A){var e=A.currentPage,a=A.numberOfPages,t=1===e,c=e===a,i=e-1==1?"/blog-website/":"/blog-website/page/"+(e-1),l="/blog-website/page/"+(e+1);return s.a.createElement(d,{"aria-label":"Page navigation"},t?s.a.createElement(j,{disabled:!0},s.a.createElement(u,{previous:!0,href:i})):s.a.createElement(j,null,s.a.createElement(u,{previous:!0,href:i})),Array.from({length:a},(function(A,a){return e===a+1?s.a.createElement(j,{active:!0,key:"page-number"+(a+1)},s.a.createElement(u,{href:"/blog-website/"+(0===a?"":"page/"+(a+1))},a+1)):s.a.createElement(j,{key:"page-number"+(a+1)},s.a.createElement(u,{href:"/blog-website/"+(0===a?"":"page/"+(a+1))},a+1))})),c?s.a.createElement(j,{disabled:!0},s.a.createElement(u,{next:!0,href:l})):s.a.createElement(j,null,s.a.createElement(u,{next:!0,href:l})))}},QisM:function(A){A.exports=JSON.parse('{"data":{"allMarkdownRemark":{"totalCount":4,"edges":[{"node":{"id":"208a46bc-8914-536e-9d09-7b4a0ae25685","frontmatter":{"title":"Fourth Post - JavaScript","date":"Jan 24th 2020","author":"Jane Doe","tags":["javascript","code","programming"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgADBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHnBZBhR//EABgQAAIDAAAAAAAAAAAAAAAAAAEQABFB/9oACAEBAAEFAhUKwr//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAYEAEAAwEAAAAAAAAAAAAAAAABACBRgf/aAAgBAQABPyHQ7HkWh//aAAwDAQACAAMAAAAQw+//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAGhAAAwADAQAAAAAAAAAAAAAAAAERITFBUf/aAAgBAQABPxCSSTWrQu+DKcDuj2f/2Q==","aspectRatio":1.7857142857142858,"src":"/blog-website/static/cc2327d4cce58677ea1a5f43d15df477/4fe8c/javascript.jpg","srcSet":"/blog-website/static/cc2327d4cce58677ea1a5f43d15df477/aabdf/javascript.jpg 150w,\\n/blog-website/static/cc2327d4cce58677ea1a5f43d15df477/9dc27/javascript.jpg 300w,\\n/blog-website/static/cc2327d4cce58677ea1a5f43d15df477/4fe8c/javascript.jpg 600w,\\n/blog-website/static/cc2327d4cce58677ea1a5f43d15df477/9842e/javascript.jpg 900w,\\n/blog-website/static/cc2327d4cce58677ea1a5f43d15df477/47498/javascript.jpg 1200w,\\n/blog-website/static/cc2327d4cce58677ea1a5f43d15df477/ec6c5/javascript.jpg 1280w","sizes":"(max-width: 600px) 100vw, 600px"}}}},"fields":{"slug":"fourth-post-javascript"},"excerpt":"Hello! Today we\'re going to talk about javascript.\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque libero, sollicitudin…"}},{"node":{"id":"9619c593-ac27-5c6a-8af7-dd1ef67d5021","frontmatter":{"title":"Third Post - CSS","date":"Jan 18th 2020","author":"John Doe","tags":["css","design","styles"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAeLVrzxjmn//xAAYEAEBAQEBAAAAAAAAAAAAAAAAARECQf/aAAgBAQABBQLF5Yjyv//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AYf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFH/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAERITH/2gAIAQEAAT8hODHAWx0Gl4f/2gAMAwEAAgADAAAAELcv/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8Qs//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxAcI//EABkQAQEAAwEAAAAAAAAAAAAAAAEAETFBIf/aAAgBAQABPxAfvnOSoBsJFhi4iaTVnXAv/9k=","aspectRatio":1.5151515151515151,"src":"/blog-website/static/c1be5d4fe98b18c2db549e0eba30cf51/4fe8c/css.jpg","srcSet":"/blog-website/static/c1be5d4fe98b18c2db549e0eba30cf51/aabdf/css.jpg 150w,\\n/blog-website/static/c1be5d4fe98b18c2db549e0eba30cf51/9dc27/css.jpg 300w,\\n/blog-website/static/c1be5d4fe98b18c2db549e0eba30cf51/4fe8c/css.jpg 600w,\\n/blog-website/static/c1be5d4fe98b18c2db549e0eba30cf51/9842e/css.jpg 900w,\\n/blog-website/static/c1be5d4fe98b18c2db549e0eba30cf51/47498/css.jpg 1200w,\\n/blog-website/static/c1be5d4fe98b18c2db549e0eba30cf51/ec6c5/css.jpg 1280w","sizes":"(max-width: 600px) 100vw, 600px"}}}},"fields":{"slug":"third-post-css"},"excerpt":"Hello! Today\'s topis will be CSS and its frameworks.\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque libero…"}},{"node":{"id":"7f129c81-be04-537b-a281-14e2af7d1986","frontmatter":{"title":"Second Post - HTML","date":"Jan 11th 2020","author":"Jane Doe","tags":["seo","html","code","semantic"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQABBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFwJLiEbJP/xAAbEAACAwADAAAAAAAAAAAAAAABAgADERIUMv/aAAgBAQABBQInF71mi0Yj8oKVi+f/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAEBAAIDAAAAAAAAAAAAAAABABEhMVGB/9oACAEBAAY/AlLgh7Ly3mL/xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhUTFBcYH/2gAIAQEAAT8h1oFlFWnyI1BitEx0lPJ/ajojgKn/2gAMAwEAAgADAAAAEBA//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Qh//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAgBAgEBPxC4j//EAB4QAQACAgEFAAAAAAAAAAAAAAEAESExQVFhkaGx/9oACAEBAAE/ELxCiXrBEFfnSv7LXBQj3LmE8S2sTp7giqW6GHiZDggLwYn/2Q==","aspectRatio":1.5,"src":"/blog-website/static/e3f15464b9d10606f72d09fec980944b/4fe8c/html.jpg","srcSet":"/blog-website/static/e3f15464b9d10606f72d09fec980944b/aabdf/html.jpg 150w,\\n/blog-website/static/e3f15464b9d10606f72d09fec980944b/9dc27/html.jpg 300w,\\n/blog-website/static/e3f15464b9d10606f72d09fec980944b/4fe8c/html.jpg 600w,\\n/blog-website/static/e3f15464b9d10606f72d09fec980944b/9842e/html.jpg 900w,\\n/blog-website/static/e3f15464b9d10606f72d09fec980944b/47498/html.jpg 1200w,\\n/blog-website/static/e3f15464b9d10606f72d09fec980944b/ec6c5/html.jpg 1280w","sizes":"(max-width: 600px) 100vw, 600px"}}}},"fields":{"slug":"second-post-html"},"excerpt":"Hi there! Today\'s topis will be HTML.\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque libero, sollicitudin vitae nibh…"}}]}}}')},RXBc:function(A,e,a){"use strict";a.r(e);var t=a("QisM"),s=a("q1tI"),c=a.n(s),i=a("Bl7J"),l=a("vrFN"),r=a("Wbzz"),n=a("CZVI"),o=a("Co3s"),g="3550142052";e.default=function(){var A;return c.a.createElement(i.a,{pageTitle:"Blog Website"},c.a.createElement(l.a,{title:"Home"}),c.a.createElement(r.StaticQuery,{query:g,render:function(e){return A=Math.ceil(e.allMarkdownRemark.totalCount/3),c.a.createElement("div",null,e.allMarkdownRemark.edges.map((function(A){var e=A.node;return c.a.createElement(n.a,{key:e.id,title:e.frontmatter.title,author:e.frontmatter.author,slug:e.fields.slug,date:e.frontmatter.date,tags:e.frontmatter.tags,body:e.excerpt,fluid:e.frontmatter.image.childImageSharp.fluid})})),c.a.createElement(o.a,{currentPage:1,numberOfPages:A}))},data:t}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-3e7e68897d8e77f74a85.js.map