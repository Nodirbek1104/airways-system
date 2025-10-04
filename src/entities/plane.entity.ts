import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Company } from './company.entity';
import { Seat } from './seat.entity';
import { Flight } from './flight.entity';

@Entity('planes')
export class Plane {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column('int')
  capacity: number;

  @ManyToOne(() => Company, (company) => company.planes)
  company: Company;

  @OneToMany(() => Seat, (seat) => seat.plane)
  seats: Seat[];

  @OneToMany(() => Flight, (flight) => flight.plane)
  flights: Flight[];
}
