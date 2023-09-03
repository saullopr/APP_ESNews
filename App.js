import 'react-native-gesture-handler';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Login,
  EsqueceuSenha,
  Cadastro,
  ConfiguracaoGeral,
  ConfiguracaoConta,
  ConfiguracaoSobre,
  ConfiguracaoNotificacoes,
  ConfiguracaoIdioma,
  News,
  Dashboard,
  TermoUso
} from './screens/index';

import pt from './locales/translations/pt.json';
import en from './locales/translations/en.json';
import es from './locales/translations/es.json';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export const AppContext = React.createContext();

export const t = (key, lang) => {
  switch (lang) {
    case 'en':
      return en[key];

    case 'es':
      return es[key];

    default:
      return pt[key];
  }
};

function InserirCredenciais() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Recuperar Senha" component={EsqueceuSenha} />
      <Stack.Screen name="Cadastrar" component={Cadastro} />
      <Stack.Screen name = "Termos de Uso" component = {TermoUso} />
    </Stack.Navigator>
  );
}

function Configuracoes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Configurações" component={ConfiguracaoGeral} />
      <Stack.Screen name="Conta" component={ConfiguracaoConta} />
      <Stack.Screen name="Sobre" component={ConfiguracaoSobre} />
      <Stack.Screen name="Notificações" component={ConfiguracaoNotificacoes} />
      <Stack.Screen name="Idiomas" component={ConfiguracaoIdioma} />
    </Stack.Navigator>
  );
}


export default function App() {
  const [lang, setLang] = React.useState('pt');

  return (
    <>
      <AppContext.Provider value={[lang, setLang]}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Inserir Credenciais">
            <Drawer.Screen name="Noticias" component={News} />
            <Drawer.Screen name="Configurações" component={Configuracoes} />
            <Drawer.Screen name = "Dashboard" component = {Dashboard} />
            <Drawer.Screen
              name="Inserir Credenciais"
              component={InserirCredenciais}
              options={{
                title: 'Sair',
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </>
  );
}
