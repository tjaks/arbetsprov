import React, { Component } from 'react';


export default class Information extends Component {
    render() {
        return (
            <section className="information">
                <article className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <h2>Vilka är vi?</h2>
                        </div>

                        <div className="col-md-6">
                            <div className="col-md-6">
                                <p>
                                    Quedro startades 2004 utifrån passionen om hur teknik kan underlätta och upprätthålla relationer mellan människor.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p>
                                    Utifrån insikter och erfarenhet kryddat med en dos kreativitet strävar vi efter att utveckla världens bästa CRM-system för fastighetsmäklare.
                                </p>
                            </div>

                        </div>
                    </div>
                </article>
            </section>
        );
    }
}