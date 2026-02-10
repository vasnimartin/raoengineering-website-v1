import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { ServiceModal } from './components/service-modal/service-modal';
import { SERVICE_DATA, ServiceDetail } from '../../core/data/service-data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, ServiceModal],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  selectedService: ServiceDetail | null = null;
  serviceData = SERVICE_DATA;

  openService(key: string) {
    if (this.serviceData[key]) {
      this.selectedService = this.serviceData[key];
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    }
  }

  closeService() {
    this.selectedService = null;
    // Unlock body scroll
    document.body.style.overflow = '';
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
