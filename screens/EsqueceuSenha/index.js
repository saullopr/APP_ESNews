import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

import Estilo from './styles';
import { BotaoPrincipal, TextInputPrincipal } from '../../components/index';

import { t, AppContext} from '../../App';

export default function TelaEsqueceuSenha({ navigation }) {
  const [texto, setTexto] = React.useState('')

    const [lang] = React.useContext(AppContext)

  return (
    <>
      <View style={Estilo.geral}>
        <Text style={Estilo.texto}>{t('textoDigiteEmail', lang)}:</Text>
        <TextInput
          style={Estilo.caixaTexto}
          placeholder = {t('placeholderDigiteAqui', lang)}
          value={texto}
          onValueChange={(textos) => setTexto(textos)}
        />
        <TouchableOpacity style={Estilo.botao}>
          <Text style={Estilo.textoBotao}>{t('botaoEnviar', lang)}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
