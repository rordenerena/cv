import React, {Component} from "react";

import Typing from 'react-typing-animation';

export default class Projects extends Component {
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
                        {/* Content here */}
                        coming soon
                    </div>


                    <div className="dp-work-experience-list second-column">
                        {/* content here */}
                    </div>

                </div>
            </div>
        );
    }
}
