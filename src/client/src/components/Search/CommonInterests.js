import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {displayInfo} from '../../actions/simpleActions';
import {selectedTags, deselectTag} from '../../actions/searchActions';

const mapStateToProps = state => ({
  info: state.mainReducer.info,
  userTags: ["foot", "musiques", "cinema", "sport", "natation", "politique", "theatre", "art", "exposition", "poker", "jeux vidéo"],
  tags: state.searchReducer.tags
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo, selectedTags, deselectTag}, dispatch)
});

const setStyleIfSelected = (tag, tags) => {
  if (tags.indexOf(tag) > -1) {
    return {
      backgroundColor: '#abe2fb'
    }
  }
}

const handleSelectedTags = (target, selectedTags, deselectTag, tags) => {
  if (tags.indexOf(target) > -1) {
    deselectTag(target);
  } else {
    selectedTags(target);
  }
}

const Tags = ({userTags, selectedTags, tags, deselectTag}) => (
  <div className="tag-box">
    {userTags.map((tag, i) => (
      <div className="tag" key={i} value="0" onClick={e => handleSelectedTags(e.target.innerText, selectedTags, deselectTag, tags)} style={setStyleIfSelected(tag, tags)}>{tag}</div>
    ))}
  </div>
);

class CommonInterests extends Component {
  render() {
    return (
        <div className="row">
          <div className="">Intérets en commun</div>
          <Tags userTags={this.props.userTags} selectedTags={this.props.actions.selectedTags} deselectTag={this.props.actions.deselectTag} tags={this.props.tags}/>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonInterests);