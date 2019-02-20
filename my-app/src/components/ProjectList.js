import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: '_blank',
            list: [
                {
                    id: '1',
                    img: 'https://github.com/JlaPrs/glitch-text-effect/raw/master/glitch-text/src/img/Glitch-Effect.jpg',
                    title:'Typing with Glitch Effect',
                    link: 'https://github.com/JlaPrs/glitch-text-effect',
                    platform: 'github',
                    text: {
                        title: 'Glitch Effect',
                        shortDescription: 'Typing with a fancy Glitch Effect'
                    }
                },
                {
                    id: '2',
                    img: 'http://placekitten.com/300/140',
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
                    img: 'http://placekitten.com/300/140',
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
                    img: 'http://placekitten.com/300/140',
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
