import React from 'react';
import Aboutimg from '../../../public/image/self.png'
import Image from 'next/image';

function about(props) {

 

    return (
        <div>
            <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1"><Image src={Aboutimg} alt='hero'/></div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Hey there! I'm [sarfaraz], a passionate frontend developer with a
              knack for crafting immersive digital experiences. With a keen eye
              for design and a love for clean, efficient code, I thrive on
              bringing ideas to life in the digital realm. My journey in web
              development began [one year] ago, and since then, I've been on an
              exhilarating ride, constantly learning and evolving with the
              ever-changing landscape of frontend technologies. From HTML, CSS,
              and JavaScript to frameworks like React, I relish the opportunity
              to dive into new tools and frameworks, leveraging them to create
              responsive, intuitive interfaces that captivate and engage users.
              What truly sets me apart is my passion for user-centric design. I
              believe that the best websites and applications not only look
              fantastic but also provide seamless, intuitive experiences. I'm a
              firm believer in the power of collaboration and communication,
              working closely with designers, UX specialists, and backend
              developers to ensure a harmonious synergy between aesthetics and
              functionality. My journey isn't just about writing code; it's
              about solving problems and delivering solutions that make a
              difference. I thrive in environments that encourage innovation and
              creativity, where my skills in HTML, CSS, and JavaScript libraries
              can flourish. I'm excited about the possibilities that lie ahead
              in the ever-evolving world of frontend development and am eager to
              contribute my skills and passion to projects that push the
              boundaries of digital experiences. Let's connect and create
              something extraordinary together!
            </p>

            <div className="tab-titles">
              <div className="tablinks active-link" onclick="opentab('skills')">
                Skills
              </div>
              <div className="tablinks" onclick="opentab('experience')">
                Experience
              </div>
              <div className="tablinks" onclick="opentab('education')">
                Education
              </div>
            </div>

            <div className="tabcontents active-tab" id="skills">
              <ul>
                <li><span>HTML</span></li>
                <li><span>CSS</span></li>
                <li><span>JAVASCRIPT</span></li>
                <li><span>BOOTSRAP</span></li>
                <li><span>TAILWIND CSS</span></li>
                <li><span>NEXT JS</span></li>
              </ul>
            </div>

            <div className="tabcontents" id="experience">
              <ul>
                <li>
                  <span>2022-till now</span> <br />Front-End Developer at
                  Tech-True
                </li>
              </ul>
            </div>

            <div className="tabcontents" id="education">
              <ul>
                <li>
                  <span>2023</span><br />Full-stack Developer training at DUCAT
                  IT SCHOOL
                </li>
                <li><span>2023-2026</span><br />B.C.A at IGNOU</li>
                <li>
                  <span>2020</span><br />12th from govt Co-ed sr sec SCHOOL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
}

export default about;