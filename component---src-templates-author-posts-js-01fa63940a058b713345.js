(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CZVI:function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("9eSz"),l=a.n(i),s=a("BLzl"),m=a("/kxI"),c=a("ChEw"),u=a("x863"),p=a("ezmu"),w=a("2Te1"),h=a("b+5I");e.a=function(t){var e=t.title,a=t.author,n=t.slug,i=t.date,f=t.body,d=t.fluid,g=t.tags;return r.a.createElement(s.a,null,r.a.createElement(o.Link,{to:n},r.a.createElement(l.a,{className:"card-image-top",fluid:d})),r.a.createElement(m.a,null,r.a.createElement(c.a,null,r.a.createElement(o.Link,{to:n,style:{color:"black",fontWeight:"bold"}},e)),r.a.createElement(u.a,{style:{marginBottom:"10px"}},r.a.createElement("span",{className:"text-info"},i),r.a.createElement("br",null),"Author ",r.a.createElement("span",{className:"text-info"},a)),r.a.createElement(p.a,null,f),r.a.createElement("ul",{className:"post-tags"},g.map((function(t){return r.a.createElement("li",{key:t},r.a.createElement(o.Link,{to:"/tag/"+Object(h.slugify)(t)},r.a.createElement(w.a,{style:{padding:"5px 8px",fontWeight:"200",fontSize:"13px"},color:"primary"},t)))}))),r.a.createElement(o.Link,{to:n,className:"btn btn-outline-primary float-right"},"Read more")))}},V3SN:function(t,e,a){"use strict";a.r(e),a.d(e,"authorQuery",(function(){return m}));a("f3/d"),a("dRSK");var n=a("q1tI"),r=a.n(n),o=a("Bl7J"),i=a("CZVI"),l=a("vgN0"),s=a.n(l);e.default=function(t){var e=t.data,a=t.pageContext,n=e.allMarkdownRemark.totalCount,l=s.a.find((function(t){return t.name===a.authorName})),m=n+" post"+(1===n?"":"s")+" by "+a.authorName;return r.a.createElement(o.a,{pageTitle:m,postAuthor:l,authorImageFluid:e.file.childImageSharp.fluid},e.allMarkdownRemark.edges.map((function(t){var e=t.node;return r.a.createElement(i.a,{key:e.id,slug:e.fields.slug,title:e.frontmatter.title,author:e.frontmatter.author,date:e.frontmatter.date,body:e.excerpt,tags:e.frontmatter.tags,fluid:e.frontmatter.image.childImageSharp.fluid})})))};var m="2041678219"},vgN0:function(t,e){t.exports=[{name:"John Doe",imageUrl:"john.jpg",bio:"John has been in a front-end an UI designer for over 10 years, he is a brilliant artist",facebook:"https://www.facebook.com/",instagram:"https://www.instagram.com/",twitter:"https://www.twitter.com/",pinterest:"https://www.pinterest.com/",github:"https://www.github.com/"},{name:"Jane Doe",imageUrl:"jane.jpg",bio:"Jane is a back-end developer, she specializes is seciourity and her favourite stack is the MERN stack",facebook:"https://www.facebook.com/",instagram:"https://www.instagram.com/",twitter:"https://www.twitter.com/",pinterest:"https://www.pinterest.com/",github:"https://www.github.com/"}]}}]);
//# sourceMappingURL=component---src-templates-author-posts-js-01fa63940a058b713345.js.map