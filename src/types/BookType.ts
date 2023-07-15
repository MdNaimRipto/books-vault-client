export interface IBooks {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  description: string;
  price: number;
  totalSale: number;
  inStock: boolean;
  rating: number;
  allRating: [number];
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
