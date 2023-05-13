import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: uuid(),
    name: "You Can WIN",
    category: "Shiv Khera",
    price: "5000",
    star: "non-fiction",
    discount: 20,
    isAvailable: true,
    
  }
];
