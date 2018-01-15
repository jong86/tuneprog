import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ArmButton from './ArmButton';
import styles from './_styles_AudioTrack';

export default class AudioTrack extends Component {
  render() {
    return (
      <View style={styles.main}>
        <ArmButton
          isArmed={this.props.isArmed}
          toggleArmTrack={this.props.toggleArmTrack}
        />

        <Text>{this.props.audioTrackIndex}</Text>
          <Text
            style={styles.text}
          >
            time
          </Text>
      </View>
    )
  }
}
