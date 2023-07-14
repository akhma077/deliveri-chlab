interface RoutePaths {
    home: string;
    restaraunt: string;
    basket: string;
    login: string;
    register: string;
    createProduct: string;
}

export const routePaths: RoutePaths = {
    home: "/",
    restaraunt: "restaraunt/:id",
    basket: "basket",
    login: "login",
    register: "register",
    createProduct: "createProduct",
};
