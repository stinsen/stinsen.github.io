import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import Portfolio from "../components/portfolio/portfolio"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
  }

  handlePortfolioClick(index, e) {
    e.preventDefault()
    this.setModal(true, index)
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Stinsens trädgård" />
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Beskärning och trädgård</h2>
                <hr className="divider light my-4" />

                <p className="text-white-75 mb-4">
                  <em>
                    Beskära träd är något av det roligaste jag vet! Det är
                    speciellt att få forma och ta hand om ett fruktträd - se det
                    växa och bära frukt!
                  </em>
                </p>
                <p className="text-white-75 mb-4">
                  Med rötterna i Skåne och med fjällen i hjärtat fick det till
                  slut bli i Jämtland som jag rotade mig. <br />
                  <br />
                  Jag är utbildad trädgårdsmästare med grönt kort i beskärning
                  av fruktträd, certifierad av Riksförbundet Svensk Trädgård.
                  Jag har flera års erfarenhet av beskärning bl.a. från arbete
                  på Bergianska, Stockholms botaniska trädgård. <br />
                  <br />
                  Jag utför professionell beskärning med trädets bästa i fokus.
                  Med rätt beskärning får du ett vackert och friskt träd med
                  möjlighet till god skörd. Jag ger även råd kring skötsel av
                  fruktträd och andra växter i trädgården.
                  <br />
                  <br />
                  Bästa tid för beskärning är mars till början av maj samt juli
                  till september. Under denna period är du välkommen att anlita
                  mig!
                </p>
                <p className="text-white-75 mb-4">
                  <em>Stinsen - Christina Persson</em>
                </p>

                <a
                  className="btn btn-light btn-xl js-scroll-trigger"
                  href="#services"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Mina tjänster
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">Mina tjänster</h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-leaf text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Beskärning</h3>
                  <p className="text-muted mb-0">Beskärning av era frukträd</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-apple-alt text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Rådgivning</h3>
                  <p className="text-muted mb-0">
                    Allt ni behöver veta för att få er trädgård att bära frukt
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-seedling text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Utbilding</h3>
                  <p className="text-muted mb-0">
                    Lär er att beskära era egna träd på egen hand
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Utfört med kärlek</h3>
                  <p className="text-muted mb-0">
                    Att beskära är verkligen det bästa jag vet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Portfolio
          images={this.props.data.images.edges}
          handlePortfolioClick={this.handlePortfolioClick.bind(this)}
        />

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">
                  Hör av dig för att boka beskärningshjälp!
                </h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">
                  Jag är verksam inom Östersunds kommun och godkänd för F-skatt.
                  <br />
                  RUT-avdrag kan göras på arbetskostnaden vid beskärning.
                  <br />
                  <br />
                  <em>Christina Persson</em>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>070-651 03 12</div>
              </div>
              <div className="col-lg-4 mr-auto text-center mb-5">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a
                  className="d-block"
                  href="mailto:christina@stinsenstradgard.se"
                >
                  christina@stinsenstradgard.se
                </a>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fab fa-facebook fa-3x mb-3 text-muted"></i>
                <a
                  className="d-block"
                  href="https://www.facebook.com/stinsenstradgard/"
                >
                  stinsenstradgard
                </a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal
          show={this.state.modalShow}
          onHide={() => this.setModal(false, 0)}
        >
          <PortfolioCarousel
            images={this.props.data.images.edges}
            current={this.state.modalCurrent}
          />
        </PortfolioModal>
      </Layout>
    )
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "portfolio/fullsize/*.png" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
