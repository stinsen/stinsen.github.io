import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from "./scroller"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
  }

  render() {
    return (
      <>
        <Navbar
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <div className="container">
            <a
              className="navbar-brand js-scroll-trigger"
              href="#page-top"
              onClick={Scroller.handleAnchorScroll}
            >
              Stinsens Trädgård
            </a>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ms-auto my-2 my-lg-0">
                <Scrollspy
                  className="navbar-nav"
                  items={["about", "services", "portfolio", "contact"]}
                  currentClassName="active"
                  rootEl={"#mainNav"}
                  offset={-75}
                >
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#about"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Om mig
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#services"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Tjänster
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#portfolio"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Galleri
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#contact"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Kontakta mig
                    </Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white fw-bold">
                  Beskärning och råd kring skötsel av fruktträd
                </h1>
                <hr className="divider my-4 mx-auto opacity-100" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 fw-light mb-5">
                  Att beskära fruktträd behöver inte vara svårt. Anlita mig så
                  får ni hjälp att göra det på ett enkelt, roligt och effektivt
                  sätt.
                </p>
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger"
                  href="#about"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Om mig
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}
