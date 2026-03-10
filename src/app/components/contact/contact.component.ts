import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CompanyInfo } from '../../models';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact-page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">Contáctanos</h1>
          <p class="page-description">Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto</p>
        </div>

        <div class="contact-content">
          <!-- Contact Information -->
          <div class="contact-info">
            <div class="contact-logo-wrapper">
              <img src="assets/logo-zavalpa.svg" alt="Zavalpa Logo" class="contact-logo" />
            </div>
            <h2>Información de Contacto</h2>
            
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">📧</div>
                <div class="info-details">
                  <h3>Email</h3>
                  <p>{{ companyInfo?.contact?.email }}</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">📞</div>
                <div class="info-details">
                  <h3>Teléfono</h3>
                  <p>{{ companyInfo?.contact?.phone }}</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">📍</div>
                <div class="info-details">
                  <h3>Dirección</h3>
                  <p>{{ companyInfo?.contact?.address }}</p>
                  <p>{{ companyInfo?.contact?.city }}, {{ companyInfo?.contact?.state }}</p>
                  @if (companyInfo?.contact?.postalCode) {
                    <p>C.P. {{ companyInfo?.contact?.postalCode }}</p>
                  }
                  <p>{{ companyInfo?.contact?.country }}</p>
                </div>
              </div>
            </div>

            <div class="business-hours">
              <h3>Horario de Atención</h3>
              <div class="hours-list">
                <div class="hours-item">
                  <span class="hours-day">Lunes a Viernes</span>
                  <span class="hours-time">9:00 AM - 6:00 PM</span>
                </div>
                <div class="hours-item">
                  <span class="hours-day">Sábado</span>
                  <span class="hours-time">9:00 AM - 2:00 PM</span>
                </div>
                <div class="hours-item closed">
                  <span class="hours-day">Domingo</span>
                  <span class="hours-time">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <h2>Envíanos un Mensaje</h2>
            
            @if (formSubmitted) {
              <div class="success-message">
                <div class="success-icon">✓</div>
                <h3>¡Mensaje Enviado!</h3>
                <p>Gracias por contactarnos. Te responderemos pronto.</p>
              </div>
            } @else {
              <form class="contact-form" (ngSubmit)="submitForm()">
                <div class="form-group">
                  <label for="name">Nombre Completo *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    [(ngModel)]="formData.name"
                    required
                    placeholder="Tu nombre">
                </div>

                <div class="form-group">
                  <label for="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    [(ngModel)]="formData.email"
                    required
                    placeholder="tu@email.com">
                </div>

                <div class="form-group">
                  <label for="phone">Teléfono</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    [(ngModel)]="formData.phone"
                    placeholder="+52 123 456 7890">
                </div>

                <div class="form-group">
                  <label for="subject">Asunto *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    [(ngModel)]="formData.subject"
                    required
                    placeholder="¿En qué podemos ayudarte?">
                </div>

                <div class="form-group">
                  <label for="message">Mensaje *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    [(ngModel)]="formData.message"
                    required
                    rows="5"
                    placeholder="Escribe tu mensaje aquí..."></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-lg">
                  Enviar Mensaje →
                </button>
                
                <div class="divider">
                    <span>O contáctanos directamente</span>
                </div>

                <button type="button" class="btn btn-whatsapp btn-lg" (click)="sendWhatsApp()">
                  <span class="whatsapp-icon">📱</span> Enviar WhatsApp
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-page {
      padding-top: 120px;
      padding-bottom: 4rem;
      min-height: 100vh;
    }

    .page-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .contact-logo-wrapper {
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .contact-logo {
      height: 70px;
      width: auto;
      object-fit: contain;
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

    .contact-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 3rem;
    }

    @media (min-width: 1024px) {
      .contact-content {
        grid-template-columns: 1fr 1.5fr;
      }
    }

    .contact-info {
      background: var(--color-bg-card);
      padding: 2.5rem;
      border-radius: var(--border-radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .contact-info h2 {
      font-size: var(--font-size-2xl);
      margin-bottom: 2rem;
    }

    .info-items {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-bottom: 2.5rem;
    }

    .info-item {
      display: flex;
      gap: 1.5rem;
    }

    .info-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .info-details h3 {
      font-size: var(--font-size-lg);
      margin-bottom: 0.5rem;
      color: var(--color-primary);
    }

    .info-details p {
      color: var(--color-text-secondary);
      margin-bottom: 0.25rem;
    }

    .business-hours {
      margin-top: 2.5rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .business-hours h3 {
      font-size: var(--font-size-lg);
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--color-primary);
    }

    .hours-list {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    .hours-item {
      display: flex;
      gap: 0.4rem;
    }

    .hours-day {
      color: var(--color-text-secondary);
    }

    .hours-day::after {
      content: ':';
    }

    .hours-time {
      color: var(--color-text-secondary);
    }

    .hours-item.closed .hours-time {
      color: var(--color-text-secondary);
    }

    .contact-form-wrapper {
      background: var(--color-bg-card);
      padding: 2.5rem;
      border-radius: var(--border-radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .contact-form-wrapper h2 {
      font-size: var(--font-size-2xl);
      margin-bottom: 2rem;
    }

    .success-message {
      text-align: center;
      padding: 3rem;
    }

    .success-icon {
      font-size: 4rem;
      color: var(--color-primary);
      margin-bottom: 1rem;
    }

    .success-message h3 {
      font-size: var(--font-size-2xl);
      margin-bottom: 1rem;
      color: var(--color-primary);
    }

    .success-message p {
      color: var(--color-text-secondary);
      font-size: var(--font-size-lg);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-weight: 600;
      color: var(--color-text-primary);
      font-size: var(--font-size-sm);
    }

    .form-group input,
    .form-group textarea {
      padding: 0.875rem 1rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--border-radius-md);
      color: var(--color-text-primary);
      font-family: inherit;
      font-size: var(--font-size-base);
      transition: all var(--transition-base);
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--color-primary);
      background: rgba(255, 255, 255, 0.08);
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
      color: var(--color-text-muted);
    }

    .btn-lg {
      width: 100%;
      justify-content: center;
      margin-top: 1rem;
    }

    .divider {
      display: flex;
      align-items: center;
      text-align: center;
      margin: 1rem 0;
      color: var(--color-text-muted);
    }

    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .divider span {
      padding: 0 1rem;
      font-size: 0.9rem;
    }
    
    .btn-whatsapp {
      background-color: #25D366;
      color: white;
      border: none;
      font-weight: 600;
      border-radius: var(--border-radius-md);
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      cursor: pointer;
      transition: all var(--transition-fast);
    }
    
    .btn-whatsapp:hover {
      background-color: #128C7E;
      transform: translateY(-2px);
    }
    
    .whatsapp-icon {
      font-size: 1.25rem;
    }
  `]
})
export class ContactComponent implements OnInit {
  companyInfo: CompanyInfo | null = null;
  formSubmitted = false;
  private route = inject(ActivatedRoute);

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  constructor(
    private companyService: CompanyService,
    private seo: SeoService
  ) { }

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Contacto',
      description: 'Contáctanos para cotizaciones, información de productos y servicios. Envíanos un mensaje o escríbenos por WhatsApp.',
      keywords: 'contacto zavalpa, cotización, whatsapp, email, teléfono, dirección, CDMX',
      canonicalUrl: '/contacto'
    });

    this.companyService.getCompanyInfo().subscribe(info => {
      this.companyInfo = info;
    });

    this.route.queryParams.subscribe(params => {
      if (params['product']) {
        const product = params['product'];
        this.formData.subject = `Cotización: ${product}`;
        this.formData.message = `Hola, estoy interesado en cotizar el producto: ${product}. Me gustaría recibir más información sobre precios y disponibilidad.`;
      }
    });
  }

  submitForm() {
    this.formSubmitted = true;
    setTimeout(() => {
      this.formSubmitted = false;
      this.resetForm();
    }, 5000);
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }

  sendWhatsApp(productName?: string) {
    const phoneNumber = '525572605209'; // Derived from 5572605209
    let message = 'Hola, me gustaría solicitar información.';
    if (this.formData.subject) {
      message = `Hola, me interesa: ${this.formData.subject}. ${this.formData.message}`;
    }
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
