import React, { Component } from 'react';


export default class OurFunctions extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="col-md-6">
                                <h4>Besök oss.</h4>
                            </div>
                            <div className="col-md-6">
                                <p>Quedro AB<br />
                                    Sturegatan 4<br />
                                    114 35, STOCKHOLM</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="col-md-6">
                                <h4> Sociala medier.</h4>
                            </div>
                            <figure className="col-md-6">
                                <img src="/media/socialMediaIcons/facebook-logo.png" />
                                <img src="/media/socialMediaIcons/instagram-logo.png" />
                                <img src="/media/socialMediaIcons/linkedin-logo.png" />
                            </figure>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-md-6">
                                <h4>Support.</h4>
                            </div>
                            <div className="col-md-6">
                                <p>+46 8 441 76 67<br />
                                    support@quedro.com</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="col-md-6">
                                <h4>Växel.</h4>
                            </div>
                            <div className="col-md-6">
                                <p>+46 8 441 76 60<br />
                                    info@quedro.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}