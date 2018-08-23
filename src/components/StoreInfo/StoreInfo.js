import React, { Component } from 'react';

class StoreInfo extends Component {
    render() {
        return (
            <div>
                <h3 style={{marginBottom: 20}}>STORE INFORMATION</h3>
                <p>
                    <i class="fas fa-phone"></i> Phone : <a href="tel:628-226-8532">628-226-8532</a>
                </p>
                <p>
                    <i class="fas fa-envelope"></i> Email : <a href="mailto:kohs0429@gmail.com">kohs0429@gmail.com</a>
                </p>
                <p>
                    <i class="fas fa-map-pin"></i> Address: <a target="_blank" href="https://www.google.com/maps/place/1060+Bush+St,+San+Francisco,+CA+94109/@37.7896614,-122.4169271,17z/data=!3m1!4b1!4m5!3m4!1s0x808580925ac3d961:0xa2e14b61fd95b11a!8m2!3d37.7896572!4d-122.4147384">1060 bush st, San Francisco, CA, 94109</a>
                </p>
                <iframe width="100%" height="220" frameborder="0" style={{border: 0}}
                src="https://www.google.com/maps/embed/v1/place?q=1060%20bush%20st%2C%20san%20francisco&key=AIzaSyBga225875Ve0tskl8n38-saXBwDRTP_SI" allowfullscreen></iframe>
            </div>
        );
    }
}

export default StoreInfo;