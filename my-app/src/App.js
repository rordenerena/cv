import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faKeyboard, faGraduationCap, faList } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Home from "./components/Home";
import Education from "./components/Education";

import './App.scss';
import Work from "./components/Work";

library.add(fab);

class App extends Component {
  render() {
    return (
        <div className="app">
          <Particles
              className="dp-particles"
              width="80"
              params={{
                  "particles": {
                      "number": {
                          "value": 90,
                          "density": {
                              "enable": true,
                              "value_area": 1500
                          }
                      },
                      "line_linked": {
                          "enable": true,
                          "opacity": 0.25
                      },
                      "move": {
                          "direction": "right",
                          "speed": 0.20
                      },
                      "size": {
                          "value": 2
                      },
                      "opacity": {
                          "anim": {
                              "enable": true,
                              "speed": 2,
                              "opacity_min": 0.65
                          }
                      }
                  },
                  "interactivity": {
                      "events": {
                          "onclick": {
                              "enable": true,
                              "mode": "push"
                          }
                      },
                      "modes": {
                          "push": {
                              "particles_nb": 1
                          }
                      }
                  },
                  "retina_detect": true
              }} />

          <Tabs className="dp-tab-navigation">

            <TabList className="dp-icon-navigation-list">
              <Tab className="icon dp-icon-navigation-list-item">
                <FontAwesomeIcon icon={faHome} />
              </Tab>
              <Tab className="icon dp-icon-navigation-list-item dp-graduation">
                <FontAwesomeIcon icon={faGraduationCap} />
              </Tab>
              <Tab className="icon dp-icon-navigation-list-item">
                <FontAwesomeIcon icon={faKeyboard} />
              </Tab>
              <Tab className="icon dp-icon-navigation-list-item">
                <FontAwesomeIcon icon={faList} />
              </Tab>
                {/*<div className="dp-nerd-infos">
                    Nerd Infos
                </div>*/}
            </TabList>

            <div className="dp-content">
              <TabPanel className="dp-home">
                <FontAwesomeIcon icon={fab} />
                <Home />
              </TabPanel>

              <TabPanel>
                <Education
                    school="Education"
                    technicalSkills="Technical Skills"
                />
              </TabPanel>

              <TabPanel>
                <Work title="work experience"/>
              </TabPanel>

              <TabPanel>
                <h2>Any content 4</h2>
              </TabPanel>
            </div>

          </Tabs>
        </div>
    );
  }
}

export default App;
