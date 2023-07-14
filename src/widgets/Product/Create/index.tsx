import * as React from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import iconCamera from "../../../shared/assets/img/iconCamera.svg";
import { createProduct, fetchCategories } from "../../../shared";
import { useQuery } from "react-query";

export const CreateProductForm = () => {
    const { data: categoriesData } = useQuery("categories", fetchCategories);
    const {
        register,
        // formState: { errors, isValid },
        handleSubmit,
    } = useForm({ mode: "onChange" });
    const [image, setImage] = React.useState<any>();

    const onSubmit = (data: any) => {
        createProduct(data);
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form__imgroot}>
                {!image && (
                    <>
                        <img className={styles.plug} src={iconCamera} alt="" />
                        <div>Выберите фото</div>
                    </>
                )}
                {image && (
                    <img
                        className={styles.main_image}
                        src={URL.createObjectURL(image)}
                        alt=""
                    />
                )}
                <input
                    type="file"
                    {...register("image")}
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </div>
            <div className={styles.text_field_root}>
                <label>Название продукта</label>
                <input
                    className={styles.text_field}
                    type="text"
                    {...register("name")}
                />
            </div>
            <div className={styles.text_field_root}>
                <label>Цена</label>
                <input
                    className={styles.text_field}
                    type="text"
                    {...register("price")}
                />
            </div>
            <div className={styles.text_field_root}>
                <label>Вес</label>
                <input
                    className={styles.text_field}
                    type="text"
                    {...register("weight")}
                />
            </div>
            <div className={styles.text_field_root}>
                <label>Категория</label>
                <select {...register("categoryId")}>
                    {categoriesData?.map((item: any, index: number) => (
                        <option value={item.id} key={index}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <button>Добавить</button>
        </form>
    );
};
