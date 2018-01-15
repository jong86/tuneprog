import React from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';

import styles from './_styles_MasterControls';

export default ControlButton = (props) => {
  const {
    icon,
    specificFunction,
    isOn,
    colorOn,
    colorOff,
  } = props;

  return (
    <TouchableHighlight
      style={styles.trackControl}
      onPressIn={specificFunction}
    >
      <Text style={[
        styles.trackControlText,
        {
          color: isOn ? colorOn : colorOff,
        },
      ]}>
        {icon}
      </Text>
    </TouchableHighlight>
  )
}
