import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/Layout/Layout';
import { H1 } from '../components/Heading'

const BlogPost = ({ data }) => {
    const { title, body} = data.contentfulBlogPost;

    return (
        <Layout>
        <Link to="/">back to home</Link>
            <H1>{title}</H1>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        </Layout>
    );
}
export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            slug
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`