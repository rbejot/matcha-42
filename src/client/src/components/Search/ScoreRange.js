import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { displayInfo } from '../../actions/simpleActions';
import { selectedScoreRange} from '../../actions/searchActions';
import 'rc-slider/assets/index.css';

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const mapStateToProps = state => ({
  info: state.mainReducer.info
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo, selectedScoreRange}, dispatch)
});


class ScoreRange extends Component {

  selectedScore = (value) => {
    this.props.actions.selectedScoreRange(value[0], value[1]);
  }
  render() {
    return (
      <div className="3 col">
        <div className="row">Score</div>
        <div className="row">
          <Range step={10} min={0} max={100} onChange={value => this.selectedScore(value)} defaultValue={[0, 100]} tipFormatter={value => `${value}`} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreRange);