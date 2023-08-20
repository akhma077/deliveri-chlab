interface RoutePaths {
  home: string;
  restaraunt: string;
  basket: string;
  personalAccount: string;
  checkoutPage: string;
  success: string;
  login: string;
  register: string;
  createProduct: string;
  restarauntAccaunt: string;
  restarauntAccauntEdit: string;
}

export const routePaths: RoutePaths = {
  home: '/',
  restaraunt: 'restaraunt/:id',
  basket: 'basket',
  personalAccount: 'personalAccount',
  checkoutPage: 'checkoutPage',
  success: 'success',
  login: 'login',
  register: 'register',
  createProduct: 'createProduct',
  restarauntAccaunt: 'restarauntAccaunt/:id',
  restarauntAccauntEdit: 'restarauntAccauntEdit',
};
