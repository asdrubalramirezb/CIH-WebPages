import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FaRegComments, FaCalendarAlt } from "react-icons/fa";
import Swiper from "react-id-swiper";

const BlogPostListWrapper = () => {
  const params = {
    loop: false,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  };
  return (
    <Row>
      <Col lg={12}>
        <div className="blog-post blog-post--list-view flex-row-reverse">
          <div className="blog-post__image">
            <Link href="/blog/post-left-sidebar">
              <a>
                <img
                  src="/assets/images/blog/blog_small_img5.jpg"
                  alt="blog_small_img1"
                />
              </a>
            </Link>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <h6 className="blog-title">
              Master Formulas Phytotherapics Emulsions Medicines
              </h6>
              <p>
                The emulsions are processed together in different vehicles that allow the easy incorporation 
                of the derivative in the required formulation.
              </p>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={12}>
        <div className="blog-post blog-post--list-view">
          <div className="blog-post__image">
            <div className="fit-videos">
              <div className="fluid-width-video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/7e90gBu4pas"
                  width="540"
                  height="360"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <h6 className="blog-title">
                Cannabis Oils
              </h6>
              <p>
                Phytotherapeutic products and medicines will be designed, formulated and developed with laboratories
                certified by the regulatory body, based on their own preclinical studies and bibliographic support
                that is already being gathered.
              </p>
              <Link href="#">
                <a className="btn btn-fill-line border-2 btn-xs rounded-0">
                  Read More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={12}>
        <div className="blog-post blog-post--list-view flex-row-reverse">
          <div className="blog-post__image">
            <Swiper {...params}>
              <div className="item">
                <Link href="/blog/post-left-sidebar">
                  <a>
                    <img
                      src="/assets/images/blog/blog_small_img4.jpg"
                      alt="blog_small_img1"
                    />
                  </a>
                </Link>
              </div>
              <div className="item">
                <Link href="/blog/post-left-sidebar">
                  <a>
                    <img
                      src="/assets/images/blog/blog_small_img5.jpg"
                      alt="blog_small_img1"
                    />
                  </a>
                </Link>
              </div>
            </Swiper>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <h6 className="blog-title">
                Pharmaceutical Grade Oil
              </h6>
              <p>
                Magistral products are prescribed by a medical professional
                and delivered directly to the patient for whom the product has been formulated.
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BlogPostListWrapper;
