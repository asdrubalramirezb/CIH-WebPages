import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  IoIosPhonePortrait,
  IoIosShuffle,
  IoIosHeartEmpty
} from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

const HeaderTop = () => {
  return (
    <div className="top-header d-none d-lg-block">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
            


              <ul className="contact-detail text-center text-lg-left">
                <li>
                  <IoIosPhonePortrait />
                  <span>123-456-7890</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center text-md-right">
              <ul className="header-list">
                <li>
                  <Link href="/other/compare">
                    <a>
                      <IoIosShuffle />
                      <span>Compare</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/wishlist">
                    <a>
                      <IoIosHeartEmpty />
                      <span>Wishlist</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/login">
                    <a>
                      <AiOutlineUser />
                      <span>Login</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTop;
