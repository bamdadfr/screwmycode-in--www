import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

// import { actions as playerActions } from '../../reducers/playerReducer'

import PlayerTitle from './PlayerTitle'

const mapStateToProps = state => ({
  ...state,
})

// const mapDispatchToProps = dispatch => ({
//   ...bindActionCreators({
//     ...playerActions,
//   }, dispatch),
// })

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(PlayerTitle)
