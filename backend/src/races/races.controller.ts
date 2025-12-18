import { Controller, Get, Query } from '@nestjs/common';
import { RacesService } from './races.service';

@Controller('races')
export class RacesController {
  constructor(private readonly racesService: RacesService) {}

  @Get('nearby')
  async nearby(
    @Query('lat') lat: string,
    @Query('lng') lng: string,
    @Query('radiusKm') radiusKm: string,
    @Query('type') type?: string,
  ) {
    return this.racesService.findNearby(
      Number(lat),
      Number(lng),
      Number(radiusKm ?? 20),
      type,
    );
  }
}
