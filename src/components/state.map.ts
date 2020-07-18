import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as playerActions from './state.player.actions'
import * as threeActions from './state.three.actions'

const mapStateToProps = (state: any): any => ({
    ...state,
})

const mapDispatchToProps = (dispatch: any): any => ({
    ...bindActionCreators (
        {
            ...playerActions,
            ...threeActions,
        },
        dispatch,
    ),
})

export const stateMap = (component: any): any => {

    return connect (
        mapStateToProps,
        mapDispatchToProps,
    ) (component)

}
