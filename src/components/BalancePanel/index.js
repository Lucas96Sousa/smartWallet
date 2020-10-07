import React from 'react';
// import {View} from 'react-native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

// import { Container } from './styles';

const BalancePanel = ({currencyBalance}) => {
  return (
    <>
      <BalancePanelLabel currencyBalance={currencyBalance} />
      <BalancePanelChart />
    </>
  );
};

export default BalancePanel;
