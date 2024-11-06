// src/favorites/favorites.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) { }


  async saveFavorites(favorites: CreateFavoriteDto[]) {
    return await this.prisma.favorite.createMany({
      data: favorites,
      skipDuplicates: true, // Optional: avoids duplicate entries
    });
  }
}
