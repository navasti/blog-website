(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CZVI:function(A,e,a){"use strict";var t=a("q1tI"),c=a.n(t),s=a("Wbzz"),i=a("9eSz"),r=a.n(i),l=a("BLzl"),n=a("/kxI"),o=a("ChEw"),d=a("x863"),E=a("ezmu"),g=a("2Te1"),f=a("b+5I");e.a=function(A){var e=A.title,a=A.author,t=A.slug,i=A.date,m=A.body,j=A.fluid,b=A.tags;return c.a.createElement(l.a,null,c.a.createElement(s.Link,{to:t},c.a.createElement(r.a,{className:"card-image-top",fluid:j})),c.a.createElement(n.a,null,c.a.createElement(o.a,null,c.a.createElement(s.Link,{to:t,style:{color:"black",fontWeight:"bold"}},e)),c.a.createElement(d.a,{style:{marginBottom:"10px"}},c.a.createElement("span",{className:"text-info"},i),c.a.createElement("br",null),"Author ",c.a.createElement("span",{className:"text-info"},a)),c.a.createElement(E.a,null,m),c.a.createElement("ul",{className:"post-tags"},b.map((function(A){return c.a.createElement("li",{key:A},c.a.createElement(s.Link,{to:"/tag/"+Object(f.slugify)(A)},c.a.createElement(g.a,{style:{padding:"5px 8px",fontWeight:"200",fontSize:"13px"},color:"primary"},A)))}))),c.a.createElement(s.Link,{to:t,className:"btn btn-outline-primary float-right"},"Read more")))}},Co3s:function(A,e,a){"use strict";a("XfO3"),a("HEwt");var t=a("q1tI"),c=a.n(t),s=a("wx14"),i=a("zLVn"),r=a("17x9"),l=a.n(r),n=a("TSYQ"),o=a.n(n),d=a("33Jr"),E={children:l.a.node,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,size:l.a.string,tag:d.h,listTag:d.h,"aria-label":l.a.string},g=function(A){var e,a=A.className,t=A.listClassName,r=A.cssModule,l=A.size,n=A.tag,E=A.listTag,g=A["aria-label"],f=Object(i.a)(A,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),m=Object(d.e)(o()(a),r),j=Object(d.e)(o()(t,"pagination",((e={})["pagination-"+l]=!!l,e)),r);return c.a.createElement(n,{className:m,"aria-label":g},c.a.createElement(E,Object(s.a)({},f,{className:j})))};g.propTypes=E,g.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var f=g,m={active:l.a.bool,children:l.a.node,className:l.a.string,cssModule:l.a.object,disabled:l.a.bool,tag:d.h},j=function(A){var e=A.active,a=A.className,t=A.cssModule,r=A.disabled,l=A.tag,n=Object(i.a)(A,["active","className","cssModule","disabled","tag"]),E=Object(d.e)(o()(a,"page-item",{active:e,disabled:r}),t);return c.a.createElement(l,Object(s.a)({},n,{className:E}))};j.propTypes=m,j.defaultProps={tag:"li"};var b=j,B=(a("LK8F"),{"aria-label":l.a.string,children:l.a.node,className:l.a.string,cssModule:l.a.object,next:l.a.bool,previous:l.a.bool,first:l.a.bool,last:l.a.bool,tag:d.h}),p=function(A){var e,a=A.className,t=A.cssModule,r=A.next,l=A.previous,n=A.first,E=A.last,g=A.tag,f=Object(i.a)(A,["className","cssModule","next","previous","first","last","tag"]),m=Object(d.e)(o()(a,"page-link"),t);l?e="Previous":r?e="Next":n?e="First":E&&(e="Last");var j,b=A["aria-label"]||e;l?j="‹":r?j="›":n?j="«":E&&(j="»");var B=A.children;return B&&Array.isArray(B)&&0===B.length&&(B=null),f.href||"a"!==g||(g="button"),(l||r||n||E)&&(B=[c.a.createElement("span",{"aria-hidden":"true",key:"caret"},B||j),c.a.createElement("span",{className:"sr-only",key:"sr"},b)]),c.a.createElement(g,Object(s.a)({},f,{className:m,"aria-label":b}),B)};p.propTypes=B,p.defaultProps={tag:"a"};var u=p;e.a=function(A){var e=A.currentPage,a=A.numberOfPages,t=1===e,s=e===a,i=e-1==1?"/":"/page/"+(e-1),r="/page/"+(e+1);return c.a.createElement(f,{"aria-label":"Page navigation"},t?c.a.createElement(b,{disabled:!0},c.a.createElement(u,{previous:!0,href:i})):c.a.createElement(b,null,c.a.createElement(u,{previous:!0,href:i})),Array.from({length:a},(function(A,a){return e===a+1?c.a.createElement(b,{active:!0,key:"page-number"+(a+1)},c.a.createElement(u,{href:"/"+(0===a?"":"page/"+(a+1))},a+1)):c.a.createElement(b,{key:"page-number"+(a+1)},c.a.createElement(u,{href:"/"+(0===a?"":"page/"+(a+1))},a+1))})),s?c.a.createElement(b,{disabled:!0},c.a.createElement(u,{next:!0,href:r})):c.a.createElement(b,null,c.a.createElement(u,{next:!0,href:r})))}},QisM:function(A){A.exports=JSON.parse('{"data":{"allMarkdownRemark":{"totalCount":4,"edges":[{"node":{"id":"208a46bc-8914-536e-9d09-7b4a0ae25685","frontmatter":{"title":"Fourth Post - JavaScript","date":"Jan 24th 2020","author":"Jane Doe","tags":["javascript","code","objected","programming"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgADBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHnBZBhR//EABgQAAIDAAAAAAAAAAAAAAAAAAEQABFB/9oACAEBAAEFAhUKwr//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAYEAEAAwEAAAAAAAAAAAAAAAABACBRgf/aAAgBAQABPyHQ7HkWh//aAAwDAQACAAMAAAAQw+//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAGhAAAwADAQAAAAAAAAAAAAAAAAERITFBUf/aAAgBAQABPxCSSTWrQu+DKcDuj2f/2Q==","aspectRatio":1.7857142857142858,"src":"/static/cc2327d4cce58677ea1a5f43d15df477/4fe8c/javascript.jpg","srcSet":"/static/cc2327d4cce58677ea1a5f43d15df477/aabdf/javascript.jpg 150w,\\n/static/cc2327d4cce58677ea1a5f43d15df477/9dc27/javascript.jpg 300w,\\n/static/cc2327d4cce58677ea1a5f43d15df477/4fe8c/javascript.jpg 600w,\\n/static/cc2327d4cce58677ea1a5f43d15df477/9842e/javascript.jpg 900w,\\n/static/cc2327d4cce58677ea1a5f43d15df477/47498/javascript.jpg 1200w,\\n/static/cc2327d4cce58677ea1a5f43d15df477/ec6c5/javascript.jpg 1280w","sizes":"(max-width: 600px) 100vw, 600px"}}}},"fields":{"slug":"fourth-post-javascript"},"excerpt":"Hello! Today we\'re going to talk about javascript.\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque libero, sollicitudin…"}},{"node":{"id":"9619c593-ac27-5c6a-8af7-dd1ef67d5021","frontmatter":{"title":"Third Post - CSS","date":"Jan 18th 2020","author":"John Doe","tags":["css","design","styles"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAeLVrzxjmn//xAAYEAEBAQEBAAAAAAAAAAAAAAAAARECQf/aAAgBAQABBQLF5Yjyv//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AYf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFH/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAERITH/2gAIAQEAAT8hODHAWx0Gl4f/2gAMAwEAAgADAAAAELcv/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8Qs//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxAcI//EABkQAQEAAwEAAAAAAAAAAAAAAAEAETFBIf/aAAgBAQABPxAfvnOSoBsJFhi4iaTVnXAv/9k=","aspectRatio":1.5151515151515151,"src":"/static/c1be5d4fe98b18c2db549e0eba30cf51/4fe8c/css.jpg","srcSet":"/static/c1be5d4fe98b18c2db549e0eba30cf51/aabdf/css.jpg 150w,\\n/static/c1be5d4fe98b18c2db549e0eba30cf51/9dc27/css.jpg 300w,\\n/static/c1be5d4fe98b18c2db549e0eba30cf51/4fe8c/css.jpg 600w,\\n/static/c1be5d4fe98b18c2db549e0eba30cf51/9842e/css.jpg 900w,\\n/static/c1be5d4fe98b18c2db549e0eba30cf51/47498/css.jpg 1200w,\\n/static/c1be5d4fe98b18c2db549e0eba30cf51/ec6c5/css.jpg 1280w","sizes":"(max-width: 600px) 100vw, 600px"}}}},"fields":{"slug":"third-post-css"},"excerpt":"Hello! Today\'s topis will be CSS and its frameworks.\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque libero…"}},{"node":{"id":"7f129c81-be04-537b-a281-14e2af7d1986","frontmatter":{"title":"Second Post - HTML","date":"Jan 11th 2020","author":"Jane Doe","tags":["seo","html","code","semantic"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQABBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFwJLiEbJP/xAAbEAACAwADAAAAAAAAAAAAAAABAgADERIUMv/aAAgBAQABBQInF71mi0Yj8oKVi+f/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAEBAAIDAAAAAAAAAAAAAAABABEhMVGB/9oACAEBAAY/AlLgh7Ly3mL/xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhUTFBcYH/2gAIAQEAAT8h1oFlFWnyI1BitEx0lPJ/ajojgKn/2gAMAwEAAgADAAAAEBA//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Qh//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAgBAgEBPxC4j//EAB4QAQACAgEFAAAAAAAAAAAAAAEAESExQVFhkaGx/9oACAEBAAE/ELxCiXrBEFfnSv7LXBQj3LmE8S2sTp7giqW6GHiZDggLwYn/2Q==","aspectRatio":1.5,"src":"/static/e3f15464b9d10606f72d09fec980944b/4fe8c/html.jpg","srcSet":"/static/e3f15464b9d10606f72d09fec980944b/aabdf/html.jpg 150w,\\n/static/e3f15464b9d10606f72d09fec980944b/9dc27/html.jpg 300w,\\n/static/e3f15464b9d10606f72d09fec980944b/4fe8c/html.jpg 600w,\\n/static/e3f15464b9d10606f72d09fec980944b/9842e/html.jpg 900w,\\n/static/e3f15464b9d10606f72d09fec980944b/47498/html.jpg 1200w,\\n/static/e3f15464b9d10606f72d09fec980944b/ec6c5/html.jpg 1280w","sizes":"(max-width: 600px) 100vw, 600px"}}}},"fields":{"slug":"second-post-html"},"excerpt":"Hi there! Today\'s topis will be HTML.\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque libero, sollicitudin vitae nibh…"}}]}}}')},RXBc:function(A,e,a){"use strict";a.r(e);var t=a("QisM"),c=a("q1tI"),s=a.n(c),i=a("Bl7J"),r=a("vrFN"),l=a("Wbzz"),n=a("CZVI"),o=a("Co3s"),d="3550142052";e.default=function(){var A;return s.a.createElement(i.a,{pageTitle:"Blog Website"},s.a.createElement(r.a,{title:"Home"}),s.a.createElement(l.StaticQuery,{query:d,render:function(e){return A=Math.ceil(e.allMarkdownRemark.totalCount/3),s.a.createElement("div",null,e.allMarkdownRemark.edges.map((function(A){var e=A.node;return s.a.createElement(n.a,{key:e.id,title:e.frontmatter.title,author:e.frontmatter.author,slug:e.fields.slug,date:e.frontmatter.date,tags:e.frontmatter.tags,body:e.excerpt,fluid:e.frontmatter.image.childImageSharp.fluid})})),s.a.createElement(o.a,{currentPage:1,numberOfPages:A}))},data:t}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1c315d2cbfee585fef23.js.map