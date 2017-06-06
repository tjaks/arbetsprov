import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Customers extends Component {
    render() {
        return (
            <section className="customers">
                <ul>
                    <li><img src="/media/customerLogos/skandiamaklarna_logo.png" /></li>
                    <li><img src="/media/customerLogos/lansforsakrningar_logo.png" /></li>
                    <li><img src="/media/customerLogos/husmanhagberg-logo.png" /></li>
                    <li><img src="/media/customerLogos/skandiamaklarna_logo.png" /></li>
                    <li><img src="/media/customerLogos/lansforsakrningar_logo.png" /></li>
                    <li>Möt våra <Link to="/">kunder</Link>-></li>
                </ul>

            </section>
        );
    }
}