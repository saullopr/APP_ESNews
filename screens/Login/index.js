import React, {useContext} from 'react';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';

import Estilo from './styles';
import { Logo } from '../../components/index';
import {funcsenha, funcemail} from '../Cadastro/index'

import {AppContext, t} from '../../App.js'
 
export let vetor = [{nome: "leandro@uvvnet.com.br", senha: "admin"}, {nome: "admin", senha: "admin"}, {nome: "Saulo", senha: "tartaruguinha"},{nome: "1", senha: "1"}] 

export let numUsuarios = vetor.length


export default function Login({navigation, route}) {
  //Simulação de um banco de dados

    const[email, setEmail] = React.useState("")
    const [senha, setSenha] = React.useState("")

    const [lang] = React.useContext(AppContext);

    return(
        <>
            <View style = {Estilo.geral}>
                
                <Logo/>

                <Text style = {Estilo.slogan}>{t('Noticia', lang)}</Text>

                <TextInput
                    style = {Estilo.caixaTexto}
                    placeholder = {t('placeholderEmail', lang)}
                    value = {email}
                    onChangeText = {(emails) => setEmail(emails)}
                />

                <TextInput
                    style = {Estilo.caixaTexto}
                    placeholder = {t('placeholderSenha', lang)}
                    value = {senha}
                    onChangeText = {(senhas) => setSenha(senhas)}
                    secureTextEntry = {true}
                />

                <TouchableOpacity
                    style = {Estilo.botao}
                    onPress = {() => {
                   for (var i = 0; i < vetor.length; i++) {
                            if (email === vetor[i].nome && senha === vetor[i].senha) {
                                navigation.navigate('Noticias', {})
                                break
                            }
                        }
                        
                    }}>

                        <Text style = {Estilo.textoBotao}>{t('botaoLogin', lang)}</Text>
                </TouchableOpacity>

                <View style = {Estilo.opcoesExtras}>
                    
                    <TouchableOpacity
                        onPress = {() => {navigation.navigate('Recuperar Senha', {});}}>
                            <Text style = {{textAlign: "center"},{color: '#385E96'}}>{t('botaoEsqueceuSenha', lang)}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style = {Estilo.botaoCadastro}
                        onPress = {() => {navigation.navigate('Cadastrar', {})}}>
                            <Text style = {{color: '#385E96'}}>{t('botaoCadastro', lang)}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </>
    );

}