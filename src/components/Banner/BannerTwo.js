import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

const BannerTwo = () => {
  return (
    <div className="banner-area space-pb--r70">
      <Container>
        <Row>
          <Col md={4}>
            <div className="single-banner">
              <div className="single-info">
                <h3 className="title">Seeds</h3>
                <Button variant="dark">More Info</Button>
                {/* <Link href="/shop/grid-left-sidebar">
                  <a className="link">More info</a>
                </Link> */}
              </div>
              <img
                src="/assets/images/banner/Untitled-1.png"
                alt="shop_banner_img1"
              />
            </div>
          </Col>
          <Col md={4}>
            <div className="single-banner">
              <div className="single-info">
                <h3 className="title">Cultivation</h3>
                <Button variant="dark">More Info</Button>
              </div>
              <img
                src="/assets/images/banner/ej1.png"
                alt="shop_banner_img1"
              />
            </div>
          </Col>
          <Col md={4}>
            <div className="single-banner">
              <div className="single-info">
                <h3 className="title">Laboratory</h3>
                <Button variant="dark">More Info</Button>
              </div>
              <img
                src="/assets/images/banner/ej2.png"
                alt="shop_banner_img1"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerTwo;
