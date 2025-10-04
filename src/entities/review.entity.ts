import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from 'typeorm';
import { User } from './user.entity';
import { Flight } from './flight.entity';

@Entity('reviews')
@Unique(['user', 'flight'])
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.reviews, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Flight, (flight) => flight.reviews, { onDelete: 'CASCADE' })
  flight: Flight;

  @Column('int')
  rating: number;

  @Column({ nullable: true, type: 'text' })
  comment: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
