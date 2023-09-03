import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';

import Estilo from './styles';
import { t, AppContext } from '../../App';

export default function TelaConfigIdioma({ navigation }) {
  const [lang, setLang] = React.useContext(AppContext);

  return (
    <>
      <View style={{ backgroundColor: '#CBD6F5', flex: 1}}>
        <View style={Estilo.header}>
          <Text style={Estilo.titulos}>{t('idioma_subtitulo', lang)}:</Text>
        </View>

        <View style = {{flex: 1, alignItems: "center", justifyContent: "space-evenly"}}>
          
          <TouchableOpacity
            onPress = {() => {setLang('pt'); navigation.navigate('Idiomas');}}
            style = {Estilo.botaoPT}>
              <Image 
                source = {require("../../assets/portugues.png")}
                style = {{width: 250, height: 125, borderRadius: 150 / 2, overflow: "hidden",
    borderWidth: 3,
    borderColor: "black"}}
                />
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress = {() => {setLang('en'); navigation.navigate('Idiomas');}}
            style = {Estilo.botaoEN}>
              <Image 
                source = {require("../../assets/english.png")}
                style = {{width: 250, height: 125, borderRadius: 150 / 2, overflow: "hidden",
    borderWidth: 3,
    borderColor: "black"}}
                />
          </TouchableOpacity>

          <TouchableOpacity
            onPress = {() => {setLang('es'); navigation.navigate('Idiomas');}}
            style = {Estilo.botaoES}>
              <Image 
                source = {require("../../assets/espanhol.png")}
               style = {{width: 250, height: 125, borderRadius: 150 / 2, overflow: "hidden",
    borderWidth: 3,
    borderColor: "black"}}
                />
          </TouchableOpacity>
          
        </View>

      </View>
    </>
  );
}
