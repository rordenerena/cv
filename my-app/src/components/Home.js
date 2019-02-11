import React, {Component} from "react";
import Typing from 'react-typing-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import Contact from './Contacts';

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
                    <h3>Name: <strong>Julia Primus</strong>, <br/>
                        Alter: <strong>30</strong> Jahre alt,
                        <Typing.Delay ms={750} />
                        <Typing.Backspace count={4}/>
                        jung,
                    </h3>
                    <Typing.Delay ms={750} />
                    <h1>Frontend Entwicklerin</h1>
                    <Typing.Delay ms={750} />
                    <p>aus <strong>Bielefeld / NRW</strong></p>
                </Typing>

            </div>
        );
    }
}
