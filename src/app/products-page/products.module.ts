import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsContainerComponent } from './tabs-wrapper-container/tabs-container/tabs-container.component';

import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './products-components/products/product/product.component';



@NgModule({
  declarations: [TabsContainerComponent, ProductComponent],
  exports: [
    TabsContainerComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    ButtonModule,
    TableModule,
    HttpClientModule
  ]
})
export class ProductsModule {
}
