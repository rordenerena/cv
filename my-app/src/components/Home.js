import React, {Component} from "react";
import Typing from 'react-typing-animation';

export default class Home extends Component {

    render() {
        return (
            <div className="dp-content dp-home">
                <Typing
                    speed={20}
                    cursorClassName="dp-cursor"
                >
                    <div className="dp-introduction">
                        <h3>Name: <strong>Julia</strong>, <br/>
                            Alter: <strong>30</strong> Jahre alt,
                            <Typing.Delay ms={750} />
                            <Typing.Backspace count={4}/>
                            jung,
                        </h3>
                        <h1>Frontend Entwicklerin</h1>
                        <Typing.Delay ms={750} />
                        <p>aus <strong>Bielefeld / Germany</strong></p>
                    </div>
                </Typing>

                <div className="dp-contact">
                    <h4>Kontakt:</h4>
                    <blockquote className="dp-blockquote">
                        <ul>
                            <li className="dp-blockquote-item">
                                Email:
                                <a href="mailto:juliaprimus.jp@gmail.com">
                                    juliaprimus.jp[ääät]gmail.com
                                </a>
                            </li>
                            <li className="dp-blockquote-item">
                                Web:
                                <a href="http://designprimus.de/">
                                    http://designprimus.de/
                                </a>
                            </li>
                            <li className="dp-blockquote-item">
                                Xing:
                                <a href="https://www.xing.com/profile/Julia_Primus">
                                    https://www.xing.com/profile/Julia_Primus
                                </a>
                            </li>
                            <li className="dp-blockquote-item">
                                Github:
                                <a href="https://github.com/JlaPrs">
                                    Github: https://github.com/JlaPrs
                                </a>
                            </li>
                        </ul>
                    </blockquote>
                </div>

                <Typing>
                    <Typing.Delay ms={7300} speed={50} />
                    <h6><em>January 02nd, 2019</em></h6>
                </Typing>

                <div>
                    {/*<CodeButton title="Lebenslauf" />*/}
                </div>
            </div>
        );
    }
}