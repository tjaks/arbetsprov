import React, { Component } from 'react';


export default class Jumbotron extends Component {
    render() {
        return (
            <section className="startpage">

                <article className="startpage__headline">
                    <h1>Vi vill underlätta vardagen <br/>för fastighetsmäklare.</h1>
                    <ul>
                        <li><img src="media/dollar-icon.png" />Öka dina försäljningsmöjligheter</li>
                        <li><img src="media/tie-icon.png" /> Fokuser på det roliga</li>
                        <li><img src="media/clock-icon.png" /> Få en strukturerad vardag</li>
                    </ul>

                    <button className="button button__cta button--blood">Läs mer</button>
                </article>

                <figure className="startpage__mockup">
                    <button className="button button__play button--blood-reversed"></button>
                    <img src="/media/macbook-flat.png" /> 
                </figure>

            </section>
        );
    }
}