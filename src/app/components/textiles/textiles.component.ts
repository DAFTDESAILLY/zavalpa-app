import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-textiles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './textiles.component.html',
  styleUrls: ['./textiles.component.css']
})
export class TextilesComponent implements OnInit {
  categories: any[] = [];
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProductsByCategory('Textiles').subscribe(data => {
      this.categories = data;
    });
  }
}
