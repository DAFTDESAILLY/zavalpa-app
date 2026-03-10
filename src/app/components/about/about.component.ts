import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CompanyInfo } from '../../models';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="about-page">
      <div class="container">

        <!-- Hero Photo -->
        <div class="hero-photo">
          <img src="assets/nosotros/nuestra empresa.webp" alt="Equipo Zavalpa" class="hero-img" />
        </div>

        <!-- Nuestra Empresa -->
        <div class="empresa-section">
          <h2 class="empresa-title">Nuestra Empresa</h2>
          <p class="empresa-desc">{{ companyInfo?.description }}</p>
        </div>

        <!-- Misión y Visión -->
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">
              <img src="assets/nosotros/mision.webp" alt="Misión" class="value-img" />
            </div>
            <h3>Misión</h3>
            <p>{{ companyInfo?.mission }}</p>
          </div>
          <div class="value-card">
            <div class="value-icon">
              <img src="assets/nosotros/vision.webp" alt="Visión" class="value-img" />
            </div>
            <h3>Visión</h3>
            <p>{{ companyInfo?.vision }}</p>
          </div>
        </div>

        <!-- Feature Cards -->
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <img src="assets/nosotros/mexicana.webp" alt="Empresa 100% Mexicana" class="feature-img" />
            </div>
            <h4>Empresa 100% Mexicana</h4>
            <p>Orgullosamente constituidos en la CDMX, dedicados a fortalecer el mercado nacional.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <img src="assets/nosotros/alcance integral.webp" alt="Alcance Integral" class="feature-img" />
            </div>
            <h4>Alcance Integral</h4>
            <p>Expertos en compraventa, importación, exportación y logística de bienes y servicios.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <img src="assets/nosotros/diversidad de industrias.webp" alt="Diversidad de Industrias" class="feature-img" />
            </div>
            <h4>Diversidad de Industrias</h4>
            <p>Soluciones especializadas en los sectores textil, calzado, oficina, papelería y tecnología.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <img src="assets/nosotros/atencion personalisada.webp" alt="Atención Personalizada" class="feature-img" />
            </div>
            <h4>Atención Personalizada</h4>
            <p>Nuestra misión es ofrecer el mejor servicio para ampliar nuestra experiencia en el mercado.</p>
          </div>
        </div>

        <div class="cta-section">
          <h2>¿Listo para trabajar juntos?</h2>
          <p>Contacta con nosotros y descubre cómo podemos ayudarte</p>
          <a routerLink="/contacto" class="btn btn-primary btn-lg">Contáctanos →</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-page {
      padding-top: 120px;
      padding-bottom: 4rem;
      min-height: 100vh;
    }

    /* Hero Photo */
    .hero-photo {
      width: 100%;
      max-width: 700px;
      max-height: 350px;
      margin: 0 auto 3rem;
      overflow: hidden;
      border-radius: var(--border-radius-lg);
    }

    .hero-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* Nuestra Empresa */
    .empresa-section {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 4rem;
    }

    .empresa-title {
      font-size: clamp(2rem, 4vw, 2.5rem);
      font-weight: 900;
      color: var(--color-text-primary);
      margin-bottom: 1.5rem;
    }

    .empresa-desc {
      font-size: var(--font-size-base);
      color: var(--color-text-secondary);
      line-height: 1.9;
    }

    /* Feature Cards 2x2 */
    .features-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
      margin-bottom: 4rem;
    }

    @media (min-width: 768px) {
      .features-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .feature-card {
      padding: 2.5rem 2rem;
      background: var(--color-bg-card);
      border-radius: var(--border-radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
      transition: all var(--transition-base);
    }

    .feature-card:hover {
      transform: translateY(-5px);
      border-color: var(--color-primary);
      box-shadow: 0 15px 30px rgba(19, 61, 101, 0.15);
    }

    .feature-icon {
      margin-bottom: 1.25rem;
    }

    .feature-img {
      width: 90px;
      height: 90px;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.15);
      transition: transform var(--transition-base);
    }

    .feature-card:hover .feature-img {
      transform: scale(1.08);
    }

    .feature-card h4 {
      font-size: var(--font-size-lg);
      font-weight: 700;
      color: var(--color-text-primary);
      margin-bottom: 0.75rem;
    }

    .feature-card p {
      color: var(--color-text-secondary);
      line-height: 1.6;
      font-size: var(--font-size-sm);
    }

    /* Misión y Visión */
    .values-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
      margin-bottom: 4rem;
    }

    @media (min-width: 768px) {
      .values-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .value-card {
      padding: 3rem;
      background: var(--color-bg-card);
      border-radius: var(--border-radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
      transition: all var(--transition-base);
    }

    .value-card:hover {
      transform: translateY(-8px);
      border-color: var(--color-primary);
      box-shadow: 0 20px 40px rgba(19, 61, 101, 0.2);
    }

    .value-icon {
      margin-bottom: 1.5rem;
    }

    .value-img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid var(--color-primary);
    }

    .value-card h3 {
      font-size: var(--font-size-2xl);
      margin-bottom: 1rem;
      color: var(--color-primary);
    }

    .value-card p {
      color: var(--color-text-secondary);
      line-height: 1.7;
    }

    .cta-section {
      text-align: center;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, rgba(19, 61, 101, 0.1), rgba(107, 108, 112, 0.1));
      border-radius: var(--border-radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .cta-section h2 {
      font-size: var(--font-size-3xl);
      font-weight: 800;
      margin-bottom: 1rem;
    }

    .cta-section p {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      margin-bottom: 2rem;
    }
  `]
})
export class AboutComponent implements OnInit {
  companyInfo: CompanyInfo | null = null;

  constructor(private companyService: CompanyService, private seo: SeoService) { }

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Nosotros',
      description: 'Conoce a Zavalpa Comercializadora, empresa 100% mexicana dedicada a la compraventa, importación, exportación y logística de bienes y servicios.',
      keywords: 'zavalpa, nosotros, empresa mexicana, misión, visión, comercio exterior, CDMX',
      canonicalUrl: '/nosotros'
    });

    this.companyService.getCompanyInfo().subscribe(info => {
      this.companyInfo = info;
    });
  }
}
