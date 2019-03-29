import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayInfo } from '../actions/simpleActions';

const mapStateToProps = state => ({
  info: state.mainReducer.info
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo}, dispatch)
});

class Search extends Component {
  render() {
    return(
      <div className="card">
        <h5 className="row">Rechercher</h5>
        <form className="row" onSubmit={e => e.preventDefault()}>
          <div className="col">
            <div className="row">Âge</div>
            <div className="row">intervalle</div>
          </div>
          <div className="col">
            <div className="row">Score</div>
            <div className="row">intervalle</div>
          </div>
          <div className="col">
            <div className="row">Localisation</div>
            <div className="row">intervalle distance</div>
          </div>
          <div className="col">
            <div className="row">Intérets en commun</div>
            <div className="row">selection click</div>
          </div>
          <div className="col">
            <div className="row"></div>
            <input className="row btn primary" type="submit" value="Rechercher"/>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);