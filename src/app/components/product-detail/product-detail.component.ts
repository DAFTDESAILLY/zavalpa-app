import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    product: Product | undefined;
    isLoading = true;

    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private productService = inject(ProductService);

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const slug = params.get('slug');
            if (slug) {
                this.loadProduct(slug);
            } else {
                this.isLoading = false;
                // Handle error or redirect
            }
        });
    }

    loadProduct(slug: string) {
        this.isLoading = true;
        this.productService.getProductBySlug(slug).subscribe(product => {
            this.product = product;
            this.isLoading = false;
        });
    }

    getQuoteLink(product: Product): any[] {
        return ['/contacto'];
    }

    getQuoteParams(product: Product): any {
        return { product: product.name };
    }

    goBack() {
        window.history.back();
    }
}
