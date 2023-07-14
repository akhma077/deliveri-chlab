import * as React from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { LoginAPI } from "../../../shared/API/API.service";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({ mode: "onChange" });
    const [user, setUser] = React.useState(null);

    const { data, refetch } = useQuery(["login", user], LoginAPI, {
        enabled: false,
    });

    const onSubmit = async (data: any) => {
        await setUser(data);
        refetch();
    };

    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input
                className={styles.text_field}
                type="text"
                placeholder="Введите ваш email"
                {...register("email", {
                    required: "Поле обязательно для заполнения",
                })}
            />
            <div className={styles.error}>
                {errors?.email && <p>{errors?.email?.message || "error"}</p>}
            </div>
            <input
                className={styles.text_field}
                placeholder="Введите ваш пароль"
                type="password"
                {...register("password", {
                    required: "Поле обязательно для заполнения",
                })}
            />
            <div className={styles.error}>
                {errors?.password && (
                    <p>{errors?.password?.message || "error"}</p>
                )}
            </div>
            <button>Войти</button>
            <div className={styles.bott}>
                У вас нет аккаунта?{" "}
                <div onClick={() => navigate("/register")}>
                    Зарегистрироваться
                </div>
            </div>
        </form>
    );
};
