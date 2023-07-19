import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"

const Portfolio = ({ images, handlePortfolioClick }) => {
  const portfolioItems = images.map((image, index) => {
    const altText = image.node.name.replace("-", " ");
    return (
    <div className="col-lg-4 col-sm-6 gallery-image" key={index}>
      <a
        className="portfolio-box"
        href={getSrc(image.node.childImageSharp.gatsbyImageData)}
        onClick={handlePortfolioClick.bind(this, index)}
      >
        <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt={altText} />
      </a>
    </div>
    );
  })

  return (
    <section id="portfolio">
      <div className="container-fluid p-0">
        <div className="row g-0">{portfolioItems}</div>
      </div>
    </section>
  )
}

Portfolio.propTypes = {
  images: PropTypes.array.isRequired,
  handlePortfolioClick: PropTypes.func.isRequired,
}

export default Portfolio
