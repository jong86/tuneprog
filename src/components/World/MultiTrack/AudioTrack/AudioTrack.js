import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ArmButton from './ArmButton';
import styles from './_styles_AudioTrack';

export default class AudioTrack extends Component {
  state = {
    fontLoaded: false,
  }

  _getTimestamp = () => {
    _formatMilliseconds = (milliseconds) => {
      // console.log('milliseconds:', milliseconds)
      if (!milliseconds) milliseconds = 0;
      return new Date(Number(milliseconds)).toISOString().slice(14, -2);
    }

    if (!this.props.isMultiTrackPlaying && this.props.recordingDuration) {
      // If a sound is currently being recorded
      const milliseconds = this.props.recordingDuration.durationMillis;
      return `${_formatMilliseconds(milliseconds)}`;
    } else if (this.props.isMultiTrackPlaying && this.props.soundData.status) {
      // If there's a sound already recorded
      const milliseconds = this.props.soundData.status.positionMillis;
      return `${_formatMilliseconds(milliseconds)}`;
    }
    return `${_formatMilliseconds(0)}`;
  }

  render() {
    return (
      <View style={styles.main}>
        <ArmButton
          isArmed={this.props.isArmed}
          toggleArmTrack={this.props.toggleArmTrack}
        />

        <Text>{this.props.audioTrackIndex}</Text>

        {
          this.state.fontLoaded && (
            <Text
              style={styles.text}
            >
              {this._getTimestamp()}
            </Text>
          )
        }
      </View>
    )
  }
}
