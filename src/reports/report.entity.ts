import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  bookmark: boolean;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  cvFile: string;

  @Column()
  contact: number;

  @ManyToOne(() => User, (user) => user.reports)
  user: User;
}
