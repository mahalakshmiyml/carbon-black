import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <footer className="bg-info pt-3 pb-3 pt-md-5 pb-md-5" id="footer">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <address>
                  <p>
                    Reg. Off. : 710, 5th 'E' Cross, 7th Main, HRBR Layout, 2nd
                    Block, Kalyan Nagar, Bangalore- 560043
                    <br />
                    <a href="tel:+91-966-377-7799">Control Room: +91-966-377-7799</a>
                    <br />
                    <a href="mailto:business@shanthasdesigns.com">
                      Email: info@cbrmindia.com
                    </a>
                  </p>
                </address>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
