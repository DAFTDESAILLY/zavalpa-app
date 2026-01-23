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
  businessLines = [
    {
      name: 'Textil y Moda',
      icon: '🧵',
      description: 'Importación de telas, tapicería, bolsas y carteras.'
    },
    {
      name: 'Mobiliario y Oficina',
      icon: '🪑',
      description: 'Muebles, archiveros y artículos de papelería.'
    },
    {
      name: 'Calzado',
      icon: '👞',
      description: 'Materiales de corte y forro para dama y caballero.'
    },
    {
      name: 'Salud Visual',
      icon: '👓',
      description: 'Armazones ópticos y de sol.'
    },
    {
      name: 'Tecnología y Maquinaria',
      icon: '⚙️',
      description: 'Refacciones, herramientas y tecnología en general.'
    }
  ];
}
