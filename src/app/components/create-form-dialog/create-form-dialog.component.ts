import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { ProductListService } from "src/app/product-list/product-list.service";
import { Category } from "src/app/categories/interfaces/category";
import { CategoriesService } from "src/app/categories/categories.service";

interface ModalData {
  name: string;
  category: string;
}

@Component({
  selector: "app-create-form-dialog",
  templateUrl: "./create-form-dialog.component.html",
  styleUrls: ["./create-form-dialog.component.css"]
})
export class CreateFormDialogComponent implements OnInit {
  categories: Category[];

  constructor(
    public dialog: MatDialog,
    private readonly dialogRef: MatDialogRef<CreateFormDialogComponent>,
    private readonly productsService: ProductListService,
    private readonly categoryService: CategoriesService,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}

  handleSubmit() {
    this.productsService.addProduct(this.data);
    this.closeDialog();
  }

  handleCancelClick() {
    this.closeDialog();
  }

  closeDialog = () => this.dialogRef.close();

  async ngOnInit() {
    this.categories = await this.categoryService.getCategories();
  }
}
