import React from 'react';
import {Image} from 'react-native';
import logoImg from '../../assets/logo.png';
import {HeaderContainer, TextTotalCases} from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Image source={logoImg} />
      <TextTotalCases>Total de 0 casos.</TextTotalCases>
    </HeaderContainer>
  );
}
