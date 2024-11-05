import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppService {
  private readonly apiEpisodesBaseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configServie: ConfigService
  ) {
    this.apiEpisodesBaseUrl = this.configServie.get<string>("API_EPISODES_BASE_URL")
  }

  async getEpisodes(page: string): Promise<any> {

    console.log({ api_url: this.apiEpisodesBaseUrl })

    try {
      const res = await lastValueFrom(
        this.httpService.get(`${this.apiEpisodesBaseUrl}?page=${page}`),
      );

      return res.data;
    } catch (error) {
      throw new Error("Failed to fetch Rick & Morty Episodes")
    }

    // return `get page ${page} for rick & morty episodes`;
  }
}
