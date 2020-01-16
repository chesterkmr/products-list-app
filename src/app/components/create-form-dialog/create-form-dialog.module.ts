import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateFormDialogComponent } from "./create-form-dialog.component";
import { CreateFormDialogService } from "./create-form-dialog.service";
import { ProductListService } from "src/app/product-list/product-list.service";
import { CategoriesService } from "src/app/categories/categories.service";

@NgModule({
  declarations: [CreateFormDialogComponent],
  providers: [CreateFormDialogService, ProductListService, CategoriesService],
  imports: [CommonModule],
  exports: [CreateFormDialogService]
})
export class CreateFormDialogModule {}
