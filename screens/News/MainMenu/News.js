import React, {useState, useEffect } from 'react';
import { FlatList, View, Text, TextInput, Image } from 'react-native';
import SelectField from '../../../components/SelectField/SelectField';
import NewsListItem from '../../../components/NewsListItem/NewsListItem';
import NewsStyles from './News.styles';

export let newsList = [
{
 name: 'Rodoviários encerram paralisação em Vila Velha, ES',
 image: {src:require('../../../assets/feriado.png')},
 primarySectionId: 1,
 secondarySectionId: 3
},
{
 name: 'Hospital Evangélico de Vila Velha produz conteúdo virtual para conscientizar pacientes',
 image: '../../../assets/hospital.png',
 primarySectionId: 1,
 secondarySectionId: 2
},
{
 name: 'Federação de Futebol (FES) divulga a tabela e o regulamento do Campeonato Capixaba 2022',
 image: '../../../assets/tabela.png',
 primarySectionId: 1,
 secondarySectionId: 1
},

{
 name: 'Prefeitura de Vitória suspende réveillon após confirmação variante ômicron no Brasil',
 image: '../../../assets/fogos.png',
 primarySectionId: 2,
 secondarySectionId: 3
},
{
 name: 'Os Jogadores do Vitória que têm contrato para 2022',
 image: '../../../assets/vitoria.png',
 primarySectionId: 2,
 secondarySectionId: 1
},
{
 name: 'Vitória deverá contar com internet mais ágil em tecnologia 5G',
 image: '../../../assets/tabela.png',
 primarySectionId: 2,
 secondarySectionId: 2
}]

export let cidades = [{
 id: 1,
 name: 'Vila Velha'
},{
 id: 2,
 name: 'Vitória'
}];

export let temas = [{
 id: 1,
 name: 'Esportes',
},{
 id: 2,
 name: 'Tecnologia',
},
{
 id: 3,
 name: 'Diario',
}];

const News = () => {
    
  const [selectedValue, setSelectedValue] = useState(cidades[0].id);

  const [secondSelectedValue, setSecondSelectedValue] = useState(temas[0].id);

  const [selectedImage, setselectedImage] = useState(null);

  const firstSection = cidades.filter( primarySectionParam => primarySectionParam.id == selectedValue); 

  function handleSelectItem(primarySectionId) { 

     setSelectedValue(primarySectionId);
  }

  function handleSecondSelectItem(id) { 

     setSecondSelectedValue(id);
  }

  function handleSelectImage(key) { 

     setselectedImage(key);
  }

  const newsListFiltered = newsList.filter( newsList => newsList.secondarySectionId == secondSelectedValue && newsList.primarySectionId == selectedValue);

  return (
    <View style={NewsStyles.container}>
      <View style={NewsStyles.selectFieldContainer}>
        <Text style= {NewsStyles.title}>Cidade:</Text>
        <SelectField 
          data={cidades}
          map={{ 'value': 'id',  'label': 'name' }} //informar como fazer o mapeamento dos dados
          onValueChange={(itemValue) => setSelectedValue(parseInt(itemValue))}
        />

        <Text style= {NewsStyles.title}>Genêro:</Text>
        <SelectField 
          data={temas}
          map={{ 'value': 'id',  'label': 'name' }} //informar como fazer o mapeamento dos dados
          onValueChange={(itemValue) => setSecondSelectedValue(parseInt(itemValue))}
        />
      </View>

      <FlatList
          data={newsListFiltered}
          //{ item } passar o objeto item entre chaves
          renderItem={({ item }) => <NewsListItem           
            name={item.name}
            />               
          }
      />

    <View>
    </View>
    </View>
  )
}

export let quantidadeNoticias = newsList.length
export let quantidadeCidades = cidades.length
export let quantidadeTemas = temas.length

export default News;