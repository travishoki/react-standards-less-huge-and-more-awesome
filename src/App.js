import React from 'react';

import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

const App = () => (
  <div className="App">
    <h2>Component A</h2>
    <p>Breakout Files</p>
    <p>Before</p>
    <ComponentA.Before />
    <p>After</p>
    <ComponentA.After />

    <h2>Component B</h2>
    <p>Breakout Sub Components</p>
    <p>Before</p>
    <ComponentB.Before />
    <p>After</p>
    <ComponentB.After />
  </div>
);

export default App;
