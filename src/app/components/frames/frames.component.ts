import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-frames',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.css']
})
export class FramesComponent {
  frames = [
    {
      model: 'ABF01',
      type: 'Óptico',
      description: 'Armazón óptico de diseño clásico con acabados premium.',
      image: '👓'
    },
    {
      model: 'AUF01',
      type: 'Solar',
      description: 'Lentes de sol con protección UV y diseño moderno.',
      image: '🕶️'
    },
    {
      model: 'AUN01',
      type: 'Óptico',
      description: 'Armazón ligero y resistente para uso diario.',
      image: '👓'
    },
    {
      model: 'MTV-01',
      type: 'Deportivo',
      description: 'Diseño deportivo ergonómico para máxima comodidad.',
      image: '😎'
    }
  ];
}
