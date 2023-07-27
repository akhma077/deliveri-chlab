interface RoutePaths {
  home: string;
  restaraunt: string;
  basket: string;
  personalAccount: string;
  checkoutPage: string;
  success: string;
}

export const routePaths: RoutePaths = {
  home: '/',
  restaraunt: 'restaraunt/:id',
  basket: 'basket',
  personalAccount: 'personalAccount',
  checkoutPage: 'checkoutPage',
  success: 'success',
};
