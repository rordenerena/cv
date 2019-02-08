import React, {Component} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSocks, faMailBulk, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import EducationItem from "./EducationItem";
import WorkItem from "./WorkItem";


export default class Education extends Component {

    render() {
        return (
            <div className="dp-section-education">
                <div>
                    {/*work infos*/}
                    <div className="dp-title">Berufliche Ausbildung</div>

                    {/*YOU?*/}
                    <div className="code code-js">
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


                {/*schulisch*/}
                    <div>
                        <div className="dp-title">Schulische Ausbildung</div>
                        <div className="code code-css">
                            <div className="code-content">
                                <code>
                                    <EducationItem
                                        duration="1995-1999"
                                        school="Grundschule"
                                        schoolName="Oberlübbe"
                                    />

                                    <EducationItem
                                        duration="1999-2005"
                                        school="Gesamtschule"
                                        schoolName="Hille"
                                        graduation="Fachoberschulreife"
                                        note="2.5"
                                    />

                                    {/*Freiherr-vom-Stein Berufskolleg*/}
                                    <EducationItem
                                        duration="2005-2008"
                                        school="Berufskolleg"
                                        schoolName="Freiherr-vom-Stein"
                                        graduation="Fachhochschulreife"
                                        note="2.4"
                                    />


                                    {/*Berufskolleg Senne*/}
                                    <EducationItem
                                        duration="2011-2013"
                                        school="Berufskolleg"
                                        schoolName="Senne"
                                        graduation="Mediengestalterin für Digital- und Printmedien"
                                        note="2.1"
                                    />
                                </code>
                            </div>
                        </div>

                        {/*Technical Skills*/}
                        <div className="dp-technical-skills">
                            <div className="dp-title">Technical Skills</div>
                            <div className="code code-js">
                                <div className="code-content">
                                    <code>
                                        <span className="c-y">const </span><span className="c-b">css3</span> = [<span className="c-g">“css”</span>, <span className="c-g">“sass/scss”</span>, <span className="c-g">“less”</span>];<br/>
                                        <span className="c-y">const </span><span className="c-b">frameworks</span> = [<span className="c-g">“bootstrap”</span>, <span className="c-g">“react”</span>, <span className="c-g">“jquery”</span>];<br/>
                                        <span className="c-y">const </span><span className="c-b">adobe</span> = [<span className="c-g">“photoshop”</span>, <span className="c-g">“indesign”</span>, <span className="c-g">“illustrator”</span>];<br/><br/>
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}
