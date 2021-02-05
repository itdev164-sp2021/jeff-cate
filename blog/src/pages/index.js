import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h2>Blogs</h2>
    <ul>
      {
        data.allContentfulBlogPost.edges.map(edge => (
          <li>
            <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
          </li>
        ))
      }
    </ul>
    <h2>Navigation</h2>
    <ul class="nav-list">
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/contacts/">Contact</Link></li>
      <li><Link to="/page-2/">Go to page 2</Link> </li>
      <li><Link to="/using-typescript/">Go to "Using TypeScript"</Link></li>
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
`
