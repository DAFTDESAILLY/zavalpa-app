import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserRole } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSignal = signal<User | null>(null);
  private isAuthenticatedSignal = signal<boolean>(false);

  currentUser = this.currentUserSignal.asReadonly();
  isAuthenticated = this.isAuthenticatedSignal.asReadonly();

  login(email: string, password: string): Observable<User> {
    // Simulación de login - en producción esto haría una petición HTTP
    const user: User = {
      id: '1',
      email: email,
      name: 'Usuario Demo',
      role: 'admin' // Por defecto admin para demostración
    };
    
    this.currentUserSignal.set(user);
    this.isAuthenticatedSignal.set(true);
    
    return of(user);
  }

  logout(): Observable<boolean> {
    this.currentUserSignal.set(null);
    this.isAuthenticatedSignal.set(false);
    return of(true);
  }

  hasRole(roles: UserRole[]): boolean {
    const user = this.currentUserSignal();
    if (!user) return false;
    return roles.includes(user.role);
  }

  isAdmin(): boolean {
    return this.hasRole(['admin']);
  }

  isInternal(): boolean {
    return this.hasRole(['admin', 'internal']);
  }
}
