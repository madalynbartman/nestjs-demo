import { Controller, Get, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Item } from './models/item.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} // Injects AppService into AppController

  @Get('get-item/:itemId')
  getItem(@Param('itemId') itemId: number, @Body('name') name?: string): Item {
    return this.appService.getItem(itemId, name); // Use the injected AppService
  }

}
