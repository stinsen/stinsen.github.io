/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ title, pathname, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
            googleSiteVerification
            bingSiteVerification
          }
        }
      }
    `
  )

  const seoTitle = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title;
  const seoUrl = `${site.siteMetadata.siteUrl}${pathname}`;

  return (
    <>
      <html lang="sv" />
      <title>{seoTitle}</title>
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="author" content={site.siteMetadata.author} />
      <meta name="google-site-verification" content={site.siteMetadata.googleSiteVerification} />
      <meta name="msvalidate.01" content={site.siteMetadata.bingSiteVerification} />
      <meta name="og:title" content={seoTitle} />
      <meta name="og:url" content={seoUrl} />
      <meta name="og:description" content={site.siteMetadata.description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={site.siteMetadata.description} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      {children}
    </>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  pathname: PropTypes.string.isRequired
}

export default Seo
