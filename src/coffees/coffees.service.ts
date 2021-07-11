import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  // We will use the array as datasource, mocking the real database
  private coffee: Coffee[] = [];
}
