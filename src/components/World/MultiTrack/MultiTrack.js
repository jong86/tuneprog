import React, { Component } from "react";
import { FlatList, ScrollView, TouchableHighlight, View } from 'react-native';

import MasterControlsContainer from '../../../containers/World/MultiTrack/MasterControls/MasterControlsContainer';
import AudioTrackContainer from '../../../containers/World/MultiTrack/AudioTrack/AudioTrackContainer';
import MenuContainer from '../../../containers/World/MultiTrack/Menu/MenuContainer';

import styles from './_styles_MultiTrack';


export default class MultiTrack extends Component {
  _renderSoundsList() {
    const sounds = this.props.multiTrackData.sounds;
    return sounds.map((soundData, index) => {
      return (
        <AudioTrackContainer
          {...soundData}
          key={soundData.id} // For React
          id={soundData.id} // Unique identifier for me
          audioTrackIndex={index} // Position in multiTrack array
          multiTrackId={this.props.multiTrackId}
        />
      )
    })
  }

  render() {
    const { position } = this.props.multiTrackData;
    const sounds = this.props.multiTrackData.sounds;
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
        </ScrollView>
          { sounds && sounds[0] && this._renderSoundsList() }
        <MasterControlsContainer multiTrackId={this.props.multiTrackId} />
      </View>
    )
  }
}
