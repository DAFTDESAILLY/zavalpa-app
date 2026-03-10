import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
    title: string;
    description: string;
    keywords?: string;
    ogType?: string;
    ogImage?: string;
    canonicalUrl?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    private readonly siteName = 'Zavalpa Comercializadora';
    private readonly defaultImage = 'assets/logo-zavalpa.svg';
    private readonly baseUrl = 'https://zavalpa.com';

    constructor(
        private meta: Meta,
        private titleService: Title
    ) { }

    updateSeo(config: SeoConfig): void {
        const fullTitle = `${config.title} | ${this.siteName}`;

        // Title
        this.titleService.setTitle(fullTitle);

        // Standard meta
        this.meta.updateTag({ name: 'description', content: config.description });
        if (config.keywords) {
            this.meta.updateTag({ name: 'keywords', content: config.keywords });
        }

        // Open Graph
        this.meta.updateTag({ property: 'og:title', content: fullTitle });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:type', content: config.ogType || 'website' });
        this.meta.updateTag({ property: 'og:image', content: config.ogImage || this.defaultImage });
        this.meta.updateTag({ property: 'og:site_name', content: this.siteName });

        if (config.canonicalUrl) {
            this.meta.updateTag({ property: 'og:url', content: `${this.baseUrl}${config.canonicalUrl}` });
        }

        // Twitter Card
        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
        this.meta.updateTag({ name: 'twitter:description', content: config.description });
        this.meta.updateTag({ name: 'twitter:image', content: config.ogImage || this.defaultImage });
    }
}
