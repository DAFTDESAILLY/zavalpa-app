import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {
  bags: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsByCategory('Bolsas y Carteras').subscribe(data => {
      this.bags = data;
    });
  }
}