import { IFilm } from "entities/films";

export const FILMS_DISPLAY_INFO: Array<keyof IFilm> = [
  "created",
  "director",
  "edited",
  "episodeId",
  "openingCrawl",
  "producer",
  "releaseDate",
  "title",
];
