import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { routes } from './routing';
import { HttpService } from './http.service';
import { UtilityService } from './utility.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TasksRecycleBinComponent } from './tasks/tasks-recycle-bin/tasks-recycle-bin.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { MarketComponent } from './market/market.component';
import { ProductsManagmentComponent } from './market/products-managment/products-managment.component';
import { ProductComponent } from './market/products-managment/product/product.component';
import { ProductsComponent } from './market/products/products.component';
import { CartComponent } from './market/cart/cart.component';

@NgModule({
    declarations: [
        AppComponent,
        TasksComponent,
        LoginComponent,
        SignupComponent,
        NavbarComponent,
        HomeComponent,
        TasksRecycleBinComponent,
        TaskEditComponent,
        MarketComponent,
        ProductsManagmentComponent,
        ProductComponent,
        ProductsComponent,
        CartComponent,
      
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        HttpService,
        UtilityService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
