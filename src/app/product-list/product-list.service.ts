import { Injectable } from "@angular/core";
import { Product } from "./product/product";
import { ProductDTO } from "./dto/product.dto";
import { delay } from "../utils/delay";
import { request } from "../utils/request";

type SubscriberFn = (products: Product) => void;

@Injectable({
  providedIn: "root"
})
export class ProductListService {
  subscribers: SubscriberFn[] = [];

  addProduct(product: ProductDTO) {
    request
      .post("/products", product)
      .then(r => this.notifySubscribers(r.data));
  }

  subscribe(listener: SubscriberFn) {
    this.subscribers.push(listener);
  }

  unsubscribe(listener: SubscriberFn) {
    this.subscribers = this.subscribers.filter(l => l == listener);
  }

  notifySubscribers(product: Product) {
    this.subscribers.forEach(s => s(product));
  }

  async getProducts(): Promise<Product[]> {
    const result = await request.get<Product[]>("/products");
    return result.data;
  }
}
