import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent {
  bags = [
    {
      id: 'coleccion-bolsas-mano',
      name: 'Colección Bolsas de Mano',
      description: 'Elegantes bolsas de mano disponibles en una variedad de colores metálicos y mate. Diseño moderno con amplio espacio y correa ajustable.',
      features: ['Colores: Rosa, Dorado, Café, Gris, Negro', 'Acabados metálicos y mate', 'Diseño estructurado'],
      dimensions: '',
      icon: '👜'
    },
    {
      id: 'cartera-14-negro',
      name: 'Cartera 14 Negro',
      description: 'Cartera elegante en color negro con hebilla frontal distintiva. Ideal para ocasiones formales.',
      features: ['Color: Negro', 'Hebilla decorativa', 'Textura suave'],
      dimensions: '19x25.5cm',
      icon: '👛'
    },
    {
      id: 'cartera-14-beige',
      name: 'Cartera 14 Beige',
      description: 'Cartera versátil en tono beige, perfecta para combinar con cualquier atuendo.',
      features: ['Color: Beige', 'Diseño clásico', 'Fácil de combinar'],
      dimensions: '19x25.5cm',
      icon: '👛',
      image: 'assets/{images,icons}/BOLSA-HUESO.png'
    },
    {
      id: 'cartera-13-rojo',
      name: 'Cartera 13 Rojo',
      description: 'Cartera vibrante en color rojo con textura capitonada para un look audaz.',
      features: ['Color: Rojo', 'Textura capitonada', 'Cierre seguro'],
      dimensions: '19x25.5cm',
      icon: '👛'
    },
    {
      id: 'cartera-13-lila',
      name: 'Cartera 13 Lila',
      description: 'Cartera delicada en color lila, aportando un toque de color suave y femenino.',
      features: ['Color: Lila', 'Diseño moderno', 'Ligera y práctica'],
      dimensions: '19x25.5cm',
      icon: '👛',
      image: 'assets/{images,icons}/BOLSA-LILA.PNG'
    }
  ];
}