import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import ControlButton from './ControlButton';

import styles from './_styles_MasterControls';
import Icon from 'react-native-vector-icons/FontAwesome';

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

    this._pause = this._pause.bind(this)
    this._play = this._play.bind(this)
    this._record = this._record.bind(this)
    this._stop = this._stop.bind(this)
  }

  _pause() {
    this.sound.pause(() => {
      this.setState({isPlaying: false})
    })
  }

  _play() {
    this.sound.play(() => {
      this.setState({isPlaying: true})
    })
  }

  _record() {
    this.recording = new Recorder("multiTrackId_audioTrackId.mp4").record(() => {
      this.setState({isRecording: true});
    });
  }

  _stop() {
    if (this.state.isRecording) {
      this.recording.stop(() => {
        this.setState({isRecording: false})
      })
      this.sound = new Player("multiTrackId_audioTrackId.mp4", {autoDestroy: false})
      this.sound.prepare()
      this.sound.on("ended", () => {
        this.setState({isPlaying: false}
      )})
    } else if (this.state.isPlaying) {
      this.sound.stop(() => {
        this.setState({isPlaying: false})
      })
    }
  }


  render() {
    const iconSize = 48;
    const colorOff = '#545454';

    return (
      <View style={styles.main}>

        <View style={styles.buttonWrapper}>
          <ControlButton
            type="PLAY"
            specificFunction={this.state.isPlaying ? this._pause : this._play}
            icon={(<Icon
              name={this.state.isPlaying ? "pause" : "play"}
              size={iconSize}
            />)}
            colorOn="#0f0"
            colorOff={colorOff}
            isOn={this.state.isPlaying}
          />
          <ControlButton
            type="REC"
            specificFunction={this._record}
            icon={(<Icon
              name="circle"
              size={iconSize}
            />)}
            colorOn="#f00"
            colorOff={colorOff}
            isOn={this.state.isRecording}
          />
          <ControlButton
            type="STOP"
            specificFunction={this._stop}
            icon={(<Icon
              name="stop"
              size={iconSize}
            />)}
            colorOn="#00f"
            colorOff={colorOff}
            isOn={false}
          />
        </View>

      </View>
    )
  }
}
