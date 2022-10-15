import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from '../cats.controller';
import { CatsService } from '../cats.service';
import { Cat, catSchema } from '../entities/cat.entity';
import { closeInMongodConnection, rootMongooseTestModule } from '../../../test/mongoInMemory';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test
      .createTestingModule({
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

      })
      .compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  afterAll(async () => {
    await closeInMongodConnection();
  });
});
