import { RegisterForm } from "../../widgets";
import styles from "./index.module.scss";

export const Register = () => {
    return (
        <div className={styles.login}>
            <RegisterForm />
        </div>
    );
};
