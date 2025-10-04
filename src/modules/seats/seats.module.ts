import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from '../../entities/seat.entity';
import { SeatService } from './seats.service';
import { SeatController } from './seats.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Seat])],
  controllers: [SeatController],
  providers: [SeatService],
  exports: [SeatService]
})
export class SeatModule {}
