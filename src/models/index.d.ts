import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EpisodeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SeasonMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MovieMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Episode {
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly duration: string;
  readonly plot?: string | null;
  readonly video: string;
  readonly seasonID: string;
  readonly Season?: Season | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Episode, EpisodeMetaData>);
  static copyOf(source: Episode, mutator: (draft: MutableModel<Episode, EpisodeMetaData>) => MutableModel<Episode, EpisodeMetaData> | void): Episode;
}

export declare class Season {
  readonly id: string;
  readonly name: string;
  readonly Episodes?: (Episode | null)[] | null;
  readonly movieID: string;
  readonly Movie?: Movie | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Season, SeasonMetaData>);
  static copyOf(source: Season, mutator: (draft: MutableModel<Season, SeasonMetaData>) => MutableModel<Season, SeasonMetaData> | void): Season;
}

export declare class Movie {
  readonly id: string;
  readonly titile: string;
  readonly year?: number | null;
  readonly numberOfSeasons?: number | null;
  readonly plot?: string | null;
  readonly cast?: string | null;
  readonly creator?: string | null;
  readonly poster: string;
  readonly categoryID: string;
  readonly Seasons?: (Season | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Movie, MovieMetaData>);
  static copyOf(source: Movie, mutator: (draft: MutableModel<Movie, MovieMetaData>) => MutableModel<Movie, MovieMetaData> | void): Movie;
}

export declare class Category {
  readonly id: string;
  readonly title: string;
  readonly Movies?: (Movie | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}