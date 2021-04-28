import React, { Component } from 'react'
import { Link} from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <h2 className="navbar-brand">Moovice</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/weekly">Weekly</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/weeklyBattle">WeeklyBattle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/popular">Popular</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/popular-battle">Popular-battle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">Favorites</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
        )
    }
}
