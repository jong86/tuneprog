import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Button from './Button';
import styles from './_styles_GlobalMenu';

export default class GlobalMenu extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Button
        />
        <Button
          style={{position: 'absolute', right: 0}}
          isEnabled={this.props.isAddMultiTrackModeEnabled}
          buttonFunction={this.props.toggleAddMultiTrackMode}
        />
      </View>
    )
  }
}
