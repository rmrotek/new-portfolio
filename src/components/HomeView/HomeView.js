import React, { Component } from 'react';
import myFace from '../../myface.jpg'

class HomeView extends Component {

  state= {
    name: 'Remigiusz',
    surname: 'Mrotek',
    picture: myFace,

  }

  render() {
    return (
      <>
      Home view
      <img src={this.state.picture} alt="my face" />;
      </>
    );
  }
}

export default HomeView;
