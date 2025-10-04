import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { Country } from './entities/country.entity';
import { City } from './entities/city.entity';
import { Airport } from './entities/airport.entity';
import { Company } from './entities/company.entity';
import { Plane } from './entities/plane.entity';
import { ClassEntity } from './entities/class.entity';
import { Seat } from './entities/seat.entity';
import { User } from './entities/user.entity';
import { Flight } from './entities/flight.entity';
import { Ticket } from './entities/ticket.entity';
import { Review } from './entities/review.entity';
import { News } from './entities/news.entity';
import { CountriesModule } from './modules/countries/countries.module';
import { CitiesModule } from './modules/cities/cities.module';
import { AirportsModule } from './modules/airports/airports.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { PlanesModule } from './modules/planes/planes.module';
import { ClassesModule } from './modules/classes/classes.module';
import { SeatsModule } from './modules/seats/seats.module';
import { UsersModule } from './modules/users/users.module';
import { FlightsModule } from './modules/flights/flights.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { NewsModule } from './modules/news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'airways',
      entities: [Country, City, Airport, Company, Plane, ClassEntity, Seat, User, Flight, Ticket, Review, News],
      synchronize: true,
      logging: false
    }),
    CountriesModule,
    CitiesModule,
    AirportsModule,
    CompaniesModule,
    PlanesModule,
    ClassesModule,
    SeatsModule,
    UsersModule,
    FlightsModule,
    TicketsModule,
    ReviewsModule,
    NewsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
