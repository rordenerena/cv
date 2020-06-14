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
                        <a href="https://github.com/rordenerena" target={this.state.target}>
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/dakotadelnorte/" target={this.state.target}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/roberto-orden-erena-5237ab37" target={this.state.target}>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
