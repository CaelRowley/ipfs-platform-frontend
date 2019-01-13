import App from './App.component'
import { connect } from 'react-redux'

import {
  changeHomeText
} from '../../data/actions/actions'

const mapStateToProps = (state) => {
  const {
    homeText,
    componentText1,
    componentText2
  } = state.home

  return {
    homeText,
    componentText1,
    componentText2
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeText: () => dispatch(changeHomeText())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
