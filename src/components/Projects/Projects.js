import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import reto from "../../Assets/Projects/reto.png";
import dorandoran from "../../Assets/Projects/dorandoran.png";
import banhada from "../../Assets/Projects/banhada.png";
import BanhadaProjectCards from "./BanhadaProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#343a40" }}>
          최근 작업한 몇가지 프로젝트들입니다.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reto}
              isReto={true}
              title="RETO"
              description="2021년 9월 사이드 프로젝트로 진행했던 1인 프로젝트이다. 사진과 함께 그에 담긴 기억을 텍스트로 저장하고 추억할 수 있도록 돕는 웹 애플리케이션이다. 어머니께서 사진을 저장하고 해당되는 코멘트를 적어서 어디서든 보고 싶다고 말씀하신 것에서 아이디어를 얻었다. 직접 기획과 디자인을 하고, 모든 페이지의 프론트엔드 작업을 하였다."
              link="https://reto.hyeonjin.me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dorandoran}
              title="도란도란"
              description="2021년 8월 제2회 OASIS HACKATHON에서 팀 4학년으로 진행한 프로젝트이다. 수도권 대비 호남지역 대학생들을 위한 네트워킹 커뮤니티의 부족으로 인해 발생되는 교육 격차를 해소해주는 호남지역 대학생 네트워킹 커뮤니티 웹 애플리케이션이다. 해당 프로젝트를 기획하고 프로토타입으로 개발하였다. 헤더, 로그인, 회원가입 페이지와 모집 페이지, 캘린더 페이지의 프론트엔드 작업을 하였다."
              link="https://github.com/2021-oasis-hackathon/4Grade"
            />
          </Col>

          <Col md={4} className="project-card">
            <BanhadaProjectCards
              imgPath={banhada}
              title="반하다"
              description="2021년 1월 제1회 OASIS HACKATHON에서 팀 3N으로 진행한 프로젝트이다. 기존 당근마켓 서비스를 아파트 주민들 간의 신선식품, 배달식품 공유 서비스로 확장한 모바일(Android) 애플리케이션이다. 본격적으로 프로그래밍을 공부하기 전이라 프로젝트의 기획과 디자인을 맡았었다."
              link1="https://www.oasis2021-3n.com/"
              link2="https://presentation.oasis2021-3n.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
