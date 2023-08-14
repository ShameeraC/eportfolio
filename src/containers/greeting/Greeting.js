import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                Hi, I'm <br></br>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <p align="justify">
                I'm a well-rounded{" "}
                <b>electrical and computer engineering student</b> with a
                diverse range of skills. Bringing a unique blend of edginess and
                discipline to realize innovative solutions to real-world
                problems. A <b>budding leader</b> who brings out the best a team
                has to offer.
              </p>
              <br></br>

              <SocialMedia theme={theme} />
              {/* <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div> */}
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {
              <img
                alt="saad sitting on table"
                src={require("../../assests/images/feelingProud.svg")}
              ></img>
            }
            {/* <FeelingProud theme={theme} /> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
