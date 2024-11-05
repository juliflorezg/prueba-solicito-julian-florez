import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppService {
  private readonly apiEpisodesBaseUrl: string;
  private readonly apiLocationsBaseUrl: string;
  private readonly apiCharactersBaseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.apiEpisodesBaseUrl = this.configService.get<string>("API_EPISODES_BASE_URL")
    this.apiLocationsBaseUrl = this.configService.get<string>("API_LOCATIONS_BASE_URL")
    this.apiCharactersBaseUrl = this.configService.get<string>("API_CHARACTERS_BASE_URL")
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

  }

  async getLocations(page: string): Promise<any> {

    console.log({ api_url: this.apiLocationsBaseUrl })

    try {
      const res = await lastValueFrom(
        this.httpService.get(`${this.apiLocationsBaseUrl}?page=${page}`),
      );

      return res.data;
    } catch (error) {
      throw new Error("Failed to fetch Rick & Morty Locations")
    }

  }

  async getCharacters(page: string): Promise<any> {

    console.log({ api_url: this.apiLocationsBaseUrl })

    try {
      const res = await lastValueFrom(
        this.httpService.get(`${this.apiCharactersBaseUrl}?page=${page}`),
      );

      return res.data;
    } catch (error) {
      throw new Error("Failed to fetch Rick & Morty Characters")
    }

  }
}
