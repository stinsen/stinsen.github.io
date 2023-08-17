import React from "react"
import PropTypes from "prop-types"
import { Carousel } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"

import "./carousel.scss"

const PortfolioCarousel = ({ images, current }) => {
  const carouselItems = images.map((image, index) => {
    const altText = image.node.name.replaceAll("-", " ");
    return (
    <Carousel.Item key={index}>
    <figure>
      <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt={altText} />
      <figcaption>
        <div className="bottom-bar">
          <div className="counter">
            {index + 1} av {images.length}
          </div>
        </div>
      </figcaption>
    </figure>
  </Carousel.Item>
  );
  }

  )

  return (
    <Carousel
      interval={null}
      indicators={false}
      defaultActiveIndex={current}
      slide={false}
    >
      {carouselItems}
    </Carousel>
  )
}

PortfolioCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
}

export default PortfolioCarousel
