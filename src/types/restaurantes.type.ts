export interface Restaurants {
  id: number;
  name: string;
  location: string;
  rating: number;
  availability: boolean;
  comments: string[];
  description: string;
  image: string; // estilo elegante, luz cálida
  category: string;
  average_price: number;
  capacity:number;
}
