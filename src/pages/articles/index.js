import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

import AI from '../../components/myArticles/articles/3.png';

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

        <div className="mb-5 po_items_ho">
          {/* 1st article */}

          <a href="/articles/judgementAI" rel="noopener noreferrer">
            <div className="po_item_article">
              <img src={AI} alt="err" />

              <div className="content">
                <p>Now AI will announce the JUDGEMENT</p>

                <div style={{ marginTop: "30px" }}>
                  <span>EIP</span>
                </div>
              </div>

              <p className="article-title">Judgement AI (build-1)</p>
            </div>
          </a>
        </div>
      </Container>
    </HelmetProvider>
  );
};
