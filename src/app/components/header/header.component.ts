import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoading: boolean = false;
  loadingTimeout: any;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => { // Suscripción a los eventos de navegación del Router
      if (event instanceof NavigationStart) {
        // Si se inicia una navegación
        this.isLoading = true; // Activar estado de carga
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // Si finaliza, se cancela o se produce un error en la navegación
        if (this.loadingTimeout) {
          clearTimeout(this.loadingTimeout); // Limpiar timeout existente si lo hay
        }
        this.loadingTimeout = setTimeout(() => {
          this.isLoading = false; // Desactivar estado de carga después de 1 segundo de inactividad
        }, 1000);
      }
    });
  }
}
