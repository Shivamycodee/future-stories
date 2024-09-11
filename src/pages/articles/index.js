import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

import AI from '../../components/myArticles/articles/3.png';
import NETWORK from '../../components/myArticles/articles/5.png';

const ARTICLES_METADATA = [
  {
    title: "Judgement AI (build-1)",
    description: "Now AI will announce the JUDGEMENT",
    link: "/articles/judgementAI",
    img: AI,
    btnTxt:'BUILD-1'
  },
  {
    title: "Confession",
    description: "Now your calls are truely secure.",
    link: "/articles/confession",
    img: NETWORK,
    btnTxt:'NPM'
  }
];


export const Articles = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Articles | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Articles </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="article-holder-outer" >
          {/* 1st article */}

          {
            ARTICLES_METADATA.map((data, i) => {
              return (
                <a href={data.link} rel="noopener noreferrer">
                <div className="po_item_article">
                  <img src={data.img} alt="err" />
    
                  <div className="content">
                    <p>{data.description}</p>
    
                    <div>
                      <span>{data.btnTxt}</span>
                    </div>
                  </div>
    
                  <p className="article-title">{data.title}</p>
                </div>
              </a>
              )})
          }



        </div>
      </Container>
    </HelmetProvider>
  );
};
