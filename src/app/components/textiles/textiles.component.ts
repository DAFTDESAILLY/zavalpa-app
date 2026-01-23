import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-textiles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './textiles.component.html',
  styleUrls: ['./textiles.component.css']
})
export class TextilesComponent {
  categories = [
    {
      name: 'Calzado',
      description: 'Contamos con productos de corte y forro para dama y caballero. Todo nuestro material especializado para la industria del calzado.',
      image: '👞',
      features: ['Corte y forro', 'Materiales sintéticos y piel', 'Variedad de texturas']
    },
    {
      name: 'Tapicería',
      description: 'Gran variedad de chenilles, suedes, lonas, sintéticos, viniles, material para exteriores, terciopelos y jacquards.',
      image: '🛋️',
      features: ['Personalización de grabados', 'Diferentes colores', 'Recubrimientos especiales']
    }
  ];
}
