const { slugify } = require('./src/util/utilityFunctions');
const path = require('path')
const authors = require('./src/util/authors')
const _ = require('lodash')

exports.onCreateNode = ({ node, actions }) => {
    const {createNodeField} = actions
    if(node.internal.type === "MarkdownRemark"){
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle
        })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const templates = {
        singlePost: path.resolve('src/templates/single-post.js'),
        tagsPage: path.resolve('src/templates/tags-page.js'),
        tagPost: path.resolve('src/templates/tag-post.js'),
        authorPosts: path.resolve('src/templates/author-posts.js'),
        postList: path.resolve('src/templates/post-list.js')
    }

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            author
                            tags
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `).then(res=>{
        const posts = res.data.allMarkdownRemark.edges

        // Create single post page
        posts.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: templates.singlePost,
                context: {
                    // Passing slug for template to use to get post
                    slug: node.fields.slug,
                    imageUrl: authors.find(author => author.name === node.frontmatter.author).imageUrl
                }
            })
        })

        // Get all tags
        let tags = [];
        _.each(posts, edge => {
            if(_.get(edge, 'node.frontmatter.tags')){
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        })

        // Avoid duplicating tag names
        let tagPostCounts = {};
        tags.forEach(tag=>{
            tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
        })
        tags = _.uniq(tags)

        // Create tags page
        createPage({
            path: '/tags',
            component: templates.tagsPage,
            context: {
                tags,
                tagPostCounts
            }
        })

        // Create tag post page
        tags.forEach(tag => {
            createPage({
                path: `/tag/${slugify(tag)}`,
                component: templates.tagPost,
                context: {
                    tag
                }
            })
        })

        // Pagination
        const postsPerPage = 3;
        const numberOfPages = Math.ceil(posts.length / postsPerPage);
        Array.from({ length: numberOfPages }).forEach((_, index)=>{
            const isFirstPage = index === 0
            const currentPage = index + 1
            if(isFirstPage) return
            createPage({
                path: `/page/${currentPage}`,
                component: templates.postList,
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    currentPage,
                    numberOfPages
                }
            })
        })

        // Create author page
        authors.forEach(author=>{
            createPage({
                path: `/author/${slugify(author.name)}`,
                component: templates.authorPosts,
                context: {
                    authorName: author.name,
                    imageUrl: author.imageUrl
                }
            })
        })
    })

    .catch(err => {
        throw new Error(err)
    })
}