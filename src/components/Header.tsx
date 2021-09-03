import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="Header">
      <h1>
        <a href="/">Process Design</a>
      </h1>
      <ul className="JumpList">
        <li className="JumpList__item">
          <a href="/">GOAL</a>
        </li>
        <li className="JumpList__item">
          <a href="/">BASE</a>
        </li>
        <li className="JumpList__item">
          <a href="/">RECORD</a>
        </li>
        <li className="JumpList__item">
          <a href="/">EVENT</a>
        </li>
      </ul>
    </div>
  )
}


export default Header;
