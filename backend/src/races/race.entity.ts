import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
export type RaceType = '5K' | '10K' | 'semi' | 'marathon';
@Entity()
export class Race {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  name: string;

  @Column({ type: 'datetime' })
  date: Date;

  @Column({ type: 'enum', enum: ['5K', '10K', 'semi', 'marathon'] })
  type: RaceType;

  @Index({ spatial: true })
  @Column({ type: 'point', srid: 4326, nullable: false })
  location: string;
}
