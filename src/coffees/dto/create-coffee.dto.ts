import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  // @IsString decorator makes the property required
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors?: string[];
}
