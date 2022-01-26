/* eslint-disable @next/next/no-img-element */
import React from "react";
import teamsDate from "../../data/sections/team.json";

const Team = () => {
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
      let teamSection = document.querySelector(".team-crv");
      if (teamSection) {
        window.addEventListener("scroll", () => {
          document
            .querySelectorAll(".skill-progress .progres")
            .forEach((item) => {
              let myVal = item.getAttribute("data-value");
              if (window.pageYOffset > teamSection.offsetTop - 200) {
                item.style.width = myVal;
              }
            });
        });
      }
    }, 1000);
  }, []);
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content wow fadeInUp md-mb30" data-wow-delay=".5s">
              <div className="sub-title">
                <h6>Our Staff</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="co-tit mb-15">
                We help to create visual strategies.
              </h3>
              <p>
                We are Vie. We create award-winning websites, remarkable brands
                and cutting-edge apps.Nullam imperdie.
              </p>
              <div className="skills-box mt-40">
                {teamsDate.skills.map((skill) => (
                  <div className="skill-item" key={skill.id}>
                    <h6 className="custom-font">{skill.text}</h6>
                    <div className="skill-progress">
                      <div className="progres" data-value={skill.value}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img-box">
              <div className="row">
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    {teamsDate.teams.slice(0, 2).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(0, 2).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          <img src={team.image} alt="" className="imago wow" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    {teamsDate.teams.slice(2, 4).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(2, 4).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          <img src={team.image} alt="" className="imago wow" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
