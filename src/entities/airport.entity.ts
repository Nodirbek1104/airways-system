import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { City } from './city.entity';

@Entity('airports')
export class Airport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true, nullable: true })
  code: string;

  @ManyToOne(() => City, (city) => city.airports, { onDelete: 'CASCADE' })
  city: City;
}
