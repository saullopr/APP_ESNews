import React from 'react';
import { TextInput } from 'react-native';

import Estilo from './styles';

export default function TextInputPrincipal(props) {
    
    let senha = false

    if (props.descricao == "Senha:" || props.descricao == "Confirmar Senha:") {
        senha = true
    }
    // colocar o tipo de dado que está recebendo em cada text input
    return (
        <>
            <TextInput
                style = {Estilo.caixaTexto}
                placeholder = {props.descricao}
                secureTextEntry = {senha}
            />

        </>
    );
}