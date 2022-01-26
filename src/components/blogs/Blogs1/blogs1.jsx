/* eslint-disable @next/next/no-img-element */
import React from "react";

const Blogs1 = () => {
  return (
    <section className="blog section-padding sub-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                RECENT ARTICLES
              </h6>
              <h3 className="wow color-font">From our blogs.</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
              <div className="img">
                <img src="/img/blog/1.jpg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <a href="#0" className="date">
                      <span>
                        <i>06</i> August
                      </span>
                    </a>
                    <span>/</span>
                    <a href="#0" className="tag">
                      <span>WordPress</span>
                    </a>
                  </div>
                  <h5>
                    <a href="#0">
                      How to use solid color combine with simple furnitures.
                    </a>
                  </h5>
                  <div className="btn-more">
                    <a href="#0" className="simple-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
              <div className="img">
                <img src="/img/blog/2.jpg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <a href="#0" className="date">
                      <span>
                        <i>06</i> August
                      </span>
                    </a>
                    <span>/</span>
                    <a href="#0" className="tag">
                      <span>WordPress</span>
                    </a>
                  </div>
                  <h5>
                    <a href="#0">
                      How to use solid color combine with simple furnitures.
                    </a>
                  </h5>
                  <div className="btn-more">
                    <a href="#0" className="simple-btn">
                      Read More
                    </a>
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

export default Blogs1;
