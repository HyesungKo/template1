import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
    render() {
        return (
            <div id="slider" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#slider" data-slide-to="0" className="active"></li>
                    <li data-target="#slider" data-slide-to="1"></li>
                    <li data-target="#slider" data-slide-to="2"></li>
                    <li data-target="#slider" data-slide-to="3"></li>
                    <li data-target="#slider" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{height: "100vh"}}>
                        <div className="backgroundImage1">
                            <div class="hero-text">
                                <h1>AnKo Forever</h1>
                                <h2>And We are married</h2>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{height: "100vh", overflow: "hidden"}}>
                        <div className="backgroundImage2">
                        </div>
                    </div>
                    <div className="carousel-item" style={{height: "100vh", overflow: "hidden"}}>
                        <div className="backgroundImage3">
                        </div>
                    </div>
                    <div className="carousel-item" style={{height: "100vh", overflow: "hidden"}}>
                        <div className="backgroundImage4">
                        </div>
                    </div>
                    <div className="carousel-item" style={{height: "100vh", overflow: "hidden"}}>
                        <div className="backgroundImage5">
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Slider;