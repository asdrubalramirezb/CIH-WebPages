import Link from "next/link";
import { Col } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Navigation = ({ positionClass }) => {
  return (
    <nav className="navigation d-none d-lg-block">
      <ul
        className={`d-flex ${
          positionClass ? positionClass : "justify-content-center"
        }`}
      >
        <li>
          <Link href="/">
            <a className="nav-link">
              HOME 
            </a>
          </Link>
        </li>
        <li>
          <Link href="/other/about-us">
            <a className="nav-link">
              ABOUT 
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="nav-link">
            CULTIVATION <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link href="/blog/post-video">
                <a>Medical cannabis seeds</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/post-video">
                <a>Medical cannabis flowers</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">
            <a className="nav-link">
              LABORATORY <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link href="/blog/post-video">
                <a>Pharmaceutical Grade Cannabis Oil</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/post-video">
                <a>Certification</a>
              </Link>
            </li>
          </ul>
        </li>
      {/*   <li>
          <Link href="/">
            <a className="nav-link">
              PAGES <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link href="/other/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/other/contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/other/faq">
                <a>F.A.Q</a>
              </Link>
            </li>
            <li>
              <Link href="/other/not-found">
                <a>404 Error Page</a>
              </Link>
            </li>
            <li>
              <Link href="/other/login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/other/register">
                <a>Register</a>
              </Link>
            </li>
            <li>
              <Link href="/other/terms">
                <a>Terms & Conditions</a>
              </Link>
            </li>
          </ul>
        </li> */}
        <li>
          <Link href="/other/about-us">
            <a className="nav-link">
              TEAM
            </a>
          </Link>
        </li>
        <li>
          <Link href="/other/contact-us">
            <a className="nav-link">CONTACT US</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
