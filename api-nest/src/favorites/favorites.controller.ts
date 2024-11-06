import { Controller, Post, Body, Get } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Controller('v1/favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) { }


  @Post("save-all")
  async saveFavorites(@Body() favorites: CreateFavoriteDto[]) {
    return this.favoritesService.saveFavorites(favorites);
  }
}
