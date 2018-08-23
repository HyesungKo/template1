import React, { Component } from 'react';

class Hour extends Component {
    render() {
        return (
            <div>
                <h3 style={{marginBottom: 20}}>HOURS</h3>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">Monday</th>
                            <td>9:00 AM - 6:00 PM</td>
                        </tr>
                        <tr>
                            <th scope="row">Tuesday</th>
                            <td>9:00 AM - 6:00 PM</td>
                        </tr>
                        <tr>
                            <th scope="row">Wednesday</th>
                            <td>9:00 AM - 6:00 PM</td>
                        </tr>
                        <tr>
                            <th scope="row">Thursday</th>
                            <td>9:00 AM - 6:00 PM</td>
                        </tr>
                        <tr>
                            <th scope="row">Friday</th>
                            <td>9:00 AM - 6:00 PM</td>
                        </tr>
                        <tr>
                            <th scope="row">Saturday</th>
                            <td>9:00 AM - 6:00 PM</td>
                        </tr>
                        <tr>
                            <th scope="row">Sunday</th>
                            <td>Closed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Hour;