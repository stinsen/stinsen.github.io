import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>Finns inte</h1>
    <p>Sidan du söker finns inte...</p>
  </Layout>
)

export default NotFoundPage


export const Head = ({location}) => (
  <Seo title="404: Saknas" pathname={location.pathname}/>
)
