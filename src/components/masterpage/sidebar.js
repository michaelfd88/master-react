import React, { Component } from 'react';
import logo from '../../../src/logo.svg';
import './style.css';
class Sidebar extends Component {
  render() {
    return (
      <div className="h-100 bg-dark">
        <img src={logo} alt="" className="logo"/>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="/usuarios">Usuarios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/profesores">Profesores</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
