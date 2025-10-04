import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plane } from '../../entities/plane.entity';
import { PlaneService } from './planes.service';
import { PlaneController } from './planes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Plane])],
  controllers: [PlaneController],
  providers: [PlaneService],
  exports: [PlaneService]
})
export class PlaneModule {}
