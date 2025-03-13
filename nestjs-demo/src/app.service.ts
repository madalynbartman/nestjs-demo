import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Item } from './models/item.model';

@Injectable()
export class AppService {
  private inventory: Record<number, Item> = {};

  getItem(itemId: number, name?: string): Item {
    const item = this.inventory[itemId];
    if (!item) {
      throw new HttpException('Item ID not found.', HttpStatus.NOT_FOUND);
    }
    if (name && item.name !== name) {
      throw new HttpException('Item name mismatch.', HttpStatus.NOT_FOUND);
    }
    return item;
  }

  createItem(itemId: number, item: Item): Item {
    if (this.inventory[itemId]) {
      throw new HttpException('Item ID already exists.', HttpStatus.BAD_REQUEST);
    }
    this.inventory[itemId] = item;
    return item;
  }

  updateItem(itemId: number, item: Item): Item {
    const existingItem = this.inventory[itemId];
    if (!existingItem) {
      throw new HttpException('Item ID does not exist.', HttpStatus.NOT_FOUND);
    }
    if (item.name !== undefined) existingItem.name = item.name;
    if (item.price !== undefined) existingItem.price = item.price;
    if (item.description !== undefined) existingItem.description = item.description;
    return existingItem;
  }

  deleteItem(itemId: number): string {
    if (!this.inventory[itemId]) {
      throw new HttpException('Item ID does not exist.', HttpStatus.NOT_FOUND);
    }
    delete this.inventory[itemId];
    return 'Item deleted successfully!';
  }
}

