import React from 'react';
// import {View} from 'react-native';

import BalancePainelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

// import { Container } from './styles';

const BalancePanel = () => {
  return (
    <>
      <BalancePainelLabel />
      <BalancePanelChart />
    </>
  );
};

export default BalancePanel;
