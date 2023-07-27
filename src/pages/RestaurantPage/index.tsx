import * as React from 'react';
import styles from './index.module.scss';

import testImage from '../../shared/assets/img/b524370421f7498ff97f82f4fe3922ac.jpeg';

import { Categories, ProductBasket, RestarauntContent } from '../../widgets';
import { BasketSumm } from '../../features';

export const RestaurantPage: React.FC = () => {
  const data = [
    {
      id: 123,
      name: 'Суши',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 12324444444,
      name: 'Суши 1',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 122114443,
      name: 'Суши 2',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 124441233,
      name: 'Суши 3',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 122245153,
      name: 'Суши 4',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 12236782467,
      name: 'Суши 4',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 12233411112112,
      name: 'Суши 4',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 121234424236,
      name: 'Суши 4',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 3,
      name: 'Суши',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 1,
      name: 'Суши 1',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 113,
      name: 'Суши 2',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 1443,
      name: 'Суши 3',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 1223,
      name: 'Суши 4',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 12,
      name: 'Суши 4',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 12334,
      name: 'Суши 4',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
    {
      id: 1224236,
      name: 'Суши 4',
      image: testImage,
      price: 300,
      discount: 1,
      weight: 199,
      description: 'Лучшие суши на свете',
    },
  ];

  const [basketData, setBasketData] = React.useState([]);
  const [resetCount, setResetCount] = React.useState({});

  React.useEffect(() => {
    data.map((elem) => setResetCount((prev: any) => ({ ...prev, [elem.id]: false })));
  }, []);

  return (
    <div className={styles.page}>
      <div>
        <div className={styles.categories_plug}>
          <div className={styles.categories}>
            <Categories />
          </div>
        </div>

        <RestarauntContent
          data={data}
          resetCount={resetCount}
          setResetCount={setResetCount}
          basketData={basketData}
          setBasketData={setBasketData}
        />

        <div className={styles.basket_plug}>
          <div className={styles.basket}>
            <ProductBasket
              setResetCount={setResetCount}
              basketData={basketData}
              setBasketData={setBasketData}
            />
          </div>
        </div>
      </div>
      <div className={styles.basketSum}>
        <BasketSumm
          summ={200}
          count={12}
          basketInMobile

          // onClick={handleClickBasketSumm}
        />
      </div>
    </div>
  );
};
