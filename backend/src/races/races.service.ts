import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Race } from './race.entity';

@Injectable()
export class RacesService {
  constructor(@InjectRepository(Race) private repo: Repository<Race>) {}
  async findNearby(lat: number, lng: number, radiusKM: number, type?: string) {
    const qb = this.repo.createQueryBuilder('race').where(
      `
  ST_Distance_Sphere(
    race.location,
    ST_GeomFromText(:point, 4326)
  ) <= :radius
  `,
      { point: `POINT(${lng} ${lat})`, radius: radiusKM * 1000 },
    );
    if (type) qb.andWhere('race.type=:type', { type });
    return qb.getMany();
  }
}
