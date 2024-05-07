import React, { useState, useEffect, useRef } from "react";
import Captcha from "captcha-mini";

let captcha1 = new Captcha({
  lineWidth: 1, //线条宽度
  lineNum: 6, //线条数量
  dotR: 2, //点的半径
  dotNum: 25, //点的数量
  preGroundColor: [10, 80], //前景色区间
  backGroundColor: [150, 250], //背景色区间
  fontSize: 30, //字体大小
  fontFamily: ["Georgia", "微软雅黑", "Helvetica", "Arial"], //字体类型
  fontStyle: "stroke", //字体绘制方法，有fill和stroke
  content: "abcdefghijkmnopqrstuvw1234567890", //验证码内容
  length: 4 //验证码长度
});

const VerificationCode = () => {
  const [userInput, setUserInput] = useState("");
  let myCode = useRef("");

  useEffect(() => {
    captcha1.draw(document.querySelector("#captcha1"), (r) => (myCode.current = r));
  }, []);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const verifyCaptcha = () => {
    return userInput.toLowerCase() === myCode.current.toLowerCase();
  };

  return (
    <div>
      
      <canvas width="100" height="50" id="captcha1"></canvas>

      <input type="text" value={userInput} onChange={handleChange} />
      <button disabled={!userInput} onClick={() => alert(verifyCaptcha() ? "正确" : "错误")}>
        验证
      </button>
    </div>
  );
};

export default VerificationCode;
