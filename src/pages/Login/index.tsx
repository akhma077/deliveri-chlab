import { LoginForm } from "../../widgets";
import styles from "./index.module.scss";

export const Login = () => {
    return (
        <div className={styles.login}>
            <LoginForm />
        </div>
    );
};
