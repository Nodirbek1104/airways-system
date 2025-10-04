import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Country } from './country.entity';
import { Airport } from './airport.entity';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Country, (country) => country.cities, { onDelete: 'CASCADE' })
  country: Country;

  @OneToMany(() => Airport, (airport) => airport.city)
  airports: Airport[];
}
