import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CompanyInfo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyInfo: CompanyInfo = {
    name: 'Zavalpa Comercializadora',
    description: 'Somos una empresa 100% mexicana, dedicada a la Compraventa, producción, distribución, almacenamiento, importación, exportación, transportación, comercialización de productos, bienes y servicios. La asesoría y promoción en comercio exterior, almacenaje, consolidación de carga incluyendo el envió y transportación de mercancías. Compraventa, importación y exportación de telas para la confección de prendas, tapicería y todo lo relacionado con la industria textil. Artículos, mercancías, maquinaria, refacciones, herramientas, insumos, materias primas y en general cualquier tecnología.',
    mission: 'Ofrecer a nuestros clientes el mejor servicio y atención, para ampliar nuestro rango de experiencia ante el mercado y así poder realizar cada uno de nuestras acciones empresariales de manera satisfactoria.',
    vision: 'A partir de nuestras experiencias con los clientes, debemos consolidar cada aspecto que requiera el servicio para ofrecer la mejor respuesta ante el requerimiento de nuestro cliente y posicionarnos en el mercado de manera destacada.',
    contact: {
      email: 'contacto@zavalpa.com.mx',
      phone: '55 7260 5209',
      address: 'CALLE LATACUNGA 719, COL. LINDAVISTA SUR',
      city: 'GUSTAVO A. MADERO, CIUDAD DE MEXICO',
      state: 'CDMX',
      country: 'México',
      postalCode: '07300'
    }
  };

  getCompanyInfo(): Observable<CompanyInfo> {
    return of(this.companyInfo);
  }

  updateCompanyInfo(info: CompanyInfo): Observable<CompanyInfo> {
    this.companyInfo = info;
    return of(this.companyInfo);
  }
}
