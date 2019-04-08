import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayInfo } from '../actions/simpleActions';
import { searchSubmit} from '../actions/searchActions';
import {AgeRange, ScoreRange, LocalisationRange, CommonInterests} from './Search/';

const mapStateToProps = state => ({
  info: state.mainReducer.info,
  userAge: 25,
  minAge: state.searchReducer.minAge,
  maxAge: state.searchReducer.maxAge,
  minScore: state.searchReducer.minScore,
  maxScore: state.searchReducer.maxScore,
  minLocalisation: state.searchReducer.minLocalisation,
  maxLocalisation: state.searchReducer.maxLocalisation,
  tags: state.searchReducer.tags
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo, searchSubmit}, dispatch)
});

class Search extends Component {

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const submit = {
      minAge: this.props.minAge,
      maxAge: this.props.maxAge,
      minScore: this.props.minScore,
      maxScore: this.props.maxScore,
      minLocalisation: this.props.minLocalisation,
      maxLocalisation: this.props.maxLocalisation,
      tags: this.props.tags
    }
    this.props.actions.searchSubmit(submit);
  }

  render() {
    return(
      <div className="card">
        <h5 className="row">Rechercher</h5>
        <form onSubmit={e => this.handleSearchSubmit(e)}>
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