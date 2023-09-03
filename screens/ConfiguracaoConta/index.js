import React from 'react'
import { View, TouchableOpacity, Image, Text} from 'react-native'

import Estilo from './styles'

import { t, AppContext} from '../../App';

export default function TelaConfigGeral({navigation}) {

    const [lang] = React.useContext(AppContext)

    return (
        <>
            
            <View>
                <View style = {Estilo.header}>
                    <Text style = {Estilo.titulos}>Configurações de Conta:</Text>
                </View>

                <TouchableOpacity style = {Estilo.subtitulos}><Text style = {Estilo.subtitulosTexto}>Segurança</Text></TouchableOpacity>
                <View style = {{borderWidth: 1, borderColor: "white"}}/>

                <TouchableOpacity style = {Estilo.subtitulos}><Text style = {Estilo.subtitulosTexto}>Solicitar dados da conta</Text></TouchableOpacity>
                <View style = {{borderWidth: 1, borderColor: "white"}}/>

                <TouchableOpacity style = {Estilo.subtitulos}><Text style = {Estilo.subtitulosTexto}>Apagar a conta</Text></TouchableOpacity>
                <View style = {{borderWidth: 1, borderColor: "white"}}/>

            </View>
        </>
    );
}