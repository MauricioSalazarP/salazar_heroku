/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const WorksStyle5 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      var grid = document.querySelectorAll(".gallery");
      var iso;
      if (grid.length >= 1) {
        grid.forEach((item) => {
          iso = new Isotope(item, {
            itemSelector: ".items",
          });
        });
      }

      var filtersElem = document.querySelector(".filtering");
      if (filtersElem) {
        filtersElem.addEventListener("click", function (event) {
          if (!matchesSelector(event.target, "span")) {
            return;
          }
          var filterValue = event.target.getAttribute("data-filter");
          filterValue = filterValue;
          iso.arrange({ filter: filterValue });
        });
        var buttonGroups = document.querySelectorAll(".filtering");
        for (var i = 0, len = buttonGroups.length; i < len; i++) {
          var buttonGroup = buttonGroups[i];
          radioButtonGroup(buttonGroup);
        }
        function radioButtonGroup(buttonGroup) {
          buttonGroup.addEventListener("click", function (event) {
            if (!matchesSelector(event.target, "span")) {
              return;
            }
            buttonGroup.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");
          });
        }
      }
    }, 1000);
  }, []);
  return (
    <section className="portfolio po-arch section-padding pb-70" name="po-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Projects
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Interior</span>
              <span data-filter=".web">Architecture</span>
              <span data-filter=".graphic">Residential</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow">
                    <img src="/img/arch/work/1.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>BUGANVILLA HOUSE</h5>
                <span className="tags main-color custom-font">
                  <a href="#0">Arch</a>, <a href="#0">Interior</a>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow">
                    <img src="/img/arch/work/2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>The Concept</h5>
                <span className="tags main-color custom-font">
                  <a href="#0">Arch</a>, <a href="#0">Interior</a>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow">
                    <img src="/img/arch/work/5.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Private House</h5>
                <span className="tags main-color custom-font">
                  <a href="#0">Arch</a>, <a href="#0">Interior</a>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow">
                    <img src="/img/arch/work/3.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Floating House Messinia</h5>
                <span className="tags main-color custom-font">
                  <a href="#0">Arch</a>, <a href="#0">Interior</a>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow">
                    <img src="/img/arch/work/4.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>IN THE PINE FOREST</h5>
                <span className="tags main-color custom-font">
                  <a href="#0">Arch</a>, <a href="#0">Interior</a>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark">
                  <a className="imago wow">
                    <img src="/img/arch/work/6.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>VILLAS IN SOCHI</h5>
                <span className="tags main-color custom-font">
                  <a href="#0">Arch</a>, <a href="#0">Interior</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle5;
