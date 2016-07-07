import React, {Component} from 'react';
//import {default as Video} from 'react-html5video';

class Lapse extends Component {
  render() {
    return (
      <div className="lapse">
        <video loop muted controls className="video">
          <source src={`/videos/${this.props.lapse.id}.mp4`} type="video/mp4" />
        </video>
      </div>
    );
  }
}

Lapse.propTypes = {
  lapse: React.PropTypes.object.isRequired
};

export default Lapse;
