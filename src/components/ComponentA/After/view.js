import React from 'react';

import { Wrapper } from './styles';
import { toUpperCase } from './helpers';

const ComponentA = () => (
  <Wrapper>
    {toUpperCase('Component A')}
  </Wrapper>
);

export default ComponentA;
