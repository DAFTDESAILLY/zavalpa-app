import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Service } from '../../models';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  selectedCategory: string = 'all';

  categories = [
    { id: 'all', name: 'Todos los Servicios', icon: '🎯' },
    { id: 'comercio-exterior', name: 'Comercio Exterior', icon: '🌍' },
    { id: 'logistica', name: 'Logística Internacional', icon: '📦' },
    { id: 'consultoria', name: 'Consultoría', icon: '💼' },
    { id: 'servicios-tecnicos', name: 'Servicios Técnicos', icon: '🔧' }
  ];

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    // this.servicesService.getAllServices().subscribe(services => {
    //   this.services = services;
    // });
    this.services = [];
  }

  get filteredServices() {
    if (this.selectedCategory === 'all') {
      return this.services;
    }
    return this.services.filter(s => s.category === this.selectedCategory);
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  }
}
