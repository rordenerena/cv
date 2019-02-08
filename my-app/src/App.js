import React, { Component } from 'react';
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
        <Tabs className="dp-tab-navigation">

          <TabList className="dp-icon-navigation-list">
            <Tab className="icon dp-icon-navigation-list-item">
              <FontAwesomeIcon icon={faHome} />
            </Tab>
            <Tab className="icon dp-icon-navigation-list-item">
              <FontAwesomeIcon icon={faGraduationCap} />
            </Tab>
            <Tab className="icon dp-icon-navigation-list-item">
              <FontAwesomeIcon icon={faKeyboard} />
            </Tab>
            <Tab className="icon dp-icon-navigation-list-item">
              <FontAwesomeIcon icon={faList} />
            </Tab>
          </TabList>

          <div className="dp-content">
            <TabPanel className="dp-home">
              <FontAwesomeIcon icon={fab} />
              <Home />
            </TabPanel>

            <TabPanel>
              <Education
                  school="Schulische Ausbildung"
                  technicalSkills="Technical Skills"
              />
            </TabPanel>

            <TabPanel>
              <Work/>
            </TabPanel>

            <TabPanel>
              <h2>Any content 4</h2>
            </TabPanel>
          </div>

        </Tabs>
    );
  }
}

export default App;
