import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
    renderBands = () => {
        return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)
    }

  render() {
    return(
      <div>
        <ul>
            {this.renderBands()}
        </ul>
      </div>
    );
  }
};

export default Bands;