import React, {Component} from "react";
import Typing from 'react-typing-animation';
import ImageProfile from "./../images/rorden.png";

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
                <img class="profile" src={ImageProfile} alt="profile picture"/>
                <Typing
                    speed={20}
                    cursorClassName="dp-cursor"
                    className="dp-introduction"
                >
                    <h3>Nombre: <strong>Roberto Orden Erena</strong>, <br/>
                        Edad: <strong>35</strong> años,
                    </h3><br/>
                    <Typing.Delay ms={750} />
                    <h1>People Manager<br/>Full Stack Developer<br/>Mobile Developer<br/>SysAdmin</h1>
                    <Typing.Delay ms={750} />
                    <p>de <strong>Córdoba / Andalucía</strong></p><br/>
                </Typing>

            </div>
        );
    }
}
