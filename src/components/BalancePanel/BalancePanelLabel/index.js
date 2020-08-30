import React from 'react';
import {Button} from 'react-native';

import {Container, Label, Value} from './styles';

const BalancePanelLabel = () => {
  return (
    <Container>
      <Label>Saldo Atual</Label>
      <Value>R$2.102,45</Value>
      <Button style={{marginTop: 10}} title="Adicionar" />
    </Container>
  );
};

export default BalancePanelLabel;
