import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { City } from './city.entity';
import { Company } from './company.entity';

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => City, (city) => city.country)
  cities: City[];

  @OneToMany(() => Company, (company) => company.country)
  companies: Company[];
}
