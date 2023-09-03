import React from 'react'
import { View, Text } from 'react-native'

import Estilo from './styles'

import {AppContext, t} from '../../App.js'


export default function TelaConfigSobre() {

    const [lang] = React.useContext(AppContext)

    return (
        <>
            <View style = {Estilo.header}>
                <Text style = {Estilo.titulos}>{t('sobre_nos', lang)}:</Text>
            </View>

            <View style = {Estilo.viewTexto}> 
                <Text style = {Estilo.texto}>{t('descricao_sobre1', lang)}
                </Text>

                <Text style = {Estilo.texto}>{t('descricao_sobre2', lang)}
                </Text>

                <View style = {{marginBottom: 20}}>

                    <Text style = {Estilo.texto}>{t('saudacao', lang)} <Text style = {{color: "#579BFF", fontWeight: "700"}}>ES News!</Text></Text>

                </View>
            </View>



        </>
    );
}
