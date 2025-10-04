import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassEntity } from '../../entities/class.entity';
import { ClassEntityService } from './classes.service';
import { ClassEntityController } from './classes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClassEntity])],
  controllers: [ClassEntityController],
  providers: [ClassEntityService],
  exports: [ClassEntityService]
})
export class ClassEntityModule {}
