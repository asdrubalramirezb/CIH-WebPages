import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { IoIosMenu } from "react-icons/io";
import { Form } from "react-bootstrap";
import Navigation from "./elements/Navigation";
import SearchOverlay from "./elements/SearchOverlay";
import MobileMenu from "./elements/MobileMenu";

const HeaderOne = ({ cartItems, navPositionClass }) => {
  const [scroll, setScroll] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [offCanvasSearchActive, setOffCanvasSearchActive] = useState(false);
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] = useState(
    false
  );

  useEffect(() => {
    const header = document.querySelector(".header-wrap");
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`header-wrap header-with-topbar ${
        scroll > headerHeight ? "is-sticky" : ""
      }`}
    >
      <div className="bottom-header dark-skin">
        <Container>
          <div className="bottom-header-container d-flex justify-content-between align-items-center position-relative">
            {/* logo */}
            <Link href="/">
              <a className="navbar-brand">
                <img
                  className="logo-light"
                  src="/assets/images/icons/CIHlogoblanco.png"
                  alt="logo"
                />
                <img
                  className="logo-dark"
                  src="/assets/images/icons/CIHlogoNegro.png"
                  alt="logo"
                />
              </a>
            </Link>

            {/* navigation */}
            <Navigation positionClass={navPositionClass} />

            {/* icons */}
            <ul className="header-icons d-flex">
              <li>
                <Form.Control as="select" name="languages" className="mr-2">
                  <option value="en">English</option>
                  <option value="fn">France</option>
                </Form.Control>
              </li>
              <li className="d-block d-lg-none">
                <button
                  className="nav-link mobile-menu-trigger pr-0"
                  onClick={() => {
                    setOffCanvasMobileMenuActive(true);
                  }}
                >
                  <IoIosMenu />
                </button>
              </li>
            </ul>
          </div>
              
        </Container>
      </div>

      {/* search overlay */}
      <SearchOverlay
        activeStatus={offCanvasSearchActive}
        getActiveStatus={setOffCanvasSearchActive}
      />

      {/* mobile menu */}
      <MobileMenu
        activeStatus={offCanvasMobileMenuActive}
        getActiveStatus={setOffCanvasMobileMenuActive}
      />
    
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData
  };
};

export default connect(mapStateToProps)(HeaderOne);
