import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePonyDto } from './dto/create-pony.dto';
import { UpdatePonyDto } from './dto/update-pony.dto';
import { Pony } from './entities/pony.entity';

@Injectable()
export class PoniesService {
  private readonly ponies: Pony[] = [
    { id: 0, name: 'Sugar' },
    { id: 1, name: 'Baby' },
    { id: 2, name: 'Ruth' },
    { id: 3, name: 'Patty' },
  ];
  private idIndex = this.ponies.length - 1;

  create(createPonyDto: CreatePonyDto): Pony {
    const newPony = { id: ++this.idIndex, ...createPonyDto };
    this.ponies.push(newPony);
    return newPony;
  }

  findAll(): Pony[] {
    return this.ponies;
  }

  findOne(id: number): Pony {
    const foundPony = this.ponies.find((pony) => pony.id === id);
    if (!foundPony) throw new NotFoundException();
    return foundPony;
  }

  update(id: number, updatePonyDto: UpdatePonyDto): Pony {
    const index = this.ponies.findIndex((pony) => pony.id === id);
    if (index < 0) throw new NotFoundException();
    const updatedPony = { ...this.ponies[index], ...updatePonyDto };
    this.ponies[index] = updatedPony;
    return updatedPony;
  }

  remove(id: number): Pony {
    const index = this.ponies.findIndex((pony) => pony.id === id);
    if (index < 0) throw new NotFoundException();
    const deletedPony = this.ponies[index];
    this.ponies.splice(index, 1);
    return deletedPony;
  }
}
