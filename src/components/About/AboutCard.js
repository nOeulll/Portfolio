import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            안녕하세요&nbsp;
            <span className="purple">웹 프론트엔드와 디자인이 가능한 개발자 정현진</span>
            입니다!
            <br />
            <br />
            코딩 외에 제가 좋아하는 것들은!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 베이스기타 연주
            </li>
            <li className="about-activity">
              <ImPointRight /> 소소한 수다떨기
            </li>
            <li className="about-activity">
              <ImPointRight /> 맛있는 거 먹기
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "어떤 일이든 이왕이면 재밌게 하자!"{" "}
          </p>
          <footer className="blockquote-footer">정현진</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
