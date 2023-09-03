import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: "center"
  },

  intro: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },

  logo: {
    marginTop: 30,
  },

  botaoCadastro: {
    marginBottom: 30,
  },

  termoUso: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },

  botao: {
    backgroundColor: '#385E96',
    width: 250,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
  },

  textoBotao: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  linkTermos: {
    color: '#579BFF',
  },

  caixaTexto: {
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    height: 40,
    marginBottom: 20,
    padding: 3,
  },
});
