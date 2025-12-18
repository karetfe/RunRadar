import { Test } from '@nestjs/testing';
import { RacesService } from './races.service';
import { Race } from './race.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('RacesService', () => {
  let service: RacesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        RacesService,
        {
          provide: getRepositoryToken(Race),
          useValue: {} as Partial<Repository<Race>>,
        },
      ],
    }).compile();

    service = moduleRef.get(RacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
