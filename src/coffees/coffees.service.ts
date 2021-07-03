import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeesService {
  // We will use the array as datasource, mocking the real database
  private coffees = [];
}
