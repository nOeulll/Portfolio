import React from "react";
import Card from "react-bootstrap/Card";
import { BsFillCaretRightFill } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            💪<b className="purple"> 추진력이 강하고 끈기가 있는 </b>
            개발자 정현진 입니다. 아직 배울 것도 어려움도 많지만,
            문제에 부딪혀 실패할 것을 두려워하지 않고 끝까지 도전하고 있습니다.
            추진력이 강해 한번 마음 먹은 것은 어떻게든 해내는 것이 제 장점입니다.
            <br />
            <br />
            💙 Apart from programming, <b>LIST that i love to do</b>
          </p>
          <ul>
            <li className="about-activity">
              <BsFillCaretRightFill /> 베이스기타 연주 🪕
            </li>
            <li className="about-activity">
              <BsFillCaretRightFill /> 소소한 수다떨기 👄
            </li>
            <li className="about-activity">
              <BsFillCaretRightFill /> 맛있는 거 먹기 🍣
            </li>
          </ul>

          {/* <p style={{ marginBlockEnd: 0, color: "#748ffc" }}>
            "뭐든지 끝까지"
          </p> */}
          {/* <footer className="blockquote-footer">정현진</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
