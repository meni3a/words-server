import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from '../cats.controller';
import { CatsService } from '../cats.service';
import { Cat, catSchema } from '../entities/cat.entity';
import { closeInMongodConnection, rootMongooseTestModule } from '../../../test/mongoInMemory';

describe('CatController', () => {
  let catController: CatsController;

  beforeEach(async () => {
    const cat: TestingModule = await Test.createTestingModule({
      providers: [
        CatsService
      ],
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: Cat.name, schema: catSchema }]),
      ],
      controllers: [
        CatsController
      ]
    }).compile();

    catController = cat.get<CatsController>(CatsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect((await catController.findAll())).not.toBe([]);
    });
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });
});
