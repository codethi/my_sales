import AppError from '@shared/errors/AppError';
import FakeCustomersRepository from '../domain/repositories/fakes/FakeCustomerRepositories';
import CreateCustomerService from './CreateCustomerService';

describe('CreateCustomerService', () => {
  it('should be able to create a new customer', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();
    const createCustomer = new CreateCustomerService(fakeCustomersRepository);

    const customer = await createCustomer.execute({
      name: 'John Doe',
      email: 'john@gmail.com',
    });

    expect(customer).toHaveProperty('id');
    expect(customer.email).toBe('john@gmail.com');
  });

  it('should not be able to create a new customer with email that is already in use', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();
    const createCustomer = new CreateCustomerService(fakeCustomersRepository);

    await createCustomer.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
    });

    await expect(
      createCustomer.execute({
        name: 'John Doe',
        email: 'johndoe@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
