import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-stationery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './stationery.component.html',
  styleUrls: ['./stationery.component.css']
})
export class StationeryComponent implements OnInit {
  stationeryItems: any[] = [];
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProductsByCategory('Papelería').subscribe(data => {
      this.stationeryItems = data;
    });
  }
}
