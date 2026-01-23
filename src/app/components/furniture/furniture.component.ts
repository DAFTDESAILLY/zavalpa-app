import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
  furnitureList: any[] = [];
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProductsByCategory('Muebles de Oficina').subscribe(data => {
      this.furnitureList = data;
    });
  }
}
