import React from 'react';
import styles from './index.module.scss';
import { RestarauntHeader } from './../RestarauntHeader';
import { RestaurantContent } from '../../features';
import { Product } from '../../entities';
import { Categories } from '..';
interface Props {
  data: any;
}

export const RestarauntContent: React.FC<Props> = ({ data }) => {
  const categories: string[] = ['Комбо', 'Новинки', 'Говядина', 'Рыба', 'Соусы'];

  [
    {
      categoryName: 'Kombo',
      items: [{}],
    },
  ];

  return (
    <div className={styles.content}>
      <RestarauntHeader />

      <div className={styles.restaurantContent}>
        <div className={styles.content__categories}>
          <Categories />
        </div>
        {categories.map((category) => (
          <RestaurantContent key={category} title={category} data={data} />
        ))}
      </div>
    </div>
  );
};
