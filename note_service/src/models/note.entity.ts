import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: Number;

  @Column()
  name: string;

  @Column()
  body: string;
}
