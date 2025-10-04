import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airport } from '../../entities/airport.entity';
import { AirportService } from './airports.service';
import { AirportController } from './airports.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Airport])],
  controllers: [AirportController],
  providers: [AirportService],
  exports: [AirportService]
})
export class AirportModule {}
