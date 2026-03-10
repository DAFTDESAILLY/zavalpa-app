import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  businessLines: { name: string; image?: string; description: string; route: string }[] = [
    {
      name: 'Hogar',
      image: 'assets/home_cards/varios (1).webp',
      description: 'Soluciones prácticas y tecnología para tu vida diaria.',
      route: '/productos/hogar'
    },
    {
      name: 'Mobiliario y Oficina',
      image: 'assets/home_cards/mobiliriario.webp',
      description: 'Muebles, archiveros y artículos de papelería.',
      route: '/productos/muebles-oficina'
    },
    {
      name: 'Papelería',
      image: 'assets/home_cards/papeleria.webp',
      description: 'Todo lo necesario para tu escuela u oficina.',
      route: '/productos/papeleria'
    },
    {
      name: 'Salud e Higiene',
      image: 'assets/home_cards/salud-e-higienes.webp',
      description: 'Productos especializados para el cuidado de la salud y la higiene personal.',
      route: '/productos/salud-higiene'
    },
    {
      name: 'Salud Visual',
      image: 'assets/home_cards/salud visual.webp',
      description: 'Armazones ópticos y de sol.',
      route: '/productos/armazones'
    },
    {
      name: 'Bolsas y Carteras',
      image: 'assets/home_cards/bolsa.webp',
      description: 'Diseños exclusivos y materiales de alta calidad.',
      route: '/productos/bolsas-carteras'
    }
  ];
}
