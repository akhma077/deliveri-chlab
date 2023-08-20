import { useSelector } from "react-redux";
import { selectUser } from "../config";

export const useEmailConfirmed = () => {
    const { user } = useSelector(selectUser);

    let emailConfirmed = null;
    if (user) emailConfirmed = true;

    return { emailConfirmed };
};
