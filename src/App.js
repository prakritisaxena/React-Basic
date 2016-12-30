/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import Tiles from './tiles';
import DynamicTextChanger from './dynamicTextChanger';
import {Grid, Row, Col} from 'react-bootstrap';

require('./main.scss');



export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {

    const wrapper = {
      width: "60%",
      margin: "0 auto",
      textAlign: "center",
      paddingTop: "30px"
    };

    return (
      <div>
        Working
        <Tiles name="home" background="#5bb2fc"></Tiles>
        <Tiles name="user-o" background="#58ebd3"></Tiles>
        <Tiles name="picture-o" background="#5bb2fc"></Tiles>
        <Tiles name="comment" background="#ff2387"></Tiles>
        <div style={wrapper}>
          <DynamicTextChanger/>
        </div>

        <div className="text-wrapper">
          This is some random text
        </div>

        <div className="wrapper-bootstrap">
          <Grid>
            <Row>
              <Col md={6}>
                <h1>hi there!</h1>
              </Col>
              <Col md={6}>
                <h1>hello!</h1>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }

}

