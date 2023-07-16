export interface IBooks {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  publicationYear: string;
  description: string;
  price: number;
  totalSale: number;
  inStock: boolean;
  rating: number;
  quantity: number;
  reviews: [
    {
      reviewerName: string;
      review: string;
    },
  ];
  img: string;
  sellerID: string;
}

export interface IBookCard {
  _id: string;
  genre: string;
  img: string;
  title: string;
  publicationDate: string;
  author: string;
}

export interface IBookCardProps {
  book: IBookCard;
}

export interface IBooksFilterParams {
  searchTerm?: string;
  selectedYear?: string;
  selectedGenre?: string;
}
