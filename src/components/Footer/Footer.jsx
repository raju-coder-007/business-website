import React, { useEffect } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Footer = () => {
  const faArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />;

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <section id="footer">
        <div className="container">
          <footer className="footer">
            <p>
              © All Right Reserved 2023 Designed By <a href="/">Raju Singh</a>
            </p>
          </footer>
        </div>
      </section>

      {isVisible && (
        <div className="scroll_top" onClick={scrollToTop}>
          {faArrowUpIcon}
        </div>
      )}
    </>
  );
};

export default Footer;
