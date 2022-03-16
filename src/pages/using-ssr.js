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
    const res = await fetch(`https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
       headers: {
    'x-rapidapi-host': 'realtymole-rental-estimate-v1.p.rapidapi.com',
    'x-rapidapi-key': '200dd973e1msh5a061e5a63dcff3p11ae28jsn925fc0050b02'
  }
      props: {},
    }
  }
}
