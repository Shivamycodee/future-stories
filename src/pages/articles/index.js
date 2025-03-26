import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

import AI from "../../components/myArticles/articles/3.png";
import NETWORK from "../../components/myArticles/articles/5.png";

const ARTICLES_METADATA = [
  {
    title: "Judgement AI (build-1)",
    description: "Now AI will announce the JUDGEMENT",
    link: "/articles/judgementAI",
    img: AI,
    btnTxt: "BUILD-1",
  },
  {
    title: "Confession",
    description: "Now your calls are truly secure.",
    link: "/articles/confession",
    img: NETWORK,
    btnTxt: "NPM",
  },
];

const ArticleCard = ({ data }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <a href={data.link} className="article-card" rel="noopener noreferrer">
      {!loaded && <div className="image-placeholder"></div>}
      <img
        src={data.img}
        alt={data.title}
        onLoad={() => setLoaded(true)}
        className={`article-image ${loaded ? "loaded" : ""}`}
      />
      <div className="content">
        <p>{data.description}</p>
        <span>{data.btnTxt}</span>
      </div>
      <p className="article-title">{data.title}</p>
    </a>
  );
};

export const Articles = () => {
  return (
    <HelmetProvider>
      <Container className="articles-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Articles | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Articles</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="articles-grid">
          {ARTICLES_METADATA.map((data, i) => (
            <ArticleCard key={i} data={data} />
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
