import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ShowcassesFullScreenData from "../../data/showcases-full-screen-slider.json";
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  Mousewheel,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

SwiperCore.use([Navigation, Pagination, Parallax, Mousewheel]);

const ShowcasesGrid = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      if (document.querySelector(".swiper-pagination")) {
        document.querySelector(".swiper-pagination").innerHTML = document
          .querySelector(".swiper-pagination")
          .innerHTML.replace(" / ", "");
      }
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
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  return (
    <header className="slider showcase-grid">
      <div id="content-carousel-container-unq-1" className="swiper-container">
        {!load ? (
          <Swiper
            speed={1000}
            mousewheel={true}
            autoplay={true}
            loop={true}
            spaceBetween={30}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={4}
          >
            {ShowcassesFullScreenData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <Link passHref href="/project-details2/project-details2-dark">
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                    }}
                    data-tooltip-tit={
                      slide.title.first + " " + slide.title.second
                    }
                    data-tooltip-sub={slide.sub}
                  ></div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
      <div className="txt-botm">
        <div
          ref={navigationNextRef}
          className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
        >
          <div>
            <span>Next Slide</span>
          </div>
          <div>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div
          ref={navigationPrevRef}
          className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
        >
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div>
            <span>Prev Slide</span>
          </div>
        </div>

        <div className="swiper-pagination dots" ref={paginationRef}></div>
      </div>
    </header>
  );
};

export default ShowcasesGrid;
