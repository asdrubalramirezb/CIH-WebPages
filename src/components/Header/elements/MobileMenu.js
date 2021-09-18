import { IoIosClose } from "react-icons/io";
import MobileMenuNav from "./MobileMenuNav";
import MobileMenuWidgets from "./MobileMenuWidgets";

const MobileMenu = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={`offcanvas-mobile-menu ${activeStatus ? "active" : ""}`}>
      <div
        className="offcanvas-mobile-menu__overlay-close"
        onClick={() => getActiveStatus(false)}
      />
      <div className="offcanvas-mobile-menu__wrapper">
        <button
          className="offcanvas-mobile-menu__close"
          onClick={() => getActiveStatus(false)}
        >
          <IoIosClose />
        </button>
        <div className="offcanvas-mobile-menu__content-wrapper">
          <div className="offcanvas-mobile-menu__content">

            {/* mobile nav menu */}
            <MobileMenuNav getActiveStatus={getActiveStatus} />

            <div className="offcanvas-mobile-menu__middle space-mb--30">
              <div className="lang-curr-style space-mb--20">
                <span className="title">Choose Language </span>
                <select>
                  <option value="en">English</option>
                  <option value="fn">French</option>
                  <option value="de">Germany</option>
                </select>
              </div>
             
            </div>

            {/* mobile widgets */}
            <MobileMenuWidgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
