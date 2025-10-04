import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from '../../entities/flight.entity';
import { FlightService } from './flights.service';
import { FlightController } from './flights.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Flight])],
  controllers: [FlightController],
  providers: [FlightService],
  exports: [FlightService]
})
export class FlightModule {}
