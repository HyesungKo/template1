import React, { Component } from 'react';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import InfoWithImage from '../InfoWithImage/InfoWithImage';

class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <SocialNetwork />
                <InfoWithImage />
                <Footer />
            </div>
        );
    }
}

export default Home;