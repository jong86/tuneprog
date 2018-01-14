import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import ControlButton from './ControlButton';

import styles from './_styles_MasterControls';


import {
  Player,
  Recorder,
  MediaStates
} from 'react-native-audio-toolkit';


export default class MasterControls extends Component {
  constructor() {
    super();
    this.state = {
      disabled: false
    };

    this._onPress = this._onPress.bind(this)
  }

  _onPress() {
    // Disable button while recording and playing back
    this.setState({disabled: true});

    // Start recording
    let rec = new Recorder("filename.mp4").record();

    // Stop recording after approximately 3 seconds
    setTimeout(() => {
      rec.stop((err) => {
        // NOTE: In a real situation, handle possible errors here

        // Play the file after recording has stopped
        new Player("filename.mp4")
        .play()
        .on('ended', () => {
          // Enable button again after playback finishes
          this.setState({disabled: false});
        });
      });
    }, 3000);
  }


  render() {
    return (
      <View style={styles.main}>

        <View style={styles.buttonWrapper}>
          <ControlButton
            type="PLAY"
            specificFunction={this._playPause}
          />
          <ControlButton
            type="REC"
            disabled={this.state.disabled}
            specificFunction={this._onPress}
          />
          <ControlButton
            type="STOP"
            specificFunction={this._stop}
          />
          <TouchableHighlight disabled={this.state.disabled} onPress={() => this._onPress()}>
            <Text>
              Press me!
            </Text>
          </TouchableHighlight>
        </View>

      </View>
    )
  }
}
