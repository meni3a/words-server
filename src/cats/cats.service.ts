import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from './entities/cat.entity';


@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name) private catModel: Model<CatDocument>
  ) { }

  async create(cat: Cat): Promise<CatDocument> {
    return await this.catModel.create(cat);
  }

  async findAll(): Promise<CatDocument[]> {
    return await this.catModel.find({});
  }

  async findOne(id: string): Promise<CatDocument[]> {
    return await this.catModel.findById(id);
  }

  async update(id: string, updateCatDto: Partial<Cat>): Promise<CatDocument[]> {
    return await this.catModel.findByIdAndUpdate(id, updateCatDto);
  }

  async remove(id: string): Promise<CatDocument[]> {
    return await this.catModel.remove({ _id: id });
  }
}
