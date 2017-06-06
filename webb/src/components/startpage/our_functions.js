import React, { Component } from 'react';


export default class OurFunctions extends Component {
    render() {
        return (
            <section className="functions">
                <div className="functions__headline">
                         <div className="col-md-6">
                            <h2>Våra funktioner.</h2>
                        </div>
                        <div className="col-md-6">
                            <p>
                                Kundvårdsfunktioner såsom leadshantering, uppföljning, och automatisk kommunikation mellan fastighetsmäklare och deras kunder gör en del av jobbet.
                            </p>
                        </div>
                </div>

                <div className="container">
                    <article className="row">
                        <figure className="col-md-6">
                            <img src="/media/quedrocrm-1.png" />
                        </figure>
                        <div className="col-md-6">
                            <h3>Leadshantering.</h3>
                            <p>
                                Samla alla kontaktförfrågningar från ex. kontakta-mig formulär på hemsidor eller landningssidor för annonser på en enda plats.
                                Få en strukturerad leadshantering och följ vad olika leadskanaler levererar.
                            </p>
                        </div>
                    </article>

                    <article className="row">
                        <div className="col-md-6">
                            <h3>Rapport och KPI.</h3>
                            <p>
                                Genom insamling av data skapas detaljerade rapporter som ger kontorschefer information
                           om hur verksamheten utvecklas och medarbetarna presterar.
                        </p>
                        </div>

                        <figure className="col-md-6">
                            <img src="/media/quedrocrm-2.png" />
                        </figure>
                    </article>

                    <article className="row">
                        <figure className="col-md-6">
                            <img src="/media/quedrocrm-1.png" />
                        </figure>
                        <div className="col-md-6">
                            <h3>Matchning av objekt.</h3>
                            <p>
                                Underlättar försäljningsarbetet genom att matcha personer som vill köpa en bostad som du ska sälja.
                           Du kan även skapa uppföljningsaktiviteter såsom ringlistor och e-post utskick där du ges möjlighet att marknadsföra bostaden.
                        </p>
                        </div>
                    </article>

                    <button className="button button__cta button--blood">Läs mer om våra funktioner -></button>
                </div>
            </section>
        );
    }
}