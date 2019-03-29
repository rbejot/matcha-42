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
      <div>
        <form className="thin card" onSubmit={e => e.preventDefault()}>
          <div className="row">
            <div className="col">
              <div className="col">Âge</div>
              <div className="col">Select</div>
            </div>
            <div className="col">
              <div className="col">Score</div>
              <div className="col">Select</div>
            </div>
            <div className="col">
              <div className="col">Localisation</div>
              <div className="col">Select</div>
            </div>
            <div className="col">
              <div className="col">Intérêts</div>
              <div className="col">Select</div>
            </div>
            <div className="col">
              <div className="row"></div>
              <input className="row btn primary" type="submit" value="Filtrer"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);