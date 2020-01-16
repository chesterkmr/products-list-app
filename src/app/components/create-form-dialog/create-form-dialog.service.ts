import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateFormDialogComponent } from './create-form-dialog.component';
import { ProductListService } from 'src/app/product-list/product-list.service';

const MODAL_WIDTH = '480px';

@Injectable({
  providedIn: 'root'
})
export class CreateFormDialogService {
  name: string;
  category: string;
  constructor(private readonly dialog: MatDialog) { }

  openDialog() {
    const ref = this.dialog.open(CreateFormDialogComponent, {
      width: MODAL_WIDTH,
      data: {
        name: this.name,
        category: this.category
      }
    })
  }
}
