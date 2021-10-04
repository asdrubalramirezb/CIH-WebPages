import { Fragment } from "react";
import Link from "next/link";
import { BrandLogoThree } from "../../components/BrandLogo";
import brandLogoData from "../../data/brand-logo/brand-logo-one.json";

import { Row, Col } from "react-bootstrap";
import {
  FaRegComments,
  FaCalendarAlt,
  FaQuoteRight,
  /* FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
  FaInstagram,
  FaTh,
  FaArrowLeft,
  FaArrowRight,
  FaReplyAll */
} from "react-icons/fa";

const BlogSinglePostVideo = () => {
  return (
    <Fragment>
      <div className="single-post">
        <h2 className="blog-title">
          But I must explain to you how all this mistaken idea ggg
        </h2>
        <ul className="blog-meta">
          <li>
            <Link href="/blog/grid-left-sidebar">
              <a>
                <FaCalendarAlt /> April 14, 2021
              </a>
            </Link>
          </li>
          <li>
            <a href="#">
              <FaRegComments /> 2 Comments
            </a>
          </li>
        </ul>
        <div className="blog-img">
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
        <div className="blog-content">
          <div className="blog-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              malesuada malesuada metus ut placerat. Cras a porttitor quam, eget
              ornare sapien. In sit amet vulputate metus. Nullam eget rutrum
              nisl. Sed tincidunt lorem sed maximus interdum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Aenean
              scelerisque efficitur mauris nec tincidunt. Ut cursus leo mi, eu
              ultricies magna faucibus id.
            </p>
            <blockquote className="blockquote">
              <FaQuoteRight />
              <p>
                Integer is metus site turpis facilisis customers. elementum an
                mauris in venenatis consectetur east. Praesent condimentum
                bibendum Morbi sit amet commodo pellentesque at fringilla
                tincidunt risus.
              </p>
            </blockquote>
            <Row>
              <Col sm={6}>
                <div className="single-img">
                  <img
                    className="w-100 mb-4"
                    src="/assets/images/blog/blog_single_img1.jpg"
                    alt="blog_single_img1"
                  />
                </div>
              </Col>
              <Col sm={6}>
                <div className="single-img">
                  <img
                    className="w-100 mb-4"
                    src="/assets/images/blog/blog_single_img2.jpg"
                    alt="blog_single_img2"
                  />
                </div>
              </Col>
            </Row>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              id dolor dui, dapibus gravida elit. Donec consequat laoreet
              sagittis. Suspendisse ultricies ultrices viverra. Morbi rhoncus
              laoreet tincidunt. Mauris interdum convallis metus. Suspendisse
              vel lacus est, sit amet tincidunt erat. Etiam purus sem, euismod
              eu vulputate eget, porta quis sapien. Donec tellus est, rhoncus
              vel scelerisque id, iaculis eu nibh.
            </p>
            <p>
              Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus.
              Vestibulum eleifend nisl sed massa sagittis vestibulum. Vestibulum
              pretium blandit tellus, sodales volutpat sapien varius vel.
              Phasellus tristique cursus erat, a placerat tellus laoreet eget.
              Fusce vitae dui sit amet lacus rutrum convallis. Vivamus sit amet
              lectus venenatis est rhoncus interdum a vitae velit.
            </p>
          </div>
        </div>
      </div>
      <div className="card post-author space-mt--40 space-mb--40">
        <div className="card-body">
          <div className="post-author__img">
            <img src="/assets/images/users/user1.jpg" alt="user1" />
          </div>
          <div className="post-author__info">
            <h6 className="author-name">
              <Link href="/blog/grid-left-sidebar">
                <a className="mb-1 d-inline-block">Maria Redwood</a>
              </Link>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="related-post">
        <div className="content-title">
          <h5>Genetics of medical cannabis </h5>
        </div>
        <Row>
          <Col md={6}>
            <div className="blog-post">
              <div className="blog-post__image">
                <Link href="/blog/post-left-sidebar">
                  <a>
                    <img
                      src="/assets/images/blog/blog_small_img2.jpg"
                      alt="blog_small_img1"
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    Lima Haze
                  </h6>
                  <div className="blog-meta">
                      <p><b>THC:</b> 19% <br />
                      <b>CBD:</b> 0.5% <br />
                      <b>Dominant Terpene: </b>Myrcene</p>
                  </div>
                  <p>
                    <b>Terpene Description: </b>
                    The myrcene is a unique combination of earth, musk and herbs, with a touch of fruit and citrus.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
          <div className="blog-post">
              <div className="blog-post__image">
                <Link href="/blog/post-left-sidebar">
                  <a>
                    <img
                      src="/assets/images/blog/blog_small_img2.jpg"
                      alt="blog_small_img1"
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    Lima Haze
                  </h6>
                  <div className="blog-meta">
                      <p><b>THC:</b> 19% <br />
                      <b>CBD:</b> 0.5% <br />
                      <b>Dominant Terpene: </b>Myrcene</p>
                  </div>
                  <p>
                    <b>Terpene Description: </b>
                    The myrcene is a unique combination of earth, musk and herbs, with a touch of fruit and citrus.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="blog-post">
              <div className="blog-post__image">
                <Link href="/blog/post-left-sidebar">
                  <a>
                    <img
                      src="/assets/images/blog/blog_small_img2.jpg"
                      alt="blog_small_img1"
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    Lima Haze
                  </h6>
                  <div className="blog-meta">
                      <p><b>THC:</b> 19% <br />
                      <b>CBD:</b> 0.5% <br />
                      <b>Dominant Terpene: </b>Myrcene</p>
                  </div>
                  <p>
                    <b>Terpene Description: </b>
                    The myrcene is a unique combination of earth, musk and herbs, with a touch of fruit and citrus.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
          <div className="blog-post">
              <div className="blog-post__image">
                <Link href="/blog/post-left-sidebar">
                  <a>
                    <img
                      src="/assets/images/blog/blog_small_img2.jpg"
                      alt="blog_small_img1"
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    Lima Haze
                  </h6>
                  <div className="blog-meta">
                      <p><b>THC:</b> 19% <br />
                      <b>CBD:</b> 0.5% <br />
                      <b>Dominant Terpene: </b>Myrcene</p>
                  </div>
                  <p>
                    <b>Terpene Description: </b>
                    The myrcene is a unique combination of earth, musk and herbs, with a touch of fruit and citrus.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
          <BrandLogoThree title="Certifications" brandLogoData={brandLogoData} />
     
    </Fragment>
  );
};

export default BlogSinglePostVideo;
