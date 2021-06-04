import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data;
  
  cols: any[] = [
    { field: 'vendor', header: 'Vendor' },
    { field: 'name', header: 'Name'},
    { field: 'price', header: 'Price'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
