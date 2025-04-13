import { Module } from '@nestjs/common';
import { VehiclesController } from './vehicles/vehicles.controller';

@Module({
  imports: [],
  controllers: [VehiclesController],
})
export class AppModule { }