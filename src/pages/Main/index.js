import React from 'react';
// import {View, Text} from 'react-native';

import {Container} from './styles';

import BalancePanel from '../../components/BalancePanel';
import EntrySumary from '../../components/EntrySumary';

const Main = () => {
  return (
    <>
      <Container>
        <BalancePanel />
        <EntrySumary />
      </Container>
    </>
  );
};

export default Main;
