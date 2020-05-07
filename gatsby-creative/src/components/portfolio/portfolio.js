import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Portfolio = ({ images, handlePortfolioClick }) => {
  const portfolioItems = images.map((image, index) => (
    <div className="col-lg-4 col-sm-6" key={index}>
      <a
        className="portfolio-box"
        href={`img/portfolio/fullsize/${image.node.childImageSharp.fluid.originalName}`}
        onClick={handlePortfolioClick.bind(this, index)}
      >
        <Img fluid={image.node.childImageSharp.fluid} />
      </a>
    </div>
  ))

  return (
    <section id="portfolio">
      <div className="container-fluid p-0">
        <div className="row no-gutters">{portfolioItems}</div>
      </div>
    </section>
  )
}

Portfolio.propTypes = {
  images: PropTypes.array.isRequired,
  handlePortfolioClick: PropTypes.func.isRequired,
}

export default Portfolio
