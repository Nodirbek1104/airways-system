import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Plane } from './plane.entity';
import { ClassEntity } from './class.entity';

@Entity('seats')
export class Seat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seatNumber: string;

  @ManyToOne(() => Plane, (plane) => plane.seats, { onDelete: 'CASCADE' })
  plane: Plane;

  @ManyToOne(() => ClassEntity, (class_) => class_.seats)
  class: ClassEntity;

  @Column({ default: true })
  isAvailable: boolean;
}
