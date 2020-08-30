import React from 'react';
// import {View, Text} from 'react-native';

import {Container} from './styles';

import BalancePanel from '../../components/BalancePanel';

const Main = () => {
  return (
    <>
      <Container>
        <BalancePanel />
      </Container>
    </>
  );
};

export default Main;
