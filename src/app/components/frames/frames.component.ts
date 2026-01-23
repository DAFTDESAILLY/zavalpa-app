import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-frames',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.css']
})
export class FramesComponent implements OnInit {
  frames: any[] = [];
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProductsByCategory('Armazones').subscribe(data => {
      this.frames = data;
    });
  }
}
