import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { displayInfo } from '../../actions/simpleActions';
import { selectedLocalisationRange } from '../../actions/searchActions';
import 'rc-slider/assets/index.css';

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const mapStateToProps = state => ({
  info: state.mainReducer.info
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo, selectedLocalisationRange}, dispatch)
});


class LocalisationRange extends Component {

  selectedLocalisation = (value) => {
    this.props.actions.selectedLocalisationRange(value[0], value[1]);
  }

  render() {
    return (
      <div className="3 col">
        <div className="row">Localisation (km)</div>
        <div className="row">
          <Range step={10} min={0} max={600} onChange={value => this.selectedLocalisation(value)} defaultValue={[1, 600]} tipFormatter={value => `${value}`} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalisationRange);