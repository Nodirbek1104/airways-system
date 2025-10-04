import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Country } from './country.entity';
import { Plane } from './plane.entity';
import { Flight } from './flight.entity';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Country, (country) => country.companies)
  country: Country;

  @OneToMany(() => Plane, (plane) => plane.company)
  planes: Plane[];

  @OneToMany(() => Flight, (flight) => flight.company)
  flights: Flight[];
}
