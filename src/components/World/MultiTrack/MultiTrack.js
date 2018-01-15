import React, { Component } from "react";
import { FlatList, ScrollView, TouchableHighlight, View } from 'react-native';

import MasterControlsContainer from '../../../containers/World/MultiTrack/MasterControls/MasterControlsContainer';
import AudioTrackContainer from '../../../containers/World/MultiTrack/AudioTrack/AudioTrackContainer';
import MenuContainer from '../../../containers/World/MultiTrack/Menu/MenuContainer';

import styles from './_styles_MultiTrack';


export default class MultiTrack extends Component {
  renderAudioTracksList() {
    const audioTracks = this.props.multiTrackData.audioTracks;
    return audioTracks.map((audioTrackData, audioTrackIndex) => {
      return (
        <AudioTrackContainer
          {...audioTrackData}
          key={audioTrackData.id} // For React
          id={audioTrackData.id} // Unique identifier for me
          audioTrackIndex={audioTrackIndex} // Index/position in multiTrack array
          multiTrackId={this.props.multiTrackId}
        />
      )
    })
  }

  render() {
    const { position } = this.props.multiTrackData;
    const audioTracks = this.props.multiTrackData.audioTracks;
    return (
      <View
        style={[
          styles.main, {
            top: position.y,
            left: position.x,
          }
        ]}
      >
        <MenuContainer />

        <ScrollView
          style={styles.scrollViewStyle}
        >
          { audioTracks[0] && this.renderAudioTracksList() }
        </ScrollView>

        <MasterControlsContainer multiTrackId={this.props.multiTrackId} />
      </View>
    )
  }
}
