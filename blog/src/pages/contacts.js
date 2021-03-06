import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby'

import { Layout } from "../components/Layout/Layout";
import { Image } from "../components/Image/";
import { Seo } from "../components/Seo/Seo";

const Contact = ({ data }) => {
    const { name, company, address } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Contact" />
            <h1>Contact Us</h1>
            <p>Please send all inquiries to: </p>
            <div>{company}</div>
            <div>{`C/O ${name}`}</div>
            <div>{address}</div>

            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} >
                <Image />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}
export default Contact

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                    name
                    company
                    address
            }
        }
    }
}
`