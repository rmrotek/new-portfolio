import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core'
import Picture from '../Picture/Picture';

import myFace from '../../myface.jpg'
class HomeView extends Component {

  state = {
    name: 'Remigiusz',
    surname: 'Mrotek',
    headerDescription: `From the youngest age I was sitting in front of a computer.
    I decided to finally be productive about it and I started to take interest in programming - from July 2018,
    I do it as regularly as possible. I decided to quit my job and sign up for the Front-end daily course to get results as soon as possible.
    Currently, I feel very good (for a 'freshman') in the Front-end environment.
    After learning about React.js I am very reluctant to return to pure HTML and JavaScript.`,
    picture: myFace,

  }

  render() {
    return (
      <>
        <Grid container justify='center'>
          <Grid container item xl={10} lg={10} md={10} sm={10} xs={10} justify='space-around' style={{ border: '2px solid black' }}>


            <Grid item xl={12} lg={8} md={12} sm={12} xs={12}>
              <Typography variant='h3' align='center' paragraph>
                {`${this.state.name} ${this.state.surname}`}
              </Typography>

              <Typography variant='subtitle1' align='left'>
                {this.state.headerDescription}
              </Typography>
            </Grid>
            <Grid item container xl={4} lg={3} md={12} sm={12} xs={12} justify='center' style={{ border: '2px solid black' }}>
              <Picture picture={this.state.picture} />
            </Grid>



          </Grid>

        </Grid>
      </>
    );
  }
}

export default HomeView;
