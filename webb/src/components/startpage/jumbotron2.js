import React, { Component } from 'react';


export default class Jumbotron extends Component {
    render() {
        return (
            <section className="startpage-second">

                <article className="startpage-second__headline">
                    <div className="col-md-6">
                        <h1>Vi vill underlätta vardagen <br />för fastighetsmäklare.</h1>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li>Öka dina försäljningsmöjligheter</li>
                            <li>Fokuser på det roliga</li>
                            <li>Få en strukturerad vardag</li>
                        </ul>
                    </div>

                </article>
                <div className=" startpage-second__button col-md-12">
                    <button className="button button__cta button--blood">Läs mer -></button>
                </div>



                <figure className="startpage-second__mockup ">
                    <button className="button button__play button--black"></button>
                    <img src="/media/macbook-flat-texture.png" />
                </figure>

            </section>
        );
    }
}