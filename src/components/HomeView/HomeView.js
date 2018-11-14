import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";

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
        <Grid container justify='center' style={{ backgroundColor: 'lightgrey' }}>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <br />
          </Grid>

          <Grid container item xl={10} lg={10} md={10} sm={12} xs={12} justify='space-around' style={{ border: '2px solid black', backgroundColor: 'lightblue' }}>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <br />
            </Grid>

            <Grid item xl={8} lg={8} md={8} sm={8} xs={11}>
              <Typography variant='h3' align='center' paragraph>
                {`${this.state.name} ${this.state.surname}`}
              </Typography>

              <Typography variant='subtitle1' align='left' paragraph>
                {this.state.headerDescription}
              </Typography>
            </Grid>

            <Grid item container xl={3} lg={3} md={3} sm={3} xs={12} justify='center' style={{ border: '2px solid black' }}>
              <Picture picture={this.state.picture} />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <br />
              <br />
            </Grid>

            <Grid item xl={12} lg={8} md={12} sm={12} xs={11}>
              <Typography variant='h4' align='center' paragraph>
                Contact information and where to find me
              </Typography>
            </Grid>

            <Grid item container xl={12} lg={8} md={12} sm={12} xs={11} justify='space-around'>
             {/* temporary inline styles */}

                <a href='https://www.linkedin.com/in/remigiusz-mrotek/' target='_blank' rel="noopener noreferrer" style={{color: 'black', fontSize: '3em'}}>
                  <FaLinkedin />
                </a>

                <a href='https://github.com/rmrotek' target='_blank' rel="noopener noreferrer" style={{color: 'black', fontSize: '3em'}}>
                  <FaGithub />
                </a>

                <a href='mailto: remek87@gmail.com' target='_blank' rel="noopener noreferrer" style={{color: 'black', fontSize: '3em'}}>
                  <FaEnvelope />
                </a>
              
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <br />
            </Grid>



          </Grid>

        </Grid>
      </>
    );
  }
}

export default HomeView;
