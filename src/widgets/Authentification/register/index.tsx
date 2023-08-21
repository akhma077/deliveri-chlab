import * as React from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { RegisterAPI } from "../../../shared";
import { useNavigate } from "react-router-dom";
import { setCookie } from "nookies";
import { HelperText, TextField } from "../../../shared/UI";
import { Button, ButtonVariant } from "../../../shared/UI/Button";

import { ReactComponent as PassVisibleIcon } from "../../../shared/assets/img/Status=on.svg";
import { ReactComponent as PassHiddenIcon } from "../../../shared/assets/img/Status=off.svg";

type ShowPassState = {
    [inputId: string]: boolean;
};

export const RegisterForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: "onChange" });
    const navigate = useNavigate();
    const [status, setStatus] = React.useState<string>("");
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isShowPass, setIsShowPass] = React.useState<ShowPassState>({});


  function handleShowPass(inputId: string) {
    setIsShowPass((prevInputStates) => ({
      ...prevInputStates,
      [inputId]: !prevInputStates[inputId],
    }));
  }

   


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
            <TextField
                type="text"
                placeholder="Введите ваш email"
                // className={styles.text_field}
                {...register("Email", {
                    required: "Поле обязательно для заполнения",
                })}
            />
            <div className={styles.error}>
                {errors?.Email && (
                    <HelperText isError message="Проверьте данное поле" />
                )}
            </div>

            <div className={styles.inputPass}>
                {" "}
                <TextField
                    placeholder="Введите ваш пароль"
                    type={isShowPass["input1"] ? "text" : "password"}
                    {...register("Password", {
                        required: "Поле обязательно для заполнения",
                        minLength: {
                            value: 8,
                            message: "Минимальная длина пароля 8 символов",
                        },
                    })}
                />
                <div className={styles.eyeIcon}>
                    {isShowPass["input1"] ? (
                        <PassVisibleIcon
                            onClick={() => handleShowPass("input1")}
                        />
                    ) : (
                        <PassHiddenIcon
                            onClick={() => handleShowPass("input1")}
                        />
                    )}
                </div>
            </div>

            <div className={styles.error}>
                {errors?.Password && (
                    <HelperText isError message="Проверьте данное поле" />
                )}
            </div>

            <div className={styles.inputPass}>
                <TextField
                    // className={styles.text_field}
                    placeholder="Повторно введите ваш пароль"
                    type={isShowPass["input2"] ? "text" : "password"}
                    {...register("PasswordConfirmation", {
                        required: "Поле обязательно для заполнения",
                        minLength: {
                            value: 8,
                            message: "Минимальная длина пароля 8 символов",
                        },
                    })}
                />
                <div className={styles.eyeIcon}>
                    {isShowPass["input2"] ? (
                        <PassVisibleIcon
                            onClick={() => handleShowPass("input2")}
                        />
                    ) : (
                        <PassHiddenIcon
                            onClick={() => handleShowPass("input2")}
                        />
                    )}
                </div>
            </div>

            <div className={styles.error}>
                {errors?.PasswordConfirmation && (
                    <HelperText isError message="Проверьте данное поле" />
                )}
            </div>
            {status && (
                <div style={{ height: 20, color: "red" }}>
                    <p style={{ textAlign: "center" }}>{status}</p>
                </div>
            )}
            <Button variant={ButtonVariant.Base} type={"submit"}>
                {isLoading ? "Загрузка..." : "Зарегистрироваться"}
            </Button>
            <div className={styles.bott}>
                У вас уже есть аккаунт?{" "}
                <div onClick={() => navigate("/login")}>Войти</div>
            </div>
        </form>
    );
};
