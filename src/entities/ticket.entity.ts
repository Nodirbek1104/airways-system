import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from 'typeorm';
import { User } from './user.entity';
import { Flight } from './flight.entity';
import { Seat } from './seat.entity';
import { ClassEntity } from './class.entity';

@Entity('tickets')
@Unique(['flight', 'seat'])
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.tickets, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Flight, (flight) => flight.tickets, { onDelete: 'CASCADE' })
  flight: Flight;

  @ManyToOne(() => Seat, { nullable: false })
  seat: Seat;

  @ManyToOne(() => ClassEntity, { nullable: false })
  class: ClassEntity;

  @Column('decimal', { precision: 10, scale: 2 })
  totalPrice: number;

  @Column({ default: 'BOOKED' })
  status: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  bookedAt: Date;
}
