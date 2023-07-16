export interface ICommonBtn {
  title: string;
}

export interface IRating {
  rating: number;
}

export interface IGenreListItems {
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
}

export interface IPublicationYearItems {
  selectedYear: string;
  setSelectedYear: (genre: string) => void;
}

export type IReview = {
  reviewerName: string;
  review: string;
};
