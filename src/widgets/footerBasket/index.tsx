import React from 'react';
import styles from './index.module.scss';

// import { ReactComponent as IconArrowTop } from '../../shared/assets/img/iconArrowTop.svg';

interface Props {
  basketActive: boolean;
  contentActive: boolean;
  handleClickPayment: () => void;
  basketSumm: number;
  basketCount: number;
  basketRef: any;
}

export const FooterBasket: React.FC<Props> = ({
  basketActive,
  contentActive,
  handleClickPayment,
  basketSumm,
  basketCount,
  basketRef,
}) => {
  const [basketCountTitle, setBasketCountTitle] = React.useState<string>('Количество');

  const screenWidth = window.screen.width;
  React.useEffect(() => {
    if (screenWidth < 500) setBasketCountTitle('Кол');
  }, [screenWidth]);

  return (
    <div
      className={styles.basket + ' ' + (basketActive ? styles.basket_active : '')}
      ref={basketRef}
    >
      <div className={styles.icon_btn + ' ' + (basketActive ? styles.icon_btn_active : '')}>
        <div onClick={handleClickPayment}> Icon </div>
      </div>

      <div
        className={styles.content + ' ' + (basketActive ? styles.content_active : '')}
        style={{ display: contentActive ? 'block' : 'none' }}
      >
        How to blur background image using CSS ? - GeeksforGeeks
        geeksforgeeks.org›how…blur-background-image…css/ Меню CSS allows for easy customization of a
        web page’s color, font, spacing, and other elements to make it a crucial tool for creating
        professional-looking and functional websites. To blur a background image using CSS, you can
        use the filter property. Читать ещёCSS allows for easy customization of a web page’s color,
        font, spacing, and other elements to make it a crucial tool for creating
        professional-looking and functional websites. To blur a background image using CSS, you can
        use the filter property. The filter property is used to set the visual effect of an element.
        Syntax Скрыть Не найдено: размытый
      </div>

      <div className={styles.head}>
        <div className={styles.summ}>Сумма: {basketSumm}₽</div>
        <div className={styles.count}>
          {basketCountTitle}: {basketCount}
        </div>
        <button onClick={handleClickPayment}>Оплатить</button>
      </div>
    </div>
  );
};
