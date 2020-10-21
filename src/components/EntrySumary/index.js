import React from 'react';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

// import { Container } from './styles';

const EntrySumary = ({entriesGroup}) => {
  return (
    <>
      <EntrySummaryChart />
      <EntrySummaryList entriesGroup={entriesGroup} />
    </>
  );
};

export default EntrySumary;
