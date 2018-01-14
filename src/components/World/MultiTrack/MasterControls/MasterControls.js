import React, { Component } from 'react';
import { View } from 'react-native';

import ControlButton from './ControlButton';

import styles from './_styles_MasterControls';


import {
  Player,
  Recorder,
  MediaStates
} from 'react-native-audio-toolkit';


export default class MasterControls extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  _toggleRecord() {
    if (this.player) {
      this.player.destroy();
    }

    this.recorder.toggleRecord((err, stopped) => {
      if (err) {
        this.setState({
          error: err.message
        });
      }
      if (stopped) {
        this._reloadPlayer();
        this._reloadRecorder();
      }

      this._updateState();
    });
  }



  render() {
    return (
      <View style={styles.main}>

        <View style={styles.buttonWrapper}>
          <ControlButton
            type="PLAY"
            specificFunction={this._onPlayPausePressed}
          />
          <ControlButton
            type="REC"
            specificFunction={this._toggleRecord}
          />
          <ControlButton
            type="STOP"
            specificFunction={this._onStopPressed}
          />
        </View>

      </View>
    )
  }
}
