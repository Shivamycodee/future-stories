import React,{useState,useEffect} from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Card, Container } from "react-bootstrap";
import {
  meta,
} from "../../content_option";
import GitHub from "./connectWithMe/GitHub.gif";
import XCOM from "./connectWithMe/Xcom.gif";
import LinkedIn from "./connectWithMe/Linkedin.gif";
import Telegram from "./connectWithMe/Telegram.gif";

export const About = () => {

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title> About | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <Container className="aboutMe-main">
        <div className="about-me-cont">
          <h3>
            <code>WHO AM I ?</code>
          </h3>

          <div className="about-me-text">
            <code>
              Hey there, I'm Shivam Yadav a blockchain developer, I'm on a
              mission to cook up something so ridiculously useful that it'll
              have billions of people flocking to it - and nope, not because of
              some flashy ads, but because it's just that awesome. it's like
              creating a chocolate cake that's healthy. We're surfing the wild
              waves of tech growth, so why not make some waves of our own with
              some insanely cool tech magic? LFG!
            </code>
          </div>

          <div className="connect-withMe-cont">
            <a
              href="https://github.com/Shivamycodee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHub} alt="Animation" />
            </a>

            <a
              href="https://twitter.com/VibeWeb3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={XCOM} alt="Animation" />
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-yadav-917863224/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="Animation" />
            </a>

            <a
              href="https://t.me/VibeWeb3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Telegram} alt="Animation" />
            </a>
          </div>
        </div>

        <div className="about-me-img">
          <img src="/images/me.jpg" />
        </div>
      </Container>
    </HelmetProvider>
  );
};
