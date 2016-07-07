require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Title from './title';
import Lapses from './lapses/lapses';


class AppComponent extends React.Component {
  render() {
    return (
      <main className="main">
        <Title />
        <Lapses />
      </main>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
