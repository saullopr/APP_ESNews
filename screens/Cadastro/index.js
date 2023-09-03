import React, { useState } from 'react';
import {
  Text,
  View,
  CheckBox,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

import {
  BotaoPrincipal,
  TextInputPrincipal,
  Logo,
} from '../../components/index';

import Estilos from './styles';

import {vetor} from '../Login/index'

import {AppContext, t} from '../../App.js'



 
export default function TelaCadastro({ navigation,props }) {
  
  const [emailCadastro, setEmailCadastro] = useState('');
  const [senhaCadastro, setSenhaCadastro] = useState('');

  const [isSelected, setSelection] = useState(false);

  var botaoDesativado = true;

  function funcsenha(){
  return(senhaCadastro)
}

   function funcemail(){
  return(emailCadastro)
}
  if (isSelected == true) {
    botaoDesativado = false;
  }

  const [lang] = React.useContext(AppContext)
  

  return (
    <>
        <View style={Estilos.geral}>
          <Logo style={Estilos.logo} />

          <Text style={Estilos.intro}>{t('tituloCadastro', lang)}:</Text>

          <TextInput style={Estilos.caixaTexto} placeholder={t('inputNome', lang)} />

          <TextInput
            style={Estilos.caixaTexto}
            placeholder={t('inputEmail', lang)}
            value={emailCadastro}
            onChangeText={(emails) => setEmailCadastro(emails)}
          />

          <TextInput
            style={Estilos.caixaTexto}
            placeholder={t('inputSenha', lang)}
            secureTextEntry={true}
            value={senhaCadastro}
            onChangeText={(senhas) => setSenhaCadastro(senhas)}
          />

          <TextInput
            style={Estilos.caixaTexto}
            placeholder={t('inputConfirmaSenha', lang)}
            secureTextEntry={true}
          />

          <View style={Estilos.termoUso}>
            <CheckBox value={isSelected} onValueChange={setSelection} />

            <Text>   {t('textoConcordo', lang)} </Text>
            <TouchableOpacity
              onPress = {() => navigation.navigate('Termos de Uso', {})}>
                <Text style={Estilos.linkTermos}>{t('textoTermosUso', lang)}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={Estilos.botao}
            disabled={botaoDesativado}
            onPress={() => {
            vetor.push({senha: senhaCadastro, nome: emailCadastro});
            navigation.navigate('Login', {})
            }}>
            <Text style={Estilos.textoBotao}>{t('botaoCadastrar', lang)}</Text>
            
          </TouchableOpacity>
        </View>
    </>
  );
}
