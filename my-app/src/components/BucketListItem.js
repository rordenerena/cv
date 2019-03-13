import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class BucketListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: '_blank',
            list: [
                {
                    id: '1',
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
                    title:'Hover effekt on arrow button',
                    link: 'https://codepen.io/jlaprs/pen/bZBWWp',
                    platform: 'codepen',
                    text: {
                        title: 'Hover effect',
                        shortDescription: 'SCSS hover on Arrow Button / ONLY CSS'
                    }
                }
            ]
        };
    }

    render() {

        return (
            <div className="dp-projects">
                <ul className="jla-bucketlist">
                    <li className="jla-bucketlist-item">Lorem dolor amet sit </li>
                    <li className="jla-bucketlist-item">Lorem ipsum dolor sit amet consecutor adipiscingLorem ipsum dolor sit amet </li>
                    <li className="jla-bucketlist-item">Lorem ipsum dolor sit amet consecutor</li>
                    <li className="jla-bucketlist-item">Lorem dolor amet sit </li>
                    <li className="jla-bucketlist-item">Lorem ipsum dolor sit amet consecutor adipiscingLorem ipsum dolor sit amet </li>
                    <li className="jla-bucketlist-item">Lorem ipsum dolor sit amet consecutor</li>
                    <li className="jla-bucketlist-item">Lorem dolor amet sit </li>
                    <li className="jla-bucketlist-item">Lorem ipsum dolor sit amet consecutor adipiscingLorem ipsum dolor sit amet </li>
                    <li className="jla-bucketlist-item">Lorem ipsum dolor sit amet consecutor</li>
                    <li className="jla-bucketlist-item">Lorem dolor amet sit </li>
                </ul>
            </div>
        );
    }
}
