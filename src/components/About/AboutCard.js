import React from "react";
import Card from "react-bootstrap/Card";
import { BsFillCaretRightFill } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            안녕하세요&nbsp;
            <span className="purple">웹 프론트엔드와 디자인이 모두 가능한 개발자 정현진</span>
            입니다!
            <br />
            <br />
            코딩 외에 제가 좋아하는 것들은!
          </p>
          <ul>
            <li className="about-activity">
              <BsFillCaretRightFill /> 베이스기타 연주
            </li>
            <li className="about-activity">
              <BsFillCaretRightFill /> 소소한 수다떨기
            </li>
            <li className="about-activity">
              <BsFillCaretRightFill /> 맛있는 거 먹기
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#748ffc" }}>
            "뭐든지 끝까지 하기"
          </p>
          {/* <footer className="blockquote-footer">정현진</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
