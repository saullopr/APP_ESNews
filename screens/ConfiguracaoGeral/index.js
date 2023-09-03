import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import Estilo from './styles';
import { t, AppContext} from '../../App';

export default function TelaConfigGeral({ navigation }) {

  const [lang] = React.useContext(AppContext)

  return (
    <>
      <View>
        <View style={Estilo.header}>
          <Text style={Estilo.titulos}>{t('geral_config', lang)}:</Text>
        </View>

        <View>
          <TouchableOpacity
            style={Estilo.subtitulos}
            onPress={() => {
              navigation.navigate('Idiomas', {});
            }}>
            <Text style={Estilo.subtitulosTexto}>{t('idiomas_config', lang)}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={Estilo.header}>
          <Text style={Estilo.titulos}>{t('outros_config', lang)}:</Text>
        </View>

        <View>
          <TouchableOpacity
            style={Estilo.subtitulos}
            onPress={() => {
              navigation.navigate('Sobre', {});
            }}>
            <Text style={Estilo.subtitulosTexto}>{t('sobre_config', lang)}</Text>
          </TouchableOpacity>

          <View style={{ borderWidth: 1, borderColor: 'white' }} />

          <TouchableOpacity
            style={Estilo.subtitulos}
            onPress={() => {
              navigation.navigate('Login', {});
            }}>
            <Text style={Estilo.subtitulosTexto}>{t('sair_config', lang)}</Text>
          </TouchableOpacity>

          <View style={{ borderWidth: 1, borderColor: 'white' }} />
        </View>
      </View>
    </>
  );
}
