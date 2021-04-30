import React from 'react';

import ComponentAAfter from './components/ComponentA/After';
import ComponentABefore from './components/ComponentA/Before';

import ComponentBAfter from './components/ComponentB/After';
import ComponentBBefore from './components/ComponentB/Before';

import ComponentCAfter from './components/ComponentC/After';
import ComponentCBefore from './components/ComponentC/Before';

import ComponentDAfter from './components/ComponentD/After';
import ComponentDBefore from './components/ComponentD/Before';

const App = () => (
  <div className="App">
    <h1>React Standards - Less Huge and More Awesome</h1>

    <section>
      <h2>Component A</h2>
      <p>Breakout Files</p>

      <h3>Before</h3>
      <ComponentABefore />

      <h3>After</h3>
      <ComponentAAfter />

      <h3>Bad Example</h3>
      <p>src/components/availability/availability.jsx</p>
    </section>

    <hr />

    <section>
      <h2>Component B</h2>
      <p>Sub Components vs Render Functions </p>

      <h3>Before</h3>
      <ComponentBBefore />

      <h3>After</h3>
      <ComponentBAfter />

      <h3>Bad Example</h3>
      <p>src/components/dashboard/setupInfo.js</p>
    </section>

    <hr />

    <section>
      <h2>Component C</h2>
      <p>Sub Components - Statefull Components</p>

      <h3>Before</h3>
      <ComponentCBefore />

      <h3>After</h3>
      <ComponentCAfter />
    </section>

    <hr />

    <section>
      <h2>Component D</h2>
      <p>Sub Components - Connected Components</p>

      <h3>Before</h3>
      <ComponentDBefore />

      <h3>After</h3>
      <ComponentDAfter />
    </section>
  </div>
);

export default App;
