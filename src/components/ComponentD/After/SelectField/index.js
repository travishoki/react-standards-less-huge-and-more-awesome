import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SelectField from './SelectField';
import { getOptionValue } from '../../../../redux/selectors/settings';
import * as reduxActions from '../../../../redux/actions/settings';

function mapStateToProps(state) {
  return {
    optionValue: getOptionValue(state),
  };
}

function mapDispatchToProps(dispatch) {
  const { setOptionValue } = reduxActions;
  const actions = {
    setOptionValue,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectField);
