import { Module } from '@nestjs/common';
import { RacesService } from './races.service';
import { RacesController } from './races.controller';
import { Race } from './race.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [RacesService],
  controllers: [RacesController],
  imports: [TypeOrmModule.forFeature([Race])],
})
export class RacesModule {}
