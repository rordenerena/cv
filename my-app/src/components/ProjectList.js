import React, {Component, PropTypes} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: '_blank',
            list: [
                {
                    id: '1',
                    img: 'http://placekitten.com/300/200',
                    title:'Titel',
                    link: 'https://codepen.io/codingprimus/pen/YBjgex?page=3',
                    platform: 'github',
                    text: {
                        title: 'Glitch clock',
                        shortDescription: 'Just a fork, not my project'
                    }
                },
                {
                    id: '2',
                    img: 'http://placekitten.com/300/200',
                    title:'Titel',
                    link: 'https://github.com/JlaPrs',
                    platform: '',
                    text: {
                        title: 'Welcome on Page 1',
                        shortDescription: 'Just one of these pages'
                    }
                },
                {
                    id: '3',
                    img: 'http://placekitten.com/300/200',
                    title:'Titel',
                    link: 'https://github.com/JlaPrs',
                    platform: 'codepen',
                    text: {
                        title: 'Welcome on Page 1',
                        shortDescription: 'Just one of these pages'
                    }
                },
                {
                    id: '3',
                    img: 'http://placekitten.com/300/200',
                    title:'Titel',
                    link: 'https://github.com/JlaPrs',
                    platform: 'codepen',
                    text: {
                        title: 'Welcome on Page 1',
                        shortDescription: 'Just one of these pages'
                    }
                },
            ]
        };
    }

    render() {

        return (
            <div className="dp-projects">
                {this.state.list.map(item => (
                    <div key={item.id} className={"dp-projects-list-item"} >

                        <picture className="dp-project-img">
                            <img src={item.img} alt={item.title} />
                        </picture>

                        <div className="dp-projects-list-item-text">
                            <div className="dp-projects-list-item-icon">
                                {item.platform  === 'github' ? <FontAwesomeIcon icon={['fab', 'github']}/> : <FontAwesomeIcon icon={['fab', `${item.platform}`]}/>}
                            </div>

                            <div>
                                <a href={item.link} target={this.state.target} className="dp-projects-list-item-link">{item.text.title}</a>
                                <p>{item.text.shortDescription}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        );
    }
}
