import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import {Logo} from '../../components/index'

import Estilo from './styles'
import { t, AppContext } from '../../App.js'

import {vetor, numUsuarios} from '../Login/index'
import {newsList, quantidadeNoticias} from '../News/index'
import {cidades,quantidadeCidades} from '../News/index'
import {temas,quantidadeTemas} from '../News/index'


export default function TelaDashBoard({navigation}) {
  
  const [lang] = React.useContext(AppContext)
  
  
  return (
    <>
      <View style = {Estilo.viewGeral}>

        <Logo/>

        <Text style = {Estilo.tituloDashboard}>{t('tituloDashboard', lang)}</Text>

        <View style = {Estilo.viewDashBoard1}>
          <Text style = {{padding: 10}}>{t('usuCadastrado', lang)}: {numUsuarios}</Text>
          <Text style = {{padding: 10}}>{t('numNoticias', lang)}: 4</Text>
          <Text style = {{padding: 10}}>{t('numCidades', lang)}: 2</Text>
          <Text style = {{padding: 10}}>{t('numTemas', lang)}: 3</Text>
        </View>


      </View>

    </>
  )
}