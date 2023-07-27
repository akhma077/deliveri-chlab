import * as React from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { LoginAPI } from "../../../shared";
import { useNavigate } from "react-router-dom";
import { setCookie } from "nookies";

export const LoginForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: "onChange" });

    const navigate = useNavigate();
    const [status, setStatus] = React.useState<string>("");

    const onSubmit = async (data: any) => {
        try {
            const { accessToken } = await LoginAPI(data);
            setCookie(accessToken, "authToken", accessToken, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            navigate("/");
        } catch (error) {
            setStatus("Проверьте ваши данные");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h2>Вход</h2>
            <input
                className={styles.text_field}
                type="text"
                placeholder="Введите ваш email"
                {...register("Email", {
                    required: "Поле обязательно для заполнения",
                })}
            />
            <div className={styles.error}>
                {errors?.Email && <p>Проверьте данное поле</p>}
            </div>
            <input
                className={styles.text_field}
                placeholder="Введите ваш пароль"
                type="password"
                {...register("Password", {
                    required: "Поле обязательно для заполнения",
                })}
            />
            <div className={styles.error}>
                {errors?.Password && <p>Проверьте данное поле</p>}
            </div>
            {status && (
                <div style={{ height: 20, color: "red" }}>
                    <p style={{ textAlign: "center" }}>{status}</p>
                </div>
            )}
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
