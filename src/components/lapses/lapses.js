import React, {Component} from 'react';
import axios from 'axios';

import Lapse from './lapse';

class Lapses extends Component {
  constructor() {
    super();
    this.state = {lapses: []};
  }

  componentDidMount() {
    axios
      .get('/videos/camaras.json')
      .then(response => {
        this.setState({lapses: response.data});
      });
  }

  render() {
    return (
      <div className="lapses">
        {this.state.lapses.map((lapse, i) => (
          <Lapse key={i} lapse={lapse} />
        ))}
      </div>
    );
  }
}

export default Lapses;
