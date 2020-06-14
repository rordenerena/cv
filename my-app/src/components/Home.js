import React, {Component} from "react";
import Typing from 'react-typing-animation';

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
                    <h3>Nombre: <strong>Roberto Orden Erena</strong>, <br/>
                        Edad: <strong>35</strong> años,
                        <Typing.Delay ms={750} />
                        <Typing.Backspace count={5}/>
                        añitos,
                    </h3><br/>
                    <Typing.Delay ms={750} />
                    <h1>People Manager<br/>Full Stack Developer<br/>Mobile Developer<br/>SysAdmin</h1>
                    <Typing.Delay ms={750} />
                    <p>de <strong>Córdoba / Andalucía</strong></p><br/>
                    <p>asentado en <strong>Toledo</strong></p>
                </Typing>

            </div>
        );
    }
}
