import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import { hashSync } from 'bcrypt'

@Entity('users')
export class User {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10)
  }
}
