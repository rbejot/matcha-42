import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayInfo } from '../actions/simpleActions';
import Search from '../components/Search';
import Filter from '../components/Filter';

const mapStateToProps = state => ({
  info: state.mainReducer.info
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo}, dispatch)
});

class Matchez extends Component {
  render() {
    return(
      <div>
        <Search/>
        <Filter/>
        <h5>Suggestions</h5>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matchez);