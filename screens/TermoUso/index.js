import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import Estilo from './styles'
import {Logo} from '../../components/index'

import { t, AppContext } from '../../App.js'

export default function TelaTermosUso() {
  
  const [lang] = React.useContext(AppContext)
  
  return (
    <>
      <View style = {{flex: 1, alignItems: "center", justifyContent: "center"}}>

        <Logo/>

        <Text style = {Estilo.tituloTermosUso}>{t('termoUsoTitulo', lang)}</Text>

        <View style = {Estilo.viewTextos}>
          <Text style = {Estilo.paragrafo}>§ {t('paragrafo1', lang)}</Text>

          <Text style = {Estilo.paragrafo}>§ {t('paragrafo2', lang)}</Text>

          <Text style = {Estilo.paragrafo}>§ {t('paragrafo3', lang)}</Text>
          
          <Text style = {Estilo.paragrafo}>§ {t('paragrafo4', lang)}</Text>
        </View>
      </View>
    </>
  )
}