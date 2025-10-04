import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Seat } from './seat.entity';
import { Ticket } from './ticket.entity';

@Entity('classes')
export class ClassEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string; // Economy, Business, VIP

  @Column('decimal', { default: 1.0 })
  priceMultiplier: number;

  @OneToMany(() => Seat, (seat) => seat.class)
  seats: Seat[];

  @OneToMany(() => Ticket, (ticket) => ticket.class)
  tickets: Ticket[];
}
