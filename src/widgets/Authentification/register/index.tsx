import * as React from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { RegisterAPI } from "../../../shared";
import { useNavigate } from "react-router-dom";
import { setCookie } from "nookies";

export const RegisterForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: "onChange" });
    const navigate = useNavigate();
    const [status, setStatus] = React.useState<string>("");
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        try {
            const { accessToken } = await RegisterAPI(data);
            setCookie(accessToken, "authToken", "authToken", {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            navigate("/");
        } catch (error) {
            setStatus("Проверьте ваши данные");
        }
        setIsLoading(false);
    };

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
                {errors?.Email && <p>Проверьте данное поле</p>}
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
                {errors?.Password && <p>Проверьте данное поле</p>}
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
                {errors?.PasswordConfirmation && <p>Проверьте данное поле</p>}
            </div>
            {status && (
                <div style={{ height: 20, color: "red" }}>
                    <p style={{ textAlign: "center" }}>{status}</p>
                </div>
            )}
            <button>{isLoading ? "Ждите..." : "Зарегистрироваться"}</button>
            <div className={styles.bott}>
                У вас уже есть аккаунт?{" "}
                <div onClick={() => navigate("/login")}>Войти</div>
            </div>
        </form>
    );
};
