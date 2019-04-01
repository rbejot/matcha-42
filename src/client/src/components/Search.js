import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayInfo } from '../actions/simpleActions';
import {AgeRange, ScoreRange, LocalisationRange, CommonInterests} from './Search/'

const mapStateToProps = state => ({
  info: state.mainReducer.info,
  userAge: 25
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo}, dispatch)
});

class Search extends Component {
  render() {
    return(
      <div className="card">
        <h5 className="row">Rechercher</h5>
        <form onSubmit={e => e.preventDefault()}>
          <AgeRange/>
          <ScoreRange/>
          <LocalisationRange/>
          <CommonInterests/>
          <div className="row">
            <input className="col btn primary" type="submit" value="Rechercher"/>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);