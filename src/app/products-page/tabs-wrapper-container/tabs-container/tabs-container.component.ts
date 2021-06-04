import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../providers/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent implements OnInit {
  activeIndex: number;
  
  products;
  //: Product[] = [];
  cols: any[] = [
    { field: 'vendor', header: 'Vendor' },
    { field: 'name', header: 'Name'},
    { field: 'price', header: 'Price'},
  ];
  phones: Product[];
  cars: Product[];
  laptops: Product[];
  
  titlesMap = {
    "phones":"",
    "cars":"",
    "laptops":""
  };
  nodata: boolean;
  
  constructor(private productsService:ProductsService) { }
  
  ngOnInit(): void {
    
    this.productsService.getAllProducts().subscribe( data => { this.products = data;
      this.prepareDataForRender(this.products);
    });
  }
  
  private prepareDataForRender(products: any) {
    
    if(!Object.keys(products).length){
      this.nodata = true;
      return;
    }
  
    Object.keys(products).forEach( key => {
      
      this.titlesMap[products[key].title.toLowerCase()] = products[key].title;
      
      this.phones = products[0].items ;
      this.cars = products[1].items;
      this.laptops = products[2].items;
    });
    
  }
}
