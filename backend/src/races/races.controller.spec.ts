import { Test } from '@nestjs/testing';
import { RacesController } from './races.controller';
import { RacesService } from './races.service';

describe('RacesController', () => {
  let controller: RacesController;

  beforeEach(async () => {
    const moduleRf = await Test.createTestingModule({
      controllers: [RacesController],
      providers: [
        {
          provide: RacesService,
          useValue: {
            findNearby: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = moduleRf.get(RacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
