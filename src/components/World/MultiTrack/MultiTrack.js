import React, { Component } from "react";
import {
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View
} from 'react-native';

var RCTUIManager = require('NativeModules').UIManager;


import MasterControlsContainer from '../../../containers/World/MultiTrack/MasterControls/MasterControlsContainer';
import AudioTrackContainer from '../../../containers/World/MultiTrack/AudioTrack/AudioTrackContainer';
import MenuContainer from '../../../containers/World/MultiTrack/Menu/MenuContainer';

import styles from './_styles_MultiTrack';


export default class MultiTrack extends Component {
  componentDidUpdate() {
    RCTUIManager.measure(this.refs.scrollView.getInnerViewNode(), (...data) => {
      const { scrollView } = this.refs
      scrollView.scrollTo({y: data[3] - this.scrollViewHeight + 64})
    })
  }

  _getScrollViewDimesions(dimensions) {
    this.scrollViewHeight = dimensions.height;
  }

  _renderAudioTracksList() {
    const audioTracks = this.props.multiTrackData.audioTracks;
    return audioTracks.reverse().map((soundData, index) => {
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
          ref="scrollView"
          onLayout={(event) => { this._getScrollViewDimesions(event.nativeEvent.layout) }}
        >
          <TouchableWithoutFeedback>
            <View>
              <View style={styles.bottomPusher}></View>
              { audioTracks && audioTracks[0] && this._renderAudioTracksList() }
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        <MasterControlsContainer multiTrackId={this.props.multiTrackId} />
      </View>
    )
  }
}
