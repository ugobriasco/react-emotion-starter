import React from "react";
import { css, keyframes } from "emotion";
import logo from "../../assets/logo.svg";

const Header = () => {
  const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  const headerStyle = css`
    background-color: #222;
    color: white;
    height: 150px;
    padding: 20px;
    text-align: center;

    & h1 {
      font-size: 1.5em;
    }
    & img {
      animation: ${spin} infinite 20s linear;
      height: 80px;
    }
  `;

  return (
    <header className={headerStyle}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
  );
};

export default Header;
