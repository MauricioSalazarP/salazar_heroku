/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutUs5 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      let skillInAbout = document.querySelector(".about-cr .skills-box");
      if (skillInAbout) {
        window.addEventListener("scroll", () => {
          document
            .querySelectorAll(".skill-progress .progres")
            .forEach((item) => {
              let myVal = item.getAttribute("data-value");
              if (
                window.pageYOffset >
                document.querySelector(".about-cr").offsetTop - 200
              ) {
                item.style.width = myVal;
              }
            });
        });
      }
    }, 1000);
  }, [])
  return (
    <section className="about-cr">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 img md-mb50">
            <img src="/img/intro/4.jpg" alt="" />
          </div>
          <div className="col-lg-5 valign">
            <div className="cont full-width">
              <h3 className="color-font">UI / UX Designer</h3>
              <h5 className="co-tit mb-15">
                We help to create visual strategies.
              </h5>
              <p>
                We are Vie. We create award-winning websites, remarkable brands
                and cutting-edge apps.Nullam imperdie.
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">UI / UX Design</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Apps Development</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="80%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
