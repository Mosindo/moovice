import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h2 className="navbar-brand">Moovice</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/weekly">weekly</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/popular">popular</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/popular-battle">popular-battle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">favorites</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
        )
    }
}