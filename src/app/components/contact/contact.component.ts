import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CompanyInfo } from '../../models';

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

            <!-- Map Section -->
            <div class="map-section">
              <h3>Ubicación</h3>
              <div class="map-container">
                <iframe 
                  [src]="safeMapUrl" 
                  width="100%" 
                  height="300" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            <div class="business-hours">
              <h3>Horario de Atención</h3>
              <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p>Sábado: 9:00 AM - 2:00 PM</p>
              <p>Domingo: Cerrado</p>
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

    .map-section {
      margin-bottom: 2.5rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .map-section h3 {
      font-size: var(--font-size-lg);
      margin-bottom: 1rem;
      color: var(--color-primary);
    }

    .map-container {
      border-radius: var(--border-radius-md);
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .map-container iframe {
      display: block;
      width: 100%;
      height: 300px;
    }

    .business-hours {
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .business-hours h3 {
      font-size: var(--font-size-lg);
      margin-bottom: 1rem;
      color: var(--color-primary);
    }

    .business-hours p {
      color: var(--color-text-secondary);
      margin-bottom: 0.5rem;
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
  safeMapUrl: SafeResourceUrl = '';
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
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.companyService.getCompanyInfo().subscribe(info => {
      this.companyInfo = info;
      if (info?.contact) {
        const address = encodeURIComponent(
          `${info.contact.address}, ${info.contact.city}, ${info.contact.state}, ${info.contact.country} ${info.contact.postalCode || ''}`
        );
        const mapUrl = `https://www.google.com/maps?q=${address}&output=embed`;
        this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(mapUrl);
      }
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
    const phoneNumber = '525571557450'; // Derived from 55-71-55-74-50
    let message = 'Hola, me gustaría solicitar información.';
    if (this.formData.subject) {
      message = `Hola, me interesa: ${this.formData.subject}. ${this.formData.message}`;
    }
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
