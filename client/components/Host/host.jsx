import React from 'react';
import {Grid, Row, Col, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';
import Calendar from 'rc-calendar';
import Thumbnail from './thumbnail.jsx';

import MenuItem from './menuItem.jsx';
import MenuBuilder from './menubuilder.jsx';
import DisplayMenus from './displaymenus.jsx';
import ViewEvents from './ViewEvents.jsx';

class Host extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      showMenuBuilder: false,
      showMenuViewer: false,
      showCalendar: false
    };
    this.calendarClick = this.calendarClick.bind(this);
    
  }

  calendarClick() {
    this.setState({showCalendar: !this.state.showCalendar});
  }
  menuBuilderToggle() {
    this.setState({
      showMenuBuilder: !this.state.showMenuBuilder,
    });
  }
  menuViewerToggle() {
    this.setState({
      showMenuViewer: !this.state.showMenuViewer
    });
  }
  
  render() {
    return (
      <div >
        <h1 className="spacerL90">HOST DASHBOARD</h1>
        <Grid>
          <Row>  
            <Col md={12}>
              <ButtonToolbar>
                <ButtonGroup>
                  <Button bsStyle="primary">Edit Profile</Button>
                  <Button >Schedule Event</Button>
                  <Button onClick={this.calendarClick}>View Calendar</Button>
                  <Button onClick={this.menuBuilderToggle.bind(this)}>Create Menu</Button>
                  <Button onClick={this.menuViewerToggle.bind(this)}>View Menus</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row className="spacerT10">
            <Col sm={4}>
              {Thumbnail} 
            </Col>
            <Col sm={8}>
              {this.state.showMenuBuilder && <MenuBuilder />}  
            </Col>
            <Col sm={8}>
              {this.state.showMenuViewer && <DisplayMenus />}
            <Col sm={4}>
              {this.state.showCalendar && <ViewEvents />}
            </Col>
            <Col sm={4}>
              {this.state.showCalendar && <Calendar />}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

module.exports = Host;

