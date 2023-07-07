import * as React from 'react';
import styles from './index.module.scss';
import { BasketContent, BasketHead } from '../../features';
import testImage from '../../shared/assets/img/b524370421f7498ff97f82f4fe3922ac.jpeg';
import { Product } from '../../entities';
import { useNavigate } from 'react-router-dom';
import { FooterBasket } from '../../widgets';
import { useDetectClickOutside } from 'react-detect-click-outside';

export const Basket = () => {
  const [modal, setModal] = React.useState<boolean>(false);
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

  const [basketData, setBasketData] = React.useState([
    [
      {
        id: 1224236,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
      {
        id: 122423226,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
    [
      {
        id: 12,
        name: 'Суши 4',
        image: testImage,
        price: 300,
        discount: 1,
        weight: 199,
        description: 'Лучшие суши на свете',
      },
    ],
  ]);

  const navigate = useNavigate();
  const [basketSumm, setBasketSumm] = React.useState<number>(0);
  const [basketCount, setBasketCount] = React.useState<number>(0);

  const [resetCount, setResetCount] = React.useState({});

  React.useEffect(() => {
    let summ = 0;
    let count = 0;
    if (basketData.length > 0) {
      basketData.map((arrs: Product[]) => {
        arrs.map((elem) => (summ += elem.price));
        count += arrs.length;
        setBasketCount(count);
        setBasketSumm(summ);
      });
    } else {
      setBasketSumm(0);
      setBasketCount(0);
    }
  }, [basketData]);

  const [basketOn, setBasketOn] = React.useState<boolean>(false);
  const [contentOn, setContentOn] = React.useState<boolean>(false);

  const handleClickPayment = () => {
    let timesOut: any;
    if (contentOn) {
      timesOut = setTimeout(() => {
        setContentOn((prev) => !prev);
      }, 1000);
    } else {
      setContentOn(true);
    }

    setBasketOn((prev) => !prev);
    () => clearTimeout(timesOut);
  };
  const ref = useDetectClickOutside({
    onTriggered: () => {
      setBasketOn(false);
      setTimeout(() => {
        setContentOn(false);
      }, 1000);
    },
  });

  return (
    <div className={styles.root}>
      <div>
        <button onClick={() => navigate(-1)} className={styles.categories__btn}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m7.8 11 5.246-5.246a.5.5 0 0 0 0-.708l-.692-.692a.5.5 0 0 0-.708 0L4 12l7.646 7.646a.5.5 0 0 0 .708 0l.692-.692a.5.5 0 0 0 0-.708L7.8 13h11.7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H7.8Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <BasketHead setModalActive={setModal} />
        <BasketContent
          setResetCount={setResetCount}
          data={basketData}
          setData={setBasketData}
          fullCard
        />
        <FooterBasket
          basketActive={basketOn}
          basketRef={ref}
          contentActive={contentOn}
          handleClickPayment={handleClickPayment}
          basketCount={basketCount}
          basketSumm={basketSumm}
        />
        <div style={{ height: 100 }}></div>
      </div>
    </div>
  );
};
