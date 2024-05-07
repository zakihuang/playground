import React, { useState, useEffect, useRef } from "react";

const generateRandomString = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const Captcha = ({ width = 100, height = 40, fontSize = 22, onChange }) => {
  const canvasRef = useRef(null);
  const [code, setCode] = useState(generateRandomString(6));
  const [input, setInput] = useState("");

  const regenerateCode = () => {
    const newCode = generateRandomString(6);
    setCode(newCode);
    if (onChange) {
      onChange(newCode);
    }
  };

  const drawCode = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    drawBackground(ctx, width, height);
    drawText(ctx, width, height, fontSize);
  };

  const drawBackground = (ctx, width, height) => {
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      },${Math.random()})`;
      ctx.fillRect(Math.random() * width, Math.random() * height, 2, 2);
    }
  };

  const drawText = (ctx, width, height, fontSize) => {
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(code, width / 2, height / 2);
  };

  useEffect(drawCode, [code]);

  const verifyCaptcha = () => {
    return input.toLowerCase() === code.toLowerCase();
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onClick={regenerateCode}
        style={{ cursor: "pointer" }}
      />

      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button disabled={!input} onClick={() => alert(verifyCaptcha() ? "正确" : "错误")}>
        验证
      </button>
    </div>
  );
};

export default Captcha;
