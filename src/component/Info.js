import React from "react";
import "../style/info.css";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiClassicalKnowledge } from "react-icons/gi";

const Info = () => {
  return (
    <>
      {/* <div className="contain"> */}
      {/* <div>
          <span>See our other products:</span>
        </div> */}
      <div className="info">
        <div className="first">
          <span>See our other products:</span>
        </div>
        <div className="content">
          <div className="box">
            <span>
              {" "}
              <BsFillChatRightTextFill /> Live chat
            </span>
          </div>

          <div className="box">
            <span>
              {" "}
              <BsFillTelephoneFill /> Helpbench
            </span>
          </div>

          <div className="box">
            <span>
              {" "}
              <GiClassicalKnowledge />
              Knowledgebase
            </span>
          </div>
        </div>
      </div>
      {/* // </div> */}
    </>
  );
};

export default Info;
