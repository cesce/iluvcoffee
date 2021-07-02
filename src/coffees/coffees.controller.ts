import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'return all coffees';
  }

  @Get('flavors')
  findAllFlavors() {
    return 'return all flavors';
  }
}
