import React, {Component} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSocks, faMailBulk, faEnvelope} from '@fortawesome/free-solid-svg-icons';

export default class Education extends Component {

    render() {
        return (
            <div className="dp-section-education">
                <div>
                    {/*allgemeine infos*/}
                    <div className="dp-education-contact">
                        <h3 className="dp-title">Allgemeines</h3>
                        <p>Julia Primus <br/>
                            16.09.1988 in Magdeburg
                        </p>
                        <ul>
                            <li className="dp-education-contact-link">
                                <FontAwesomeIcon icon={faEnvelope} className="dp-education-contact-link-icon" />
                                <a href="mailto:juliaprimus.jp@gmail.com">
                                    juliaprimus.jp[ääät]gmail.com
                                </a>
                            </li>
                            <li className="dp-education-contact-link">
                                <FontAwesomeIcon icon={faMailBulk} className="dp-education-contact-link-icon" />
                                <a href="http://designprimus.de/">
                                    designprimus.de/
                                </a>
                            </li>
                            <li className="dp-education-contact-link">
                                <FontAwesomeIcon icon={faSocks} className="dp-education-contact-link-icon" />
                                <a href="https://www.xing.com/profile/Julia_Primus">
                                    www.xing.com/profile/Julia_Primus
                                </a>
                            </li>
                            <li className="dp-education-contact-link">
                                <FontAwesomeIcon icon={faSocks} className="dp-education-contact-link-icon" />
                                <a href="https://github.com/JlaPrs">
                                    Github: github.com/JlaPrs
                                </a>
                            </li>
                        </ul>
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


                {/*schulisch*/}
                    <div>
                        <div className="dp-title">Schulische Ausbildung</div>
                        <div className="code code-css">
                            <div className="code-content">
                                <code>
                                    <p className="line-1">
                                        <span className="c-y braclet-open">.1995-1999 </span>
                                    </p>
                                    <p className="line-2">
                                        <span className="c-p">Grundschule</span>
                                        <span>:</span>
                                        <span className="c-g"> Oberlübbe</span>
                                        <span>;</span>
                                    </p>
                                    <span className="braclet-close" />

                                    <br/><br/>

                                    <p className="line-1">
                                        <span className="c-y braclet-open">.1999-2005 </span>
                                    </p>

                                    <p className="line-2">
                                        <span className="c-p">Gesamtschule;</span>
                                        <span>:</span>
                                        <span className="c-g"> Hille</span>
                                        <span>;</span>
                                    </p>
                                    <p className="line-2">
                                        <span className="c-p">Abschluss</span>
                                        <span>:</span>
                                        <span className="c-g"> Fachoberschulreife</span>
                                        <span>;</span>
                                    </p>
                                    <span className="braclet-close" />

                                    <br/><br/>

                                    {/*Freiherr-vom-Stein Berufskolleg*/}
                                    <p className="line-1">
                                        <span className="c-y braclet-open">.2005-2008 </span>
                                    </p>
                                    <p className="line-2">
                                        <span className="c-p">Berufskolleg</span>
                                        <span>:</span>
                                        <span className="c-g"> Freiherr-vom-Stein</span>
                                        <span>;</span>
                                    </p>
                                    <p className="line-2">
                                        <span className="c-p">Abschluss</span>
                                        <span>:</span>
                                        <span className="c-g"> Fachhochschulreife</span>
                                        <span>;</span>
                                    </p>
                                    <p className="line-3">
                                        <span className="c-o">&.note</span>
                                        <span>:</span>
                                        <span className="c-g"> 2.4</span>
                                        <span>;</span>
                                    </p>

                                    <span className="braclet-close" />

                                    <br/><br/>

                                    {/*Berufskolleg Senne*/}
                                    <p className="line-1">
                                        <span className="c-y braclet-open">.2011-2013 </span>
                                    </p>
                                    <p className="line-2">
                                        <span className="c-p">Berufskolleg</span>
                                        <span>:</span>
                                        <span className="c-g"> Senne</span>
                                        <span>;</span>
                                    </p>
                                    <p className="line-2">
                                        <span className="c-p">Abschluss</span>
                                        <span>:</span>
                                        <span className="c-g"> Mediengestalterin</span>
                                        <span>;</span>
                                    </p>
                                    <p className="line-3">
                                        <span className="c-o">&.note</span>
                                        <span>:</span>
                                        <span className="c-g"> 2.1</span>
                                        <span>;</span>
                                    </p>
                                    <span className="braclet-close" />
                                </code>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}
