import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Soumyajit-Behera.pdf";
import Resumecontent from "./ResumeContent";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">CONTEST</h3>
            <Resumecontent
              title="제2회 OASIS HACKATHON_NCSOFT특별상(3위)"
              date="2021.08"
              content={[
                "호남지역 대학생들을 위한 연합 네트워킹 커뮤니티 플랫폼 '도란도란'을 기획, 프로토타입 개발",
              ]}
            />
            <Resumecontent
              title="제1회 OASIS HACKATHON_참가"
              date="2021.01"
              content={[
                "기존 '당근마켓' 서비스를 신선식품, 배달식품 공유로 확장한 모바일(Android) 서비스 APP '반하다'를 기획, 디자인",
              ]}
            />
            <Resumecontent
              title="2020.08 제2회 전남대학교 INNOVATION HACKATHON_전산원장상(2위)"
              date="2020.08"
              content={[
                "COVID-19의 불안감을 낮추기 위해 밀집도에 따른 다중이용시설의 코로나 위험도를 알려주는 Web APP을 기획, 디자인",
              ]}
            />
            <h3 className="resume-title">EDUCATION</h3>
            <Resumecontent
              title="전남대학교 심리학과 학사(졸업)"
              date="2016.03 ~ 2021.08"
              content={['직무 관련 수강 과목: JAVA프로그래밍 및 실습, 컴퓨터과학적사고(Python), 생활응용컴퓨터(Exel, PowerPoint)']}
            />
            <Resumecontent
              title="무주고등학교"
              date="2013.03 ~ 2015.02"
              content={['인문계 문과']}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">CERTIFICATE</h3>
            <Resumecontent
              title=""
              content={[
                '2019.12 컴퓨터그래픽스운용기능사',
                '2012.01 한국어문회 한자능력검정시험 3급(국가공인자격)',
              ]}
            />
            <h3 className="resume-title">CAREER</h3>
            <Resumecontent
              title="무주신문사 광고디자이너"
              date="2020.06 ~"
              content={[
                "신문 하단, 상단, 전면에 올라가는 각종 광고 디자인",
              ]}
            />
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Resume;
