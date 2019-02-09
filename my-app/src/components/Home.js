import React, {Component} from "react";
import Typing from 'react-typing-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: '_blank'
        };
    }

    render() {
        return (
            <div>
                <Typing
                    speed={20}
                    cursorClassName="dp-cursor"
                    className="dp-introduction"
                >
                    <h3>Name: <strong>Julia</strong>, <br/>
                        Alter: <strong>30</strong> Jahre alt,
                        <Typing.Delay ms={750} />
                        <Typing.Backspace count={4}/>
                        jung,
                    </h3>
                    <h1>Frontend Entwicklerin</h1>
                    <Typing.Delay ms={750} />
                    <p>aus <strong>Bielefeld / Germany</strong></p>
                </Typing>

                <div className="dp-contact">
                    <ul>
                        <li>
                            <a href="mailto:juliaprimus.jp@gmail.com">
                                <FontAwesomeIcon icon={faAt} />
                            </a>
                        </li>
                        <li>
                            <a href="http://designprimus.de/" target={this.state.target}>
                                <FontAwesomeIcon icon={faGlobeEurope} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.xing.com/profile/Julia_Primus" target={this.state.target}>
                                <FontAwesomeIcon icon={['fab', 'xing']} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/JlaPrs" target={this.state.target}>
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/codingprimus/" target={this.state.target}>
                                <FontAwesomeIcon icon={['fab', 'codepen']} />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        );
    }
}
