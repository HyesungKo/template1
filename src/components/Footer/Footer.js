import React, { Component } from 'react';
import Hour from '../Hour/Hour';
import StoreInfo from '../StoreInfo/StoreInfo';

class Footer extends Component {
    render() {
        return (
            <div style={{backgroundColor: "yellow"}}>
                <div className="container">
                    <div className="row" style={{paddingTop: 30}}>
                        <div className="col-lg-5 col-sm-12">
                            <Hour />
                        </div>
                        <div className="col-lg-2">

                        </div>
                        <div className="col-lg-5 col-sm-12">
                            <StoreInfo />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;