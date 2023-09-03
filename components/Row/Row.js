import React from 'react';
import { View } from 'react-native';
import rowStyles from './Row.styles';

const Row = ({ children }) => {
  return (
    <View style={rowStyles.container}>
      {children}
    </View>
  )
}

export default Row;