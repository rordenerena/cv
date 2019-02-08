import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faKeyboard, faGraduationCap, faList } from '@fortawesome/free-solid-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Home from "./components/Home";
import Education from "./components/Education";

import './App.scss';

class App extends Component {
  render() {
    return (
        <div>
          <div className="dp-container">
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
                <div>
                  <TabPanel className="dp-content">
                    <Home />
                  </TabPanel>
                  <TabPanel>
                    <Education />
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 3</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 4</h2>
                  </TabPanel>
                </div>
              </Tabs>

          </div>


        </div>

    );
  }
}

export default App;
