import { ApiProperty } from '@nestjs/swagger';

export class Item {
  @ApiProperty({ example: 'Apple', description: 'The name of the item' })
  name: string;

  @ApiProperty({ example: 1.99, description: 'The price of the item' })
  price: number;

  @ApiProperty({ example: 'A fresh red apple', description: 'Optional description' })
  description?: string;
}
