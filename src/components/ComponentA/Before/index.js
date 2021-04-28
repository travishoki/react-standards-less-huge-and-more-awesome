import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const Wrapper = styled.div`
  border: solid 1px black;
  margin-bottom: 10px;
  padding: 10px;
`;

const ComponentA = () => {
  function toUpperCase(str) {
    return str.toUpperCase();
  }

  return (
    <Wrapper>
      {toUpperCase('Component A')}
    </Wrapper>
  );
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentA);
