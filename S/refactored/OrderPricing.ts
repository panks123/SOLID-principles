import { Product } from "../Order";

export class OrderPricing {
    calculatePricing(products: Product[]): number {
      return products.reduce((total, product) => total + product.price, 0);
    }
}