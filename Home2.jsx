import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/bihar.jpeg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            
            <p>
            <span className="purple">B=Bharat,I=India, H=Hindustan, A=Aryavaat,R=Rekha khand </span>
            </p>
          
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
