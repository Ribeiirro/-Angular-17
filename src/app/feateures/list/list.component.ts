import { Component, inject } from '@angular/core';

import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/intenterfaces/product.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: Product[] = [];

  productServices = inject(ProductsService);

  ngOnInit() {
    this.productServices.getAll().subscribe((products) => {
      this.products = products;
    });
  }
}
