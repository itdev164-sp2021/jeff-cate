import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const BlogPost = ({ data }) => {
    const { title } = data.contentfulBlogPost;

    return (
        <Layout>
            <h1>{title}</h1>
            <Link to="/">back to home</Link>
        </Layout>
    );
}
export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            slug
        }
    }
`