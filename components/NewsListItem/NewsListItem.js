import React, {useState} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Row from '../Row/Row';
import StocktakingListItemStyles from './NewsListItem.styles';

const StocktakingListItem = ({ name, image}) => {

  return ( 
     <Row>
      <TouchableOpacity
        style={StocktakingListItemStyles.button}     
      >
        <View style={StocktakingListItemStyles.container}>
          <Text>{name}</Text>
        </View>
      </TouchableOpacity>
    </Row>
  )
}

export default StocktakingListItem;