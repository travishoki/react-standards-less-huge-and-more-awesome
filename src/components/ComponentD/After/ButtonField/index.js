import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonField from './ButtonField';
import { getIsButtonActive } from '../../../../redux/selectors/settings';
import * as reduxActions from '../../../../redux/actions/settings';

function mapStateToProps(state) {
  return {
    isButtonActive: getIsButtonActive(state),
  };
}

function mapDispatchToProps(dispatch) {
  const { setIsButtonActive } = reduxActions;
  const actions = {
    setIsButtonActive,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonField);
