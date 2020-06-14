import React, { Component } from "react";

import Typing from 'react-typing-animation';
import EducationItem from "./EducationItem";

export default class Education extends Component {
    constructor(props) {
        super(props);
        this.props = {
            schoolSkills: 'Educación',
            technicalSkills: 'Conocimientos técnicos'
        };
    }

    render() {
        return (
            <div className="dp-section-education">
                {/*schulisch*/}
                <div className="dp-school">
                    <Typing
                        speed={10}
                        cursorClassName="dp-cursor"
                    >
                        <div className="dp-title"> {this.props.schoolSkills}</div>
                    </Typing>

                    <div className="code code-css dp-work-experience-list">
                        <div className="code-content">
                            <code>
                                <EducationItem
                                    duration="2003-2005"
                                    school="Centro"
                                    schoolName="Ramón y Cajal"
                                    graduation="Administrador de Sistemas Informáticos"
                                    note="8"
                                />

                                <EducationItem
                                    duration="2005-2009"
                                    school="Centro"
                                    schoolName="UCO"
                                    graduation="Ingeniería en Informática de Gestión"
                                    note="-"
                                />

                                {/*Freiherr-vom-Stein Berufskolleg*/}
                                <EducationItem
                                    duration="2007"
                                    school="Centro"
                                    schoolName="FORMAN"
                                    graduation="Experto en Java 5"
                                    note="Certificado (87%)"
                                />

                                {/*Berufskolleg Senne*/}
                                <EducationItem
                                    duration="2013-2020"
                                    school="Centro"
                                    schoolName="UOC"
                                    graduation="Graduado en Ingeniería Informática"
                                    note="7.3 (Pendiente 1 asignatura)"
                                />
                            </code>
                        </div>
                    </div>
                </div>

                {/*Technical Skills*/}
                <div className="dp-technical-skills">
                    <Typing
                        speed={10}
                        cursorClassName="dp-cursor"
                        startDelay={1500}
                    >
                        <div className="dp-title">{this.props.technicalSkills}</div>
                    </Typing>

                    <div className="code code-js dp-technical-skills-list">
                        <div className="code-content">
                            <code>

                                <span className="c-y">const </span><span className="c-b">sistema_operativo</span> = [<span className="c-g">“Linux”</span>, <span className="c-g">“Windows & WSL”</span>, <span className="c-g">“OSX”</span>];<br />

                                <span className="c-y">const </span><span className="c-b">servicios</span> = [<span className="c-g">“AWS”</span>, <span className="c-g">“Firebase GCM”</span>, <span className="c-g">“Gitlab”</span>, <span className="c-g">“Github”</span>, <span className="c-g">“Apple Connect”</span>];<br />

                                <span className="c-y">const </span><span className="c-b">backend</span> = [<span className="c-g">“nodejs</span>, <span className="c-g">“python”</span>, <span className="c-g">“bash”</span>, <span className="c-g">“PHP”</span>, <span className="c-g">“Java”</span>];<br />


                                <span className="c-y">const </span><span className="c-b">frameworks</span> = [<span className="c-g">“Angular”</span>, <span className="c-g">“bootstrap”</span>, <span className="c-g">“jquery”</span>];<br />

                                <span className="c-y">const </span><span className="c-b">css3</span> = [<span className="c-g">“css”</span>, <span className="c-g">“sass/scss”</span>, <span className="c-g">“less”</span>];<br />

                                <span className="c-y">const </span><span className="c-b">plataformas_moviles</span> = [<span className="c-g">“iOS (ObjC)”</span>, <span className="c-g">“Android”</span>, <span className="c-g">“Ionic”</span>, <span className="c-g">“React Native (basic)”</span>];<br />


                                <span className="c-y">const </span><span className="c-b">diseño</span> = [<span className="c-g">“Gimp”</span>, <span className="c-g">“Inkscape”</span>, <span className="c-g">“SVG”</span>, <span className="c-g">“kdenlive”</span>, <span className="c-g">“avidemux”</span>, <span className="c-g">“audacity”</span>];<br />


                                <span className="c-y">const </span><span className="c-b">ofimatica</span> = [<span className="c-g">“LibreOffice”</span>, <span className="c-g">“Microsoft Office”</span>, <span className="c-g">“WPS Office”</span>, <span className="c-g">“OnlyOffice”</span>, <span className="c-g">“Google Docs”</span>];<br />

                                <span className="c-y">const </span><span className="c-b">organizacion</span> = [<span className="c-g">“Trello”</span>, <span className="c-g">“Wekan”</span>, <span className="c-g">“OneNote”</span>, <span className="c-g">“Google Keep”</span>];<br />

                                <span className="c-y">const </span><span className="c-b">herramientas</span> = [<span className="c-g">“PlantUML”</span>, <span className="c-g">“Mermaid.js”</span>, <span className="c-g">“Markdown”</span>, <span className="c-g">“Pandoc”</span>];<br />

                                <br />
                            </code>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
