import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myMimoji.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              프로그래밍을 하는 행위 그 자체와 그로 인해 얻게 되는 성취감과 결과물이 저를 개발자로서 지속적으로 나아갈 수 있게 하는 원동력이 되었습니다.
              <br />
              <br />처음 웹에 발을 들이게 된 분야는 UX/UI 디자인이었습니다. 그러다 점점&nbsp;
              <i>
                <b className="purple">디자인과 개발, 둘 다 잘 해야 </b>
              </i>
                &nbsp;좋은 아이디어를 제대로 구현할 수 있겠다는 생각이 들었습니다. 그렇게 직접 개발까지 해보고 싶은 욕심이 생겼고, 2021년 1월부터 개발에 도전하였습니다.
              <br />
              <br />
              지금까지 여러 해커톤 대회 및 공모전에 참가하고 사이드 프로젝트를 진행하였습니다.
              <br />
              <br />
               현재 제 목표는&nbsp;
               <i>
                <b className="purple">사용자 친화적 UX/UI를 적용한 Interactive Web</b>
              </i>
              &nbsp;을 개발하는 것입니다.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="mimoji" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nOeulll"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nOeulll"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ru__jng/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
