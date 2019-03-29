import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { simpleAction } from '../actions/simpleActions';
import React, { Component } from 'react';

const mapStateToProps = state => ({
  result: state.mainReducer.result
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({simpleAction}, dispatch),
})

class NotFound extends Component {
  render() {
    return(
      <div>
        <h5>Page introuvable. Merci de revenir à la page d'accueil.</h5>
      </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);