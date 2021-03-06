import React from 'react';
import Header from './components/header/'
import Headline from './components/headline/'

import './styles/App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" description="Click the button to render posts"/>
      </section>
    </div>
  );
}

export default App;
