import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let app: TestingModule; // Declare `app` at the top level so it’s accessible everywhere

  beforeEach(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getItem', () => {
    it('should return an item if it exists', () => {
      const appService = app.get<AppService>(AppService);
      const mockItem = { name: 'Apple', price: 1.99, description: 'A fresh apple' };
      
      // Mock service method
      jest.spyOn(appService, 'getItem').mockImplementation(() => mockItem);

      // Test controller method
      const itemId = 1;
      const result = appController.getItem(itemId);
      expect(result).toEqual(mockItem);
    });
  });
});
