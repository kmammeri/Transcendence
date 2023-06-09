import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  userID: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  userName: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  userPswdHash: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  userNick: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  userPicture: string;

  @Column({ type: 'integer', nullable: true })
  userElo: number;

  @Column({ type: 'integer', nullable: true })
  userNbWin: number;

  @Column({ type: 'integer', nullable: true })
  userNbLose: number;

  @Column({ type: 'integer', array: true, nullable: true })
  userFriends: number[];

  @Column({ type: 'integer', nullable: true })
  userStatus: number;

  @Column({ type: 'integer', array: true, nullable: true })
  userHistory: number[];

  @Column({ type: 'integer', array: true, nullable: true })
  userChannels: number[];
}
