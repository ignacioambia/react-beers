export default interface BeerInfo {
  id: number;
  image: string;
  name: string;
  price: string;
  rating: { average: number; reviews: number };
}
