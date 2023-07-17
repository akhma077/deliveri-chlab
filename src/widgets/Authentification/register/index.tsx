import * as React from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { RegisterAPI } from "../../../shared/";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({ mode: "onChange" });

    const onSubmit = async (data: any) => {
        RegisterAPI(data);
    };
    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h2>Регистрация</h2>
            <input
                type="text"
                placeholder="Введите ваш email"
                className={styles.text_field}
                {...register("Email", {
                    required: "Поле обязательно для заполнения",
                })}
            />
            <div className={styles.error}>
                {errors?.Email && <p>{errors?.Email?.message || "error"}</p>}
            </div>
            <input
                className={styles.text_field}
                placeholder="Введите ваш пароль"
                type="password"
                {...register("Password", {
                    required: "Поле обязательно для заполнения",
                    minLength: {
                        value: 8,
                        message: "Минимальная длина пароля 8 символов",
                    },
                })}
            />
            <div className={styles.error}>
                {errors?.Password && (
                    <p>{errors?.Password?.message || "error"}</p>
                )}
            </div>
            <input
                className={styles.text_field}
                placeholder="Повторно введите ваш пароль"
                type="password"
                {...register("PasswordConfirmation", {
                    required: "Поле обязательно для заполнения",
                    minLength: {
                        value: 8,
                        message: "Минимальная длина пароля 8 символов",
                    },
                })}
            />
            <div className={styles.error}>
                {errors?.PasswordConfirmation && (
                    <p>{errors?.PasswordConfirmation?.message || "error"}</p>
                )}
            </div>
            <button>Зарегистрироваться</button>
            <div className={styles.bott}>
                У вас уже есть аккаунт?{" "}
                <div onClick={() => navigate("/login")}>Войти</div>
            </div>
        </form>
    );
};
