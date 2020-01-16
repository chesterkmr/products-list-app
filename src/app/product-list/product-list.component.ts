import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ProductListService } from "./product-list.service";
import { Product } from "./product/product";

interface InstanceProduct extends Omit<Product, "id"> {
  id?: string;
  isSaving?: boolean;
}

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductListComponent implements OnInit {
  products: InstanceProduct[] = [];
  constructor(private readonly productListService: ProductListService) {}

  updater = (product: Product) => {
    this.products.push(this._buildInstanceProduct(product, false));
  };

  private _buildInstanceProduct(
    product: Product,
    state: boolean
  ): InstanceProduct {
    return {
      isSaving: state,
      ...product
    };
  }

  async ngOnInit() {
    this.productListService.subscribe(this.updater);
    this.products = await this.productListService.getProducts();
  }
}
