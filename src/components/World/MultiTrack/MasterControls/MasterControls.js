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
      isRecording: false,
      isPlaying: false,
    };
    this.recording = null;
    this.sound = null;

    this._playPause = this._playPause.bind(this)
    this._record = this._record.bind(this)
    this._stop = this._stop.bind(this)
  }

  _playPause() {
    this.sound = new Player("multiTrackId_audioTrackId.mp4")
    this.sound.play()
  }

  _record() {
    // Disable button while recording and playing back
    this.setState({isRecording: true});

    // Start recording
    this.rec = new Recorder("multiTrackId_audioTrackId.mp4").record();
  }

  _stop() {
    this.rec.stop((err) => {
      console.warn(err)
    });
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
            specificFunction={this._record}
            />
          <ControlButton
            type="STOP"
            specificFunction={this._stop}
          />
        </View>

      </View>
    )
  }
}
