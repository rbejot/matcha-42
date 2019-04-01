import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { displayInfo } from '../../actions/simpleActions';
import 'rc-slider/assets/index.css';

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const mapStateToProps = state => ({
  info: state.mainReducer.info
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo}, dispatch)
});


class AgeRange extends Component {
  render() {
    return (
      <div className="3 col">
        <div className="row">Âge</div>
        <div className="row">
          <Range min={18} max={80} defaultValue={[0, 80]} tipFormatter={value => `${value}`} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgeRange);