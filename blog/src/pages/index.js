import React from "react"
import { graphql, Link } from "gatsby"

import { Layout } from "../components/Layout/Layout"
import { Seo } from "../components/Seo/Seo"
import { List, ListItem } from "../components/List"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <List width={[1, 1 / 2, 2 / 3]} p={2}>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <ListItem p={3} key={edge.node.id}>
          <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
          <div>
            <img src={edge.node.heroImage.fluid.src} alt="Hero" />
          </div>
          <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
        </ListItem>
      ))
    }
    </List>
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
        heroImage{
					fluid(maxWidth:600) {
            src
					}
        }
        body{
					childMarkdownRemark{
						excerpt
          }
        }
      }
    }
  }
}
`