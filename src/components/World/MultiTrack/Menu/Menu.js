import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './_styles_Menu';


export default class Menu extends Component {
  onBackPressed = () => {
    return;
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.main}
        onPress={this.onBackPressed}
      >
        <Text>[]</Text>
      </TouchableHighlight>
    )
  }
}
