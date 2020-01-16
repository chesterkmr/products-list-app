import { Injectable } from "@angular/core";
import { Category } from "./interfaces/category";
import { request } from "../utils/request";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  constructor() {}

  async getCategories(): Promise<Category[]> {
    const result = await request.get<Category[]>("/categories");
    return result.data;
  }
}
