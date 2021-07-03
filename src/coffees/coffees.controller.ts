import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'return all coffees';
  }

  @Get(':id')
  findOne(@Param() params) {
    return `return one coffee by id: ${params.id}`;
  }

  @Get('flavors')
  findAllFlavors() {
    return 'return all flavors';
  }

  @Get('flavors/:id')
  findOneFlavor(@Param('id') id: string) {
    return `return one flavor by id: ${id}`;
  }

  @Get(':coffeeId/flavors/:flavorId/:color')
  findFlavorForCoffee(@Param() params) {
    console.log('v1');
    return `coffee: ${params.coffeeId} - flavor: ${params.flavorId} - Color: ${params.color}`;
  }

  // This will never be executed because first is matched above route
  // Is shown here as an example
  @Get(':coffeeId/flavors/:flavorId/:color')
  findFlavorForCoffeeV2(
    @Param('coffeeId') coffeeId: string,
    @Param('flavorId') flavorId: string,
    @Param('color') color: string,
  ) {
    console.log('v1');
    return `coffee: ${coffeeId} - flavor: ${flavorId} - Color: ${color}`;
  }

  @Post()
  createCoffee(@Body() body) {
    console.log(body);
    return body;
  }

  @Post(':coffeeId/flavors/:flavorId')
  createFlavorColor(@Body('name') body) {
    // body only contains the value of filed 'name'
    console.log(body);
    return body;
  }
}
