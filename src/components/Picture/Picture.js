import React, { Component } from 'react';

class Picture extends Component {



  render() {
    return (
      <div style={{
        backgroundImage: `url(${this.props.picture})`,
        backgroundSize: 'cover',
        width: 250,
        height: 250,
        borderRadius: 10
      }}>
      </div>
    );
  }
}

export default Picture;
