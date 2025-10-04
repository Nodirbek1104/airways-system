import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from '../../entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private repo: Repository<News>,
  ) { }

  findAll() { return this.repo.find(); }
  findOne(id: number) { return this.repo.findOneBy({ id }); }
  create(data: any) { const ent = this.repo.create(data); return this.repo.save(ent); }
  async update(id: number, data: any) { await this.repo.update(id, data); return this.findOne(id); }
  async remove(id: number) { await this.repo.delete(id); return { deleted: true }; }
}
