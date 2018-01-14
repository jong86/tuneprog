import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Button from './Button';
import styles from './_styles_GlobalMenu';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class GlobalMenu extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Button
          icon={(<Icon
            name="bars"
            size={32}
            color="#545454"
          />)}
        />
        <Button
          style={{position: 'absolute', right: 0}}
          isEnabled={this.props.isAddMultiTrackModeEnabled}
          buttonFunction={this.props.toggleAddMultiTrackMode}
          icon={(<Icon
            name="plus"
            size={32}
            color="#545454"
          />)}
        />
      </View>
    )
  }
}
