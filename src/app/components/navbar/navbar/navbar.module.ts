import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ProductListService } from 'src/app/product-list/product-list.service';
import { CreateFormDialogComponent } from '../../create-form-dialog/create-form-dialog.component';
import { CreateFormDialogService } from '../../create-form-dialog/create-form-dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateFormDialogModule } from '../../create-form-dialog/create-form-dialog.module';



@NgModule({
  declarations: [NavbarComponent, CreateFormDialogComponent],
  providers: [ProductListService],
  imports: [
    CommonModule,
    MatDialogModule,
    CreateFormDialogModule,
  ],
  entryComponents: [CreateFormDialogComponent]
})
export class NavbarModule { }
