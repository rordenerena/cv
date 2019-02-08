import React, {Component, PropTypes} from "react";

import WorkItem from "./WorkItem";

import './Work.scss'

export default class Work extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                {/*work infos*/}
                <div className="dp-title">Berufliche Ausbildung</div>

                <div className="dp-work-experience">
                    <div>
                        {/*YOU?*/}
                        <div className="dp-work-experience-item code code-js">
                            <div className="code-content">
                                <code>
                                    <span className="c-y">const </span>
                                    <span className="c-b">you? </span>
                                    = [ <br/>
                                    <span className="c-c dp-code-spacer">//contact me</span> <br/>
                                    ];
                                </code>
                            </div>
                        </div>

                        {/*Arvato Systems*/}
                        <WorkItem
                            duration="Jan 2017 - heute"
                            companyName="Arvato Bertelsman"
                            jobTitle="Advanced Frontend developer"
                        >
                            Umsetzung mit JavaScript, ReAct, SCSS,
                            CMS CoreMedia Templating
                            Umsetzung eines Living Styleguides (Patternlab.io)
                            Enge Absprachen zwischen Backend & Designern
                            Nutzung von Jira, Confluence, Scrum, Kanban
                        </WorkItem>

                        {/*C|CON*/}
                        <WorkItem
                            duration="Jan 2014 - Dez 2017"
                            companyName="C|CON GmbH"
                            jobTitle="Webdesignerin / Frontend developer"
                        >
                            Frontend Entwicklung eines Onlinesshops (Shopware),<br />
                            Verantwortlich für die Auzubildenden,<br />
                            Professionelle Bildbearbeitung für Produktpräsentationen,<br />
                            Betreuung & Kontrolle der Produktionsprozesse
                        </WorkItem>
                    </div>


                    <div>
                        {/*C|CON Ausbildung*/}
                        <WorkItem
                            duration="Aug 2011 - Dez 2013"
                            companyName="C|CON GmbH"
                            jobTitle="Ausbildung zur Mediengestalterin für Digital- & Printmedien"
                        >
                            Design & Realisierung von Digital- & Printmedien,<br />
                            Vertretung der Abteilungsleitung im Produktionsbereich,<br />
                            Herstellung von Wandtattoos
                        </WorkItem>

                        {/*Samir Schwenker Design & IT*/}
                        <WorkItem
                            duration="Mai 2009 - Jul 2014"
                            companyName="Samir Schwenker Design & IT"
                            jobTitle="Praktikantin & Aushilfe als Mediengestalteri"
                        >
                            Kundenbetreuung, Bildbearbeitung,<br />
                            Entwicklung von Webseiten mit HTML, CSS und JavaScript,<br />
                            Erstellung von diversen Printmedien (Logos, Visitenkarten, Broschüren, Flyer)
                        </WorkItem>
                    </div>

                </div>
            </div>
        );
    }
}
