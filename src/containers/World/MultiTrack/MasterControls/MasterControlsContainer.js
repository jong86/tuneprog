import React, { Component } from 'react';
import { connect } from 'react-redux';

import MasterControls from '../../../../components/World/MultiTrack/MasterControls/MasterControls';

import { action } from '../../../../redux/actions';



function mapStateToProps(state, ownProps) {
  return {
    multiTrackData: state.multiTracks[ownProps.multiTrackId],
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { multiTrackId } = ownProps;
  return {
    saveSound: (id, filename) => {
      dispatch(action('SAVE_SOUND', {
        multiTrackId: ownProps.multiTrackId,
        soundData: {
          id: id,
          filename: filename,
          isSelected: false,
        }
      }))
    },
  }
}

export default MasterControlsContainer = connect(mapStateToProps, mapDispatchToProps)(MasterControls)
