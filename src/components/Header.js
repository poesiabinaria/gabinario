import React from "react";

import gabinarioLogo from "../img/gabinario-logo.svg";

function Header() {
  return (
    <div className="container-fluid">
      <header className="d-flex">
        <div className="logo-area mr-auto">
          <img src={gabinarioLogo} alt="" />
        </div>
        <div className="status">
          <ul>
            <li>
              <span className="blue-low">Github Pages</span> OK
            </li>
            <li>01000111</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
