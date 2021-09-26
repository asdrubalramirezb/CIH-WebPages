import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const BannerTwo = () => {
  return (
    <div className="banner-area space-pb--r70">
      <Container>
        <Row>
          <Col md={6}>
            <div className="single-banner">
              <img
                src="/assets/images/banner/shop_banner_img1.jpg"
                alt="shop_banner_img1"
              />
              <div className="single-banner__info">
                {/* <h5>Super Sale</h5> */}
                <h3 className="title">Cultivation</h3>
                <Link href="/shop/grid-left-sidebar">
                  <a className="link">More info</a>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="single-banner">
              <img
                src="/assets/images/banner/shop_banner_img2.jpg"
                alt="shop_banner_img1"
              />
              <div className="single-banner__info">
                {/* <h5>New Season</h5> */}
                <h3 className="title">Laboratory</h3>
                <Link href="/shop/grid-left-sidebar">
                  <a className="link">More info</a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerTwo;
