import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                        <a href="https://github.com/JlaPrs" target={this.state.target}>
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/jlaprs/" target={this.state.target}>
                            <FontAwesomeIcon icon={['fab', 'codepen']} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.xing.com/profile/Julia_Primus" target={this.state.target}>
                            <FontAwesomeIcon icon={['fab', 'xing']} />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
