/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";
import Script from "next/script";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector('body').classList.add('contact-page')
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    }
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  React.useEffect(() => {
    setTimeout(() => {
      if (document.querySelector("#ieatmaps")) initMap();
    }, 1000);
  }, [])

  return (
    <>
      <LightTheme>
        <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
        <ContactHeader blackStar />
        <div className="main-content">
          <ContactForm />
          <div className="map" id="ieatmaps" />
          <Footer hideBGCOLOR />
        </div>
      </LightTheme>
      <Script id="map" strategy="afterInteractive" src="/js/map.js"></Script>
      <Script
        id="google-map"
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5bpEs3xlB8vhxNFErwoo3MXR64uavf6Y&callback=initMap"
      ></Script>
    </>
  );
};

export default Contact;
