import React, {Component} from "react";
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
            <div className="dp-contact">
                <ul className="dp-contacts">
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
                        <a href="https://codepen.io/jlaprs/" target={this.state.target}>
                            <FontAwesomeIcon icon={['fab', 'codepen']} />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
