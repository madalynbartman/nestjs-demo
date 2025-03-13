import { AppService } from './app.service';
import { Item } from './models/item.model';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService(); // Initialize AppService before each test
  });

  it('should create a new item', () => {
    const item: Item = { name: 'Apple', price: 1.99, description: 'Fresh apple' };
    const result = appService.createItem(1, item);
    expect(result).toEqual(item); // Assert that the item was created correctly
  });

  it('should throw an error when creating an item with an existing ID', () => {
    const item: Item = { name: 'Apple', price: 1.99 };
    appService.createItem(1, item); // Create the item once

    expect(() => appService.createItem(1, item)).toThrow('Item ID already exists.'); // Try creating with the same ID
  });

  it('should return an item by ID', () => {
    const item: Item = { name: 'Banana', price: 0.99 };
    appService.createItem(2, item);

    const result = appService.getItem(2);
    expect(result).toEqual(item); // Assert that the item can be retrieved
  });

  it('should delete an item by ID', () => {
    const item: Item = { name: 'Cherry', price: 3.99 };
    appService.createItem(3, item);

    const message = appService.deleteItem(3);
    expect(message).toBe('Item deleted successfully!'); // Assert that the item was deleted
  });

  it('should throw an error when deleting a non-existent item', () => {
    expect(() => appService.deleteItem(99)).toThrow('Item ID does not exist.'); // Try deleting an item that doesn't exist
  });
});
