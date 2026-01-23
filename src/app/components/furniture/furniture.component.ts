import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent {
  furnitureList = [
    'Escritorios', 'Sillas', 'Lockers', 'Archiveros',
    'Cajas Fuerte', 'Bancos móviles', 'Módulos', 'Gabinetes',
    'Sala de recepción', 'Libreros', 'Ficheros', 'Mesas de junta'
  ];
}
