import { Component, OnInit } from "@angular/core";
import { ProductListService } from "src/app/product-list/product-list.service";
import { CreateFormDialogService } from "../../create-form-dialog/create-form-dialog.service";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  constructor(
    private readonly productListService: ProductListService,
    private readonly dialogService: CreateFormDialogService
  ) {}

  handleAddProductClick() {
    this.dialogService.openDialog();
  }
}
