import React, {Component} from "react";

import Typing from 'react-typing-animation';
import WorkItem from "./WorkItem";

import './Work.scss'

export default class Work extends Component {
    constructor(props) {
        super(props);
        this.props = {
            title: '',
        };
    }

    render() {
        return (
            <div className="dp-work">
                {/*work infos*/}
                <Typing
                    speed={10}
                    cursorClassName="dp-cursor"
                >
                    <div className="dp-title">{this.props.title}</div>
                </Typing>

                <div className="dp-work-experience">
                    <div className="dp-work-experience-list">
                        <WorkItem
                            duration="2005"
                            companyName="Movatec"
                            jobTitle="Técnico de Sistemas (Prácticas)"
                        >
                            - Reparación de ordenadores y redes
                        </WorkItem>

                        {/*C|CON*/}
                        <WorkItem
                            duration="2005 - 2006"
                            companyName="Emucor"
                            jobTitle="Desarrollador C#"
                        >
                            - Colaboración en proyectos de empresa<br/>
                            - Desarrollo de un software de gestión para residencias de estudiantes
                        </WorkItem>

                        {/*C|CON Ausbildung*/}
                        <WorkItem
                            duration="2006 - 2007"
                            companyName="SinfoRED"
                            jobTitle="Técnico de asistencia y reparaciones"
                        >
                            - Mantenimiento del servicio de sanidad pública en Andalucía<br/>
                            - Reparación de equipos informáticos<br/>
                            - Formador de las aplicaciones de gestión de personal sanitario
                        </WorkItem>
                    </div>


                    <div className="dp-work-experience-list second-column">
                        

                        {/*Samir Schwenker Design & IT*/}
                        <WorkItem
                            duration="2009 - 2013"
                            companyName="Zennio-dev"
                            jobTitle="Programador y tester"
                        >
                            - Programador J2SE y web en aplicaciones corporativas<br/>
                            - Tester de productos de domótica basado en el estándar KNX
                        </WorkItem>
                        
                        <WorkItem
                            duration="2013 - 2019"
                            companyName="Zennio-resp"
                            jobTitle="Coordinador de equipo de desarrollo"
                        >
                            - Coordinador de todo el equipo de desarrollo de alto nivel<br/>
                            - Analista/Programador de aplicaciones web corporativas
                        </WorkItem>
                        
                        <WorkItem
                            duration="2019 - *"
                            companyName="Zennio-mgr"
                            jobTitle="Coordinador de equipo de desarrollo y pruebas"
                        >
                            - Coordinador de todo el equipo de alto nivel (dev & test)<br/>
                            - Consultor/Analista/Programador de aplicaciones web corporativas
                        </WorkItem>

                        <WorkItem
                            duration="2020 - *"
                            companyName="FOSS"
                            jobTitle="Colaborador en KDE"
                        >
                            - Probando aplicaciones<br/>
                            - Reportando issues 
                        </WorkItem>

                    </div>

                     {/* <div className="dp-work-experience-list">
                    <WorkItem
                            duration="2020 - *"
                            companyName="FOSS"
                            jobTitle="Colaborador en KDE"
                        >
                            - Probando aplicaciones<br/>
                            - Reportando issues 
                        </WorkItem>
                    </div>  */}

                </div>
                <br/><br/><br/><br/>
            </div>
        );
    }
}
