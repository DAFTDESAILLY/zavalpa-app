import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CompanyInfo } from '../../models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="about-page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">Sobre Nosotros</h1>
          <p class="page-description">Conoce más sobre nuestra empresa y nuestros valores</p>
        </div>

        <div class="about-content">
          <div class="about-section">
            <div class="section-icon">🏢</div>
            <h2>Nuestra Empresa</h2>
            <p>{{ companyInfo?.description }}</p>
          </div>

          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">🎯</div>
              <h3>Misión</h3>
              <p>{{ companyInfo?.mission }}</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🚀</div>
              <h3>Visión</h3>
              <p>{{ companyInfo?.vision }}</p>
            </div>
          </div>

          <div class="features-section">
            <h2>¿Por qué elegirnos?</h2>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">🏛️</div>
                <h4>Empresa 100% Mexicana</h4>
                <p>Orgullosamente constituidos en la CDMX, dedicados a fortalecer el mercado nacional.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🌐</div>
                <h4>Alcance Integral</h4>
                <p>Expertos en compraventa, importación, exportación y logística de bienes y servicios.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🏭</div>
                <h4>Diversidad de Industrias</h4>
                <p>Soluciones especializadas en los sectores textil, calzado, oficina, papelería y tecnología.</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">👥</div>
                <h4>Atención Personalizada</h4>
                <p>Nuestra misión es ofrecer el mejor servicio para ampliar nuestra experiencia en el mercado.</p>
              </div>
            </div>
          </div>

          <div class="cta-section">
            <h2>¿Listo para trabajar juntos?</h2>
            <p>Contacta con nosotros y descubre cómo podemos ayudarte</p>
            <a routerLink="/contacto" class="btn btn-primary btn-lg">Contáctanos →</a>
          </div>
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

    .page-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .page-title {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 900;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .page-description {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
    }

    .about-section {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 4rem;
      padding: 3rem;
      background: var(--color-bg-card);
      border-radius: var(--border-radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .section-icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }

    .about-section h2 {
      font-size: var(--font-size-3xl);
      margin-bottom: 1.5rem;
    }

    .about-section p {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      line-height: 1.8;
    }

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
      font-size: 3rem;
      margin-bottom: 1.5rem;
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

    .features-section {
      margin-bottom: 4rem;
    }

    .features-section h2 {
      text-align: center;
      font-size: var(--font-size-3xl);
      margin-bottom: 3rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }

    @media (min-width: 768px) {
      .features-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .feature-card {
      padding: 2rem;
      background: var(--color-bg-card);
      border-radius: var(--border-radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all var(--transition-base);
    }

    .feature-card:hover {
      transform: translateY(-4px);
      border-color: var(--color-secondary);
    }

    .feature-icon {
      font-size: 2rem;
      color: var(--color-primary);
      margin-bottom: 1rem;
    }

    .feature-card h4 {
      font-size: var(--font-size-xl);
      margin-bottom: 0.75rem;
    }

    .feature-card p {
      color: var(--color-text-secondary);
      line-height: 1.6;
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

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companyService.getCompanyInfo().subscribe(info => {
      this.companyInfo = info;
    });
  }
}
