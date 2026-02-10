import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceDetail } from '../../../../core/data/service-data';

@Component({
  selector: 'app-service-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-modal.html',
  styleUrl: './service-modal.component.scss',
})
export class ServiceModal {
  @Input({ required: true }) data!: ServiceDetail;
  @Output() onClose = new EventEmitter<void>();

  close() {
    this.onClose.emit();
  }
}
