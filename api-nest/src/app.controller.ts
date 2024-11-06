import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("v1/api-rick-morty")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("episodes")
  async getEpisodes(@Query("page") page: string = "1") {
    console.log({ page })

    return this.appService.getEpisodes(page);
  }

  @Get("locations")
  async getLocations(@Query("page") page: string = "1") {
    console.log({ page })

    return this.appService.getLocations(page);
  }

  @Get("characters")
  async getCharacters(@Query("page") page: string = "1") {
    console.log({ page })

    return this.appService.getCharacters(page);
  }

  @Get("character/:id")
  async getCharacter(@Param("id") id: string = "1") {
    console.log({ id })

    return this.appService.getSingleCharacter(id);
  }
}
