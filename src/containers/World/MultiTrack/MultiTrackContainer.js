import React from 'react';
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4';
import { action } from '../../../redux/actions';
import MultiTrack from '../../../components/World/MultiTrack/MultiTrack'

function mapStateToProps(state, ownProps) {
  return {
    multiTrackData: state.multiTracks[ownProps.id],
    multiTrackId: ownProps.id,
    viewMode: state.viewMode,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return({
  })
}

export default MultiTrackContainer = connect(mapStateToProps, mapDispatchToProps)(MultiTrack)
