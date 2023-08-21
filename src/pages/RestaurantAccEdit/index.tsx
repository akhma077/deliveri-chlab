import styles from './index.module.scss';

import { ReactComponent as CloseIcon } from '../../shared/assets/img/X.svg';
import { Button, ButtonVariant } from '../../shared/UI/Button';
import { TextField } from '../../shared/UI';

export const RestaurantAccEdit = () => {
  return (
    <div className={styles.root}>
      <form className={styles.root__container}>
        <div className={styles.root__header}>
          <CloseIcon />
          <h1>Редактировать профиль</h1>
          <Button variant={ButtonVariant.Base}>Готово</Button>
        </div>

        <div className={styles.root__editData}>
          <img
            src="https://e7.pngegg.com/pngimages/890/636/png-clipart-hamburger-burger-king-whopper-fast-food-burger-king-food-text.png"
            alt=""
          />
          <span>Изменить фото</span>
        </div>

        <div>
          <TextField label="Название ресторана" />
          <TextField label="Адрес" />
        </div>
      </form>
    </div>
  );
};
