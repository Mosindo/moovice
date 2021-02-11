import React from 'react';
import "./../App.css"


class Card extends React.Component {
   
    render() {
        return (	
                <div className="movie-card col-3">
                    <div className="movie-header manOfSteel">
                <img src={`https://image.tmdb.org/t/p/w300/${this.props.img}`}  alt="..."/>
                    </div>
                    <div className="movie-content">
                        <div className="movie-content-header">
                            <a href="#">
                                <h3 className="movie-title">{this.props.title}</h3>
                            </a>
                            <div className="imax-logo">
                            </div>
                        </div>
                        <div className="movie-info">
                            <div className="info-section">
                                <label>Date & Time</label>
                                <span>Sun 8 Sept - 10:00PM</span>
                            </div>
                            <div className="info-section">
                                <label>Screen</label>
                                <span>03</span>
                            </div>
                            <div className="info-section">
                                <label>Row</label>
                                <span>F</span>
                            </div>
                            <div className="info-section">
                                <label>Seat</label>
                                <span>21,22</span>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Card;