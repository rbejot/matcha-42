import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteInfo } from '../actions/simpleActions';
import React, { Component } from 'react';
import warning from '../static/icons/warning.svg';

const mapStateToProps = state => ({
  info: state.mainReducer.info
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({deleteInfo}, dispatch)
});

class Warning extends Component {

  hideWarning = () => {
    setTimeout(() => {
      if (this.props.info)
        this.props.actions.deleteInfo();
    }, 7000);
  }

  render() {
    return(
      <div>
        {this.props.info ? (
          <div className="w-100 warning row" onClick={this.props.actions.deleteInfo} onLoad={this.hideWarning}>
            <div>
              <img className="icon" src={warning}/>
            </div>
            <div>
              {this.props.info}
            </div>
          </div>
        ): ('')}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Warning);