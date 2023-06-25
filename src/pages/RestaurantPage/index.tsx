import * as React from 'react';
import { Categories } from '../../widgets/Categories';
import { RestarauntHeader } from '../../widgets/RestarauntHeader';

export const RestaurantPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Categories />
      <RestarauntHeader />
    </div>
  );
};
