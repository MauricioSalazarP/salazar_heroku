/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const WorksStyle1 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      let template1 = document.createElement("div");
      template1.classList.add("div-tooltip-tit");
      document.body.appendChild(template1);
      let template2 = document.createElement("div");
      template2.classList.add("div-tooltip-sub");
      document.body.appendChild(template2);
      document.querySelectorAll("[data-tooltip-tit]").forEach((item) => {
        template1 = document.querySelector(".div-tooltip-tit");
        item.addEventListener("mouseover", () => {
          template1.innerText = item.getAttribute("data-tooltip-tit");
        });
        item.addEventListener("mousemove", (e) => {
          fadeIn(template1, 800);
          template1.style.top = e.pageY + 10 + "px";
          template1.style.left = e.pageX + 20 + "px";
          template1.style.padding = "0px 10px";
        });
        item.addEventListener("mouseleave", () => {
          fadeOut(template1, 800);
          template1.style.padding = 0;
        });
      });
      document.querySelectorAll("[data-tooltip-sub]").forEach((item) => {
        template2 = document.querySelector(".div-tooltip-sub");
        item.addEventListener("mouseover", () => {
          template2.innerText = item.getAttribute("data-tooltip-sub");
        });

        item.addEventListener("mousemove", (e) => {
          fadeIn(template2, 800);
          template2.style.top = e.pageY - 15 + "px";
          template2.style.left = e.pageX + 30 + "px";
          template2.style.padding = "5px 10px";
        });
        item.addEventListener("mouseleave", () => {
          fadeOut(template2, 800);
          template2.style.padding = 0;
        });
      });
    }, 1000);
  }, []);
  return (
    <section className="works section-padding pb-70">
      <div className="container">
        <div className="row lg-space">
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link passHref href="/project-details2/project-details2-dark">
                <div
                  className="img"
                  data-tooltip-tit="Work image"
                  data-tooltip-sub="Design"
                >
                  <img src="/img/portfolio/portfolio/1/1.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link passHref href="/project-details2/project-details2-dark">
                <div
                  className="img"
                  data-tooltip-tit="Work image"
                  data-tooltip-sub="Design"
                >
                  <img src="/img/portfolio/portfolio/2/1.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link passHref href="/project-details2/project-details2-dark">
                <div
                  className="img"
                  data-tooltip-tit="Work image"
                  data-tooltip-sub="Design"
                >
                  <img src="/img/portfolio/portfolio/1/2.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link passHref href="/project-details2/project-details2-dark">
                <div
                  className="img"
                  data-tooltip-tit="Work image"
                  data-tooltip-sub="Design"
                >
                  <img src="/img/portfolio/portfolio/2/3.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link passHref href="/project-details2/project-details2-dark">
                <div
                  className="img"
                  data-tooltip-tit="Work image"
                  data-tooltip-sub="Design"
                >
                  <img src="/img/portfolio/portfolio/1/3.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link passHref href="/project-details2/project-details2-dark">
                <div
                  className="img"
                  data-tooltip-tit="Work image"
                  data-tooltip-sub="Design"
                >
                  <img src="/img/portfolio/portfolio/2/4.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link passHref href="/project-details2/project-details2-dark">
                <div
                  className="img"
                  data-tooltip-tit="Work image"
                  data-tooltip-sub="Design"
                >
                  <img src="/img/portfolio/portfolio/1/4.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link passHref href="/project-details2/project-details2-dark">
                <div
                  className="img"
                  data-tooltip-tit="Work image"
                  data-tooltip-sub="Design"
                >
                  <img src="/img/portfolio/portfolio/2/5.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link passHref href="/project-details2/project-details2-dark">
                <div
                  className="img"
                  data-tooltip-tit="Work image"
                  data-tooltip-sub="Design"
                >
                  <img src="/img/portfolio/portfolio/1/5.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle1;
