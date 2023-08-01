import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormLabel, HelperText, TextField, СheckboxInput } from '../../shared/UI';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, ButtonVariant } from '../../shared/UI/Button';
import Select from 'react-select';
import classNames from 'classnames';

import styles from './index.module.scss';
import { RadioButton } from '../../shared/UI/RadioButton/RadioButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBasket } from '../../shared/config';
import { Product } from '../../entities';

const schema = yup.object().shape({
  name: yup.string().required('Это обязательное поле'),
  phone: yup.string().required('Это обязательное поле'),
  selectCity: yup.string().required('Выберите населенный пункт'),
});

export const CheckoutPage: React.FC = () => {
  const [isClearable, setIsClearable] = React.useState(true);

  const { basket } = useSelector(selectBasket);

  const funcReturnBasketCount = () => {
    let summ = 0;
    basket.map((ars: Product[]) => {
      ars.map((item) => (summ += item.price));
    });

    return summ;
  };

  const [selectedOption, setSelectedOption] = React.useState<string>('option1');

  const navigate = useNavigate();

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(errors);

  const colourOptions = [
    { value: 'altievo', label: 'Альтиево' },
    { value: 'nazran', label: 'Назрань' },
    { value: 'magas', label: 'Магас' },
  ];
  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.root__container}>
        <h2>Куда</h2>

        <div className={styles.root__container__fields}>
          <TextField
            label={'Имя'}
            isError={Boolean(errors.name)}
            helperText={errors.name?.message}
            placeholder="Введите ваше имя"
            type="text"
            {...register('name')}
          />
          <TextField
            label={'Телефон'}
            isError={Boolean(errors.phone)}
            helperText={errors.phone?.message}
            placeholder="Номер вашего телефона"
            {...register('phone')}
          />
          <div style={{ gridColumn: '1 / 3' }}>
            <FormLabel> Населенный пункт </FormLabel>
            <Select
              className={classNames('basic-single', styles.customSelect)}
              options={colourOptions}
              isClearable={isClearable}
              placeholder={'Выбрать населенный пункт '}
              {...register('selectCity')}
            />
            <HelperText isError={Boolean(errors.selectCity)} message={errors.selectCity?.message} />
          </div>
          <TextField
            containerProps={{ className: styles.root__container__fieldFull }}
            isError={Boolean(errors.phone)}
            helperText={errors.phone?.message}
            placeholder="Улица, Дом №"
            {...register('phone')}
          />
          <TextField
            containerProps={{ className: styles.root__container__fieldFull }}
            placeholder="Комментарий к закаку"
            label="Комментарий"
          />
        </div>
      </div>

      <div className={styles.root__container2}>
        <h2 className={styles.root__totalPrice}>
          Итого: <span> {funcReturnBasketCount()}₽</span>
        </h2>

        <h2 className={styles.root__paymentTitle}>Оплата: </h2>
        <div className={styles.root__section}>
          <div>
            <RadioButton
              label="Наличными курьеру"
              value="option1"
              name="radioGroup"
              checked={selectedOption === 'option1'}
              onChange={handleRadioChange}
            />
          </div>
          <div>
            <RadioButton
              label="Перевод на номер: +7 (999) 999 99-99"
              value="option2"
              name="radioGroup"
              checked={selectedOption === 'option2'}
              onChange={handleRadioChange}
            />
          </div>
        </div>

        <div className={styles.root__container2__btn}>
          <Button variant={ButtonVariant.Base} type="submit">
            Готово
          </Button>
        </div>
      </div>
    </form>
  );
};
