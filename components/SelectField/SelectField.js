import React from 'react';
import { Picker } from 'react-native';
import selectFieldStyles from './SelectField.styles';

const SelectField = ({ data = [], map = {}, onValueChange }) => {
  return (
    <Picker
      style={selectFieldStyles.container}
      onValueChange={onValueChange}
    >
      {data.map((item) => (
        <Picker.Item label={item[map.label]} value={item[map.value]} />
      ))}
    </Picker>
  )
}

export default SelectField;