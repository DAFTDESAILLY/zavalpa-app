import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stationery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './stationery.component.html',
  styleUrls: ['./stationery.component.css']
})
export class StationeryComponent {
  stationeryItems = [
    {
      name: 'Artículos de Escritura',
      description: 'Lápices, bolígrafos y artículos de escritura de alta calidad para oficina y escolar.',
      icon: '✏️'
    },
    {
      name: 'Lápices y Pinturas',
      description: 'Lápices con mina de grafito, lápices de colores y pinturas para uso artístico y técnico.',
      icon: '🎨'
    },
    {
      name: 'Papel e Impresos',
      description: 'Papel bond, tarjetas, blocs, libros e impresos diversos.',
      icon: '📄'
    },
    {
      name: 'Sobres y Bolsas',
      description: 'Variedad de sobres y bolsas para correspondencia y empaque.',
      icon: '✉️'
    },
    {
      name: 'Correo y Embalaje',
      description: 'Material especializado para correo y embalaje seguro.',
      icon: '📦'
    },
    {
      name: 'Carpetas e Informes',
      description: 'Carpetas, cubiertas de informes e índices para organización profesional.',
      icon: '📂'
    },
    {
      name: 'Archivadores',
      description: 'Sistemas de archivo y carpetas para gestión documental.',
      icon: '🗄️'
    },
    {
      name: 'Adhesivos',
      description: 'Pegamentos, colas y cintas adhesivas de uso general e industrial.',
      icon: '📎'
    }
  ];
}
