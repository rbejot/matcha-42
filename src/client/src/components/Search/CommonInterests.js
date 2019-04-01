import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {displayInfo} from '../../actions/simpleActions';
import {selectedTags} from '../../actions/searchActions';

const mapStateToProps = state => ({
  info: state.mainReducer.info,
  userTags: ["foot", "musiques", "cinema", "sport", "natation", "politique", "theatre", "art", "exposition", "poker", "jeux vidéo","foot", "musiques", "cinema", "sport", "natation", "politique", "theatre", "art", "exposition", "poker", "jeux vidéo"],
  tags: state.searchReducer.tags
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo, selectedTags}, dispatch)
});

const Tags = ({userTags, selectedTags}) => (
  <div className="tag-box">
    {userTags.map((tag, i) => (
      <div className="tag" key={i} value="0" onClick={e => console.log(e.target)}>{tag}</div>
    ))}
  </div>
);

class CommonInterests extends Component {
  render() {
    console.log(this.props.tags);
    return (
        <div className="row">
          <div className="">Intérets en commun</div>
          <Tags userTags={this.props.userTags} selectedTags={this.props.actions.selectedTags}/>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonInterests);