import { container } from 'tsyringe';

import { ICustomersRepository } from '@modules/customers/domain/repositories/ICustomersRepositories';
import CustomersRepository from '@modules/customers/infra/database/repositories/CustomerRepositories';
import { IProductsRepository } from '@modules/products/domain/repositories/IProductsRepository';
import { IUsersRepository } from '@modules/users/domain/repositories/IUserRepositories';
import UsersRepository from '@modules/users/infra/database/repositories/UsersRepository';
import UserTokensRepository from '@modules/users/infra/database/repositories/UserTokensRepository';
import { IUserTokensRepository } from '@modules/users/domain/repositories/IUserTokensRepository';
import { IOrdersRepository } from '@modules/orders/domain/repositories/IOrdersRepository';
import OrdersRepository from '@modules/orders/infra/database/repositories/OrderRepositories';
import ProductsRepository from '@modules/products/infra/database/repositories/ProductsRepositories';

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);
container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
