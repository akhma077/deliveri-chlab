import * as React from 'react';

import styles from './index.module.scss';
import { Button, ButtonVariant } from '../../shared/UI/Button';
import { ReactComponent as EditArrowIcon } from '../../shared/assets/img/GearSix.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import { getAllRestaurantProducts, deleteProduct } from '../../shared';
export const RestaurantAccount: React.FC = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();
  const { data } = useQuery(['products', id], getAllRestaurantProducts);

  console.log(id);

  const navigate = useNavigate();
  React.useEffect(() => {
    const width = screen.width;

    if (width > 576) {
      document.body.style.paddingTop = '110px';
    } else {
      document.body.style.paddingTop = '0px';
    }

    return () => {
      if (width <= 576) {
        document.body.style.paddingTop = '54px';
      } else if (width <= 768) {
        document.body.style.paddingTop = '70px';
      } else {
        document.body.style.paddingTop = '110px';
      }
    };
  }, []);

  const deleteProductMutation = useMutation(deleteProduct, {
    onSuccess: () => {
      // Обновляем кэш после успешного удаления
      queryClient.invalidateQueries(['products', id]);
    },
  });
  const handleDeleteProduct = (id: number) => {
    // Вызываем мутацию для удаления продукта
    deleteProductMutation.mutate(id);
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__container}>
        <h1 className={styles.root__title}>Mecviho </h1>

        <div className={styles.root__imgEdit}>
          <img
            src="https://get.pxhere.com/photo/walking-vintage-antique-retro-restaurant-city-urban-downtown-travel-bar-sign-europe-decoration-italy-market-venice-pizza-public-space-ornament-design-culture-discover-style-classic-icon-authentic-funky-human-settlement-1214962.jpg"
            alt=""
          />

          <div className={styles.root__imgEdit__block}>
            <Button variant={ButtonVariant.Base} onClick={() => navigate('/restarauntAccauntEdit')}>
              Редактировать профиль <EditArrowIcon />
            </Button>
          </div>
        </div>

        <section className={styles.root__container__section}>
          <h2 className={styles.root__container__section__title}> Продукты: </h2>
          <>
            {data?.map((item: any) => (
              <div className={styles.root__container__section__data}>
                <h2 className={styles.item_name}>{item.name}</h2>
                <div className={styles.root__container__section__data__map}>
                  {item.products?.map((prod: any) => (
                    <div className={styles.root__container__section__products}>
                      <img
                        src={`https://deliving.ru/${prod?.image}`}
                        alt={prod.name}
                        className={styles.card_image}
                      />

                      <div className={styles.card_price}>{prod.price} ₽</div>
                      <div className={styles.card_name}>{prod.name}</div>
                      <div className={styles.card_weight}>{prod.weight} г</div>

                      <Button variant={ButtonVariant.Base}>Редактировать</Button>
                      <Button
                        variant={ButtonVariant.Black}
                        onClick={() => handleDeleteProduct(prod.id)}
                      >
                        Удалить
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        </section>
      </div>
    </div>
  );
};
