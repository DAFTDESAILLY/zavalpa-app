import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  // Force recompile
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="container">
          <div class="nav-content">
            <!-- Logo -->
            <a routerLink="/" class="logo">
              <span class="logo-icon">⚡</span>
              <span class="logo-text">ZAVALPA</span>
            </a>

            <!-- Desktop Navigation -->
            <ul class="nav-links desktop-nav">
              <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a></li>
              <li><a routerLink="/productos" routerLinkActive="active">Productos</a></li>
              <li><a routerLink="/nosotros" routerLinkActive="active">Nosotros</a></li>
              <li><a routerLink="/contacto" routerLinkActive="active">Contacto</a></li>
              @if (authService.isAuthenticated()) {
                <li><a routerLink="/admin" routerLinkActive="active" class="admin-link">Admin</a></li>
              }
            </ul>

            <!-- CTA Button -->
            <div class="nav-actions desktop-nav">
              @if (!authService.isAuthenticated()) {
                <a routerLink="/contacto" class="btn btn-primary">Contáctanos →</a>
              } @else {
                <button (click)="authService.logout()" class="btn btn-secondary">Cerrar Sesión</button>
              }
            </div>

            <!-- Mobile Menu Button -->
            <button 
              class="mobile-menu-btn" 
              (click)="toggleMobileMenu()"
              [attr.aria-expanded]="mobileMenuOpen()"
              aria-label="Toggle navigation menu">
              @if (!mobileMenuOpen()) {
                <span class="menu-icon">☰</span>
              } @else {
                <span class="menu-icon">✕</span>
              }
            </button>
          </div>
        </div>
      </nav>

      <!-- Mobile Navigation -->
      @if (mobileMenuOpen()) {
        <div class="mobile-nav" (click)="closeMobileMenu()">
          <ul class="mobile-nav-links">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a></li>
            <li><a routerLink="/productos" routerLinkActive="active">Productos</a></li>
            <li><a routerLink="/nosotros" routerLinkActive="active">Nosotros</a></li>
            <li><a routerLink="/contacto" routerLinkActive="active">Contacto</a></li>
            @if (authService.isAuthenticated()) {
              <li><a routerLink="/admin" routerLinkActive="active">Admin</a></li>
            }
            <li class="mobile-cta">
              @if (!authService.isAuthenticated()) {
                <a routerLink="/contacto" class="btn btn-primary mobile-btn">Contáctanos →</a>
              } @else {
                <button (click)="authService.logout()" class="btn btn-secondary mobile-btn">Cerrar Sesión</button>
              }
            </li>
          </ul>
        </div>
      }
    </header>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mobileMenuOpen = signal(false);

  constructor(public authService: AuthService) { }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
