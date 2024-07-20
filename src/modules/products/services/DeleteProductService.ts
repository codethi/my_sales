import AppError from '@shared/errors/AppError';
import { productsRepositories } from '../database/repositories/ProductsRepositories';
import RedisCache from '@shared/cache/RedisCache';

interface IDeleteProduct {
  id: string;
}

export default class DeleteProductService {
  async execute({ id }: IDeleteProduct): Promise<void> {
    const product = await productsRepositories.findById(id);
    const redisCache = new RedisCache();

    if (!product) {
      throw new AppError('Product not found.', 404);
    }

    await redisCache.invalidate('api-mysales-PRODUCT_LIST');

    await productsRepositories.remove(product);
  }
}
