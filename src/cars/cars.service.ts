import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UUID, randomUUID as uuid } from 'node:crypto';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCardDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: UUID) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car whit id '${id} not found`);
    return car;
  }

  create(createCar: CreateCarDto) {
    const car: Car = { ...createCar, id: uuid() };
    this.cars.push(car);
    return car;
  }

  update(id: UUID, updateCarDto: UpdateCardDto) {
    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(`Card id is not valid inside body`);

    let carDB = this.findOneById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }

      return car;
    });
    return carDB;
  }

  delete(id: UUID) {
    const cardDB = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
