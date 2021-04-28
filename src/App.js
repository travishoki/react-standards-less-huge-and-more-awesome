import React from 'react';

import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

const App = () => (
  <div className="App">
    <section>
      <h2>Component A</h2>
      <p>Breakout Files</p>

      <h3>Before</h3>
      <ComponentA.Before />

      <h3>After</h3>
      <ComponentA.After />
    </section>

    <hr />

    <section>
      <h2>Component B</h2>
      <p>Breakout Sub Components</p>

      <h3>Before</h3>
      <ComponentB.Before />

      <h3>After</h3>
      <ComponentB.After />
    </section>

    <hr />

    <section>
      <h2>Component C</h2>
      <p>Seperation of Concerns</p>

      <h3>Before</h3>
      <ComponentC.Before />

      <h3>After</h3>
      <ComponentC.After />
    </section>
  </div>
);

export default App;
