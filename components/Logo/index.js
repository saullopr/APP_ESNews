import React from 'react';
import { Image } from 'react-native';

import Estilo from './styles';

export default function Logo() {
    return (
        <>
            <Image
                style = {Estilo.logo}
                source = {require('../../assets/logo.png')}
            />
        </>
    );
}