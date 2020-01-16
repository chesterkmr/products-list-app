import { Component, Input } from "@angular/core";
import { Product } from "./product";
import { ProductListService } from "../product-list.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent {
  @Input() product: Product;
  @Input() isLoading: boolean;
  constructor(private readonly productListSerive: ProductListService) {}
}
