import React from "react";
import Portimg1 from "../../../public/image/portimg1.avif";

import Image from "next/image";

function portfolio(props) {
  return (
    <>
      <div>
        <div id="portfolio">
          <div className="container">
            <h1 className="sub-title">My Work</h1>
            <div className="work-list">
              <div className="work">
                <Image src={Portimg1} alt=""  />
                <div className="layer">
                  <h3>Social Media Account</h3>
                  <p>
                    The app connects you to the talented people around thw
                    world. Download it from play store
                  </p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>

              <div className="work">
                <Image src={Portimg1} alt="" />
                <div className="layer">
                  <h3>Music App</h3>
                  <p>
                    The app connects you to the talented people around thw
                    world. Download it from play store
                  </p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>

              <div className="work">
                <Image src={Portimg1} alt=""   />
                <div className="layer">
                  <h3>Online Shopping App</h3>
                  <p>
                    The app connects you to the talented people around thw
                    world. Download it from play store
                  </p>
                  <a href="#">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>

            <a href="#" className="btn">
              See more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default portfolio;
