import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("v1/api-rick-morty")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("episodes")
  async getEpisodes(@Query("page") page: string) {
    if (!page) {
      page = "1"
    }

    console.log({ page })

    return this.appService.getEpisodes(page);
  }
}
