import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from '../../entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private repo: Repository<City>,
  ) { }

  findAll() { return this.repo.find(); }
  findOne(id: number) { return this.repo.findOneBy({ id }); }
  create(data: any) { const ent = this.repo.create(data); return this.repo.save(ent); }
  async update(id: number, data: any) { await this.repo.update(id, data); return this.findOne(id); }
  async remove(id: number) { await this.repo.delete(id); return { deleted: true }; }
}
