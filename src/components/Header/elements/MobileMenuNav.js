import { useEffect } from "react";
import Link from "next/link";

const MobileMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
      ".mobile-sub-menu"
    );
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation space-mb--30"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        <li className="menu-item-has-children">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="/other/about-us">
            <a>About</a>
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="/blog/post-video">
            <a>Cultivations</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/blog/post-video">
                <a>Medical cannabis seeds</a>
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link href="/blog/post-video">
                <a>Medical cannabis flowers</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/">
            <a>Laboratory</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li>
              <Link href="/blog/post-video">
                <a>Pharmaceutical Grade Cannabis Oil</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/post-video">
                <a>Certifications</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/other/about-us">
            <a>Team</a>
          </Link>
        </li>

        <li>
          <Link href="/other/contact-us">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
