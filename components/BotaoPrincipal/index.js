import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Estilo from './styles';

export default function BotaoPrincipal(props, navigation) {
    return (
        <>
            <TouchableOpacity style = {Estilo.botao}>
                <Text style = {Estilo.texto}>
                    {props.texto}
                </Text>
            </TouchableOpacity>
        </>
    );
}