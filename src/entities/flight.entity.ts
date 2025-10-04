import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Company } from './company.entity';
import { Plane } from './plane.entity';
import { Airport } from './airport.entity';
import { Ticket } from './ticket.entity';
import { Review } from './review.entity';

@Entity('flights')
export class Flight {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Company, (company) => company.flights)
  company: Company;

  @ManyToOne(() => Plane, (plane) => plane.flights)
  plane: Plane;

  @ManyToOne(() => Airport, { nullable: false })
  departureAirport: Airport;

  @ManyToOne(() => Airport, { nullable: false })
  arrivalAirport: Airport;

  @Column('timestamp')
  departureTime: Date;

  @Column('timestamp')
  arrivalTime: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  basePrice: number;

  @Column({ default: 'ACTIVE' })
  status: string;

  @Column('decimal', { precision: 3, scale: 2, nullable: true })
  averageRating: number;

  @Column('int', { default: 0 })
  totalReviews: number;

  @OneToMany(() => Ticket, (ticket) => ticket.flight)
  tickets: Ticket[];

  @OneToMany(() => Review, (review) => review.flight)
  reviews: Review[];
}
