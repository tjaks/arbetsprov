import React, { Component } from 'react';
import Jumbotron from './startpage/jumbotron2';
import Information from './startpage/information';
import Customers from './startpage/customers';
import OurFunctions from './startpage/our_functions';


export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Jumbotron />
                    <Customers />
                    <OurFunctions />
                    <Information />
                </div>
            </div>
        );
    }
}