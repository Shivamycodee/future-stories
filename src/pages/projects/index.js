import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataProjects, meta } from "../../content_option";

export const Projects = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataProjects.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="err" />
                <div className="content">
                  <p>{data.description}</p>
                  <div style={{ marginTop: "30px" }}>
                    <a
                      style={{ marginRight: "8px" }}
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      view project
                    </a>
                    <a
                      href={data.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
