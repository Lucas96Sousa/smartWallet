import React from 'react';
// import {} from 'react-native';

import {Container, Label, Value} from './styles';

const BalanceLabel = () => {
  return (
    <>
      <Container>
        <Label>Saldo Atual</Label>
        <Value>R$: 2.064,35</Value>
      </Container>
    </>
  );
};

export default BalanceLabel;
