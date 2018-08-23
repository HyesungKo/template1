import React, { Component } from 'react';

class SocialNetwork extends Component {
    render() {
        return (
            <div className="container" style={{marginTop: 80, marginBottom: 80}}>
                <h1 style={{marginBottom: 30}}>Let's get in touch!</h1>
                <p style={{fontSize: 40}}>
                    <a href="#" style={{ margin: 10}}><i class="fab fa-facebook-square"></i></a>
                    <a href="#" style={{ margin: 10}}><i class="fab fa-yelp"></i></a>
                    <a href="#" style={{ margin: 10}}><i class="fab fa-instagram"></i></a>
                    <a href="#" style={{ margin: 10}}><i class="fab fa-twitter-square"></i></a>
                </p>
            </div>
        );
    }
}

export default SocialNetwork;