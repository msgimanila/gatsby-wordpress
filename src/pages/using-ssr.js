Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@msgimanila 
msgimanila
/
gatsby-wordpress
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
gatsby-wordpress/src/pages/using-ssr.js /
@msgimanila
msgimanila Update using-ssr.js
Latest commit ff1b9b1 2 days ago
 History
 2 contributors
@msgimanila@gatsby-cloud
48 lines (44 sloc)  1.1 KB
   
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <Seo title="Using SSR" />
      <h1>SSR page</h1>
      <img
        style={{ width: "300px" }}
        alt="A random dog"
        src={serverData.message}
      />
      <p>Welcome to a server side rendered page with a random dog photo</p>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
          documentation about Server Side Rendering
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
