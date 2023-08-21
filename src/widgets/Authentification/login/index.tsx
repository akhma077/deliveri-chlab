import * as React from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { LoginAPI } from "../../../shared";
import { useNavigate } from "react-router-dom";
import { setCookie } from "nookies";
import { HelperText, TextField } from "../../../shared/UI";
import { Button, ButtonVariant } from "../../../shared/UI/Button";

import { ReactComponent as PassVisibleIcon } from "../../../shared/assets/img/Status=on.svg";
import { ReactComponent as PassHiddenIcon } from "../../../shared/assets/img/Status=off.svg";

export const LoginForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: "onChange" });

    const navigate = useNavigate();
    const [status, setStatus] = React.useState<string>("");
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isSHowPass, setIsShowPass] = React.useState<boolean>(false);

    function handleShowPass() {
        setIsShowPass(!isSHowPass);
    }

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        try {
            const { accessToken } = await LoginAPI(data);
            setCookie(accessToken, "authToken", accessToken, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            navigate("/");
            window.location.reload();
        } catch (error) {
            setStatus("Проверьте ваши данные");
        }
        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h2>Вход</h2>

            <TextField
                type="text"
                placeholder="Введите ваш email"
                {...register("Email", {
                    required: "Поле обязательно для заполнения",
                })}
            />
            <div className={styles.error}>
                {errors?.Email && (
                    <HelperText message="Проверьте данное поле" isError />
                )}
            </div>
            <div className={styles.inputPass}>
                <TextField
                    placeholder="Введите ваш пароль"
                    type={isSHowPass ? "text" : "password"}
                    {...register("Password", {
                        required: "Поле обязательно для заполнения",
                    })}
                />
                <div onClick={handleShowPass} className={styles.eyeIcon}>
                    {isSHowPass ? <PassVisibleIcon /> : <PassHiddenIcon />}
                </div>
            </div>

            <div className={styles.error}>
                {errors?.Password && (
                    <HelperText message="Проверьте данное поле" isError />
                )}
            </div>

            {status && (
                <div style={{ height: 20, color: "red" }}>
                    <p style={{ textAlign: "center" }}>{status}</p>
                </div>
            )}
            <Button variant={ButtonVariant.Base} type={"submit"}>
                {isLoading ? "Загрузка..." : "Войти"}
            </Button>
            <div className={styles.bott}>
                У вас нет аккаунта?{" "}
                <div onClick={() => navigate("/register")}>
                    Зарегистрироваться
                </div>
            </div>
        </form>
    );
};
