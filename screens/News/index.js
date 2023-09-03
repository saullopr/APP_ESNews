import React, {useState, useEffect } from 'react';
import { FlatList, View, Text, TextInput, TouchableOpacity  } from 'react-native';
import SelectField from '../../components/SelectField/SelectField';
import News from './MainMenu/News';
import NewsListItem from '../../components/NewsListItem/NewsListItem';
import Estilo from './styles';
import { Logo } from '../../components/index';

export default function TelaNews({ navigation }){
  return (
    
    <View style={Estilo.geral}>
      <Logo/>
      <News />
    </View>
  )
}