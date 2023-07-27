import { CreateProductForm } from "../../widgets";
import styles from "./index.module.scss";

export const CreateProduct = () => {
    return (
        <div className={styles.root}>
            <CreateProductForm />
        </div>
    );
};
