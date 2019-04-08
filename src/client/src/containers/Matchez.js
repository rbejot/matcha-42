import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayInfo } from '../actions/simpleActions';
import Search from '../components/Search';
import Filter from '../components/Filter';

const mapStateToProps = state => ({
  info: state.mainReducer.info,
  searchResult: state.searchReducer.searchResult
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo}, dispatch)
});

class Matchez extends Component {
  render() {
    return(
      <div>
        <Search/>
        {this.props.searchResult ? <Filter/> : ''}
        <h5>Suggestions</h5>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matchez);