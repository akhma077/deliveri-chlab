import * as React from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { ReactComponent as IconCamera } from "../../../shared/assets/img/iconCamera.svg";
import { createProduct, fetchCategories } from "../../../shared";
import { useQuery } from "react-query";

export const CreateProductForm = () => {
    const { data: categoriesData } = useQuery("categories", fetchCategories);
    const [modal, setModal] = React.useState<boolean>(false);
    const {
        register,
        // formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: "onChange" });
    const [image, setImage] = React.useState<any>();

    const onSubmit = async (data: any) => {
        try {
            const res = await createProduct(data);
            if (res) {
                setModal(true);
                reset();
            }
        } catch (error) {}
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {modal && (
                <div className={styles.modal} onClick={() => setModal(false)}>
                    <div>
                        <p>Продукт успешно добавлен!</p>
                        <button>Отлично</button>
                    </div>
                </div>
            )}
            <div className={styles.form__imgroot}>
                {!image && (
                    <>
                        <IconCamera className={styles.plug} />
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
                    {...register("Image")}
                    onChange={(e) =>
                        setImage(e.target.files ? e.target.files[0] : "")
                    }
                />
            </div>
            <div className={styles.text_field_root}>
                <label>Название продукта</label>
                <input
                    className={styles.text_field}
                    type="text"
                    {...register("Name")}
                />
            </div>
            <div className={styles.text_field_root}>
                <label>Описание</label>
                <input
                    className={styles.text_field}
                    type="text"
                    {...register("Description")}
                />
            </div>
            <div className={styles.text_field_root}>
                <label>Цена</label>
                <input
                    className={styles.text_field}
                    type="text"
                    {...register("Price")}
                />
            </div>
            <div className={styles.text_field_root}>
                <label>Вес</label>
                <input
                    className={styles.text_field}
                    type="text"
                    {...register("Weight")}
                />
            </div>
            <div className={styles.text_field_root}>
                <label>Категория</label>
                <select {...register("CategoryId")}>
                    <option selected disabled>
                        Выберите категорию
                    </option>
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
