import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModuleComponent } from "./router/router.module";
import { ProductListModule } from "./product-list/product-list.module";
import { RouterComponent } from "./router/router.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar/navbar.component";
import { MatButtonModule } from "@angular/material/button";
import { CreateFormDialogComponent } from "./components/create-form-dialog/create-form-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatSelectModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RouterComponent,
    NavbarComponent,
    CreateFormDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModuleComponent,
    ProductListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [],
  entryComponents: [CreateFormDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
