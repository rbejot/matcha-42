import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayInfo } from '../actions/simpleActions';
import { selectedFilter } from '../actions/searchActions';

const mapStateToProps = state => ({
  info: state.mainReducer.info,
  ageFilter: state.searchReducer.ageFilter,
  scoreFilter: state.searchReducer.scoreFilter,
  localisationFilter: state.searchReducer.localisationFilter,
  tagsFilter: state.searchReducer.tagsFilter
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo, selectedFilter}, dispatch)
});

class Search extends Component {

  handleFilterChange = (order, filter) => {
    this.props.actions.selectedFilter(filter, order);
  }

  render() {
    return(
      <div>
        <form className="thin card" onSubmit={e => e.preventDefault()}>
          <div className="row">
            <div className="col">
              <div className="col">Âge</div>
                <select onChange={e => this.handleFilterChange(e.target.value, 'age')} value={this.props.ageFilter}>
                  <option value="none">--Trier par--</option>
                  <option value="up">Ordre croissant</option>
                  <option value="down">Ordre décroissant</option>
                </select>
            </div>
            <div className="col">
              <div className="col">Score</div>
                <select onChange={e => this.handleFilterChange(e.target.value, 'score')} value={this.props.scoreFilter}>
                  <option value="none">--Trier par--</option>
                  <option value="up">Ordre croissant</option>
                  <option value="down">Ordre décroissant</option>
                </select>
            </div>
            <div className="col">
              <div className="col">Localisation</div>
                <select onChange={e => this.handleFilterChange(e.target.value, 'localisation')} value={this.props.localisationFilter}>
                  <option value="none">--Trier par--</option>
                  <option value="up">Ordre croissant</option>
                  <option value="down">Ordre décroissant</option>
                </select>
            </div>
            <div className="col">
              <div className="col">Intérêts</div>
                <select onChange={e => this.handleFilterChange(e.target.value, 'tags')} value={this.props.tagsFilter}>
                  <option value="none">--Trier par--</option>
                  <option value="up">Ordre croissant</option>
                  <option value="down">Ordre décroissant</option>
                </select>
            </div>
            </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);