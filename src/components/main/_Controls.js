import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as playerActions } from '../../reducers/playerReducer'

import Controls from './Controls'

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    ...playerActions,
  }, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls)
