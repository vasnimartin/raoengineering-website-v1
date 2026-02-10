import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

interface Project {
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  scope: string;
  services: string[];
  acreage?: number; // Optional: for land development projects
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Solana Ranch Master Plan',
      category: 'Land Development',
      location: 'Jarrell, TX (Williamson & Bell Counties)',
      image: 'bg-solana',
      description: 'Master-planned community development across 7,000 acres',
      scope: '14,000 homes, 40,000-50,000 residents, mixed-use development with schools, retail, and recreation. $1-2 billion land development investment.',
      services: ['Land Development', 'Water Resources', 'Infrastructure Planning', 'MUD Approval', 'Environmental'],
      acreage: 7000
    },
    {
      title: 'Elgin Business Park Expansion',
      category: 'Industrial Development',
      location: 'Elgin, TX (Roy Rivers Road)',
      image: 'bg-elgin',
      description: 'Aerospace manufacturing facility and business park infrastructure',
      scope: '50,000+ sq ft precision manufacturing facility expansion. Site development for 80-acre business park supporting aerospace and industrial tenants.',
      services: ['Site Development', 'Public Infrastructure', 'Utilities Design', 'Industrial Engineering'],
      acreage: 80
    },
    {
      title: 'CedarView Mixed-Use Development',
      category: 'Commercial Development',
      location: 'Cedar Park, TX',
      image: 'bg-cedarview',
      description: 'Major retail and hospitality complex near H-E-B Center',
      scope: '1.3M sq ft retail (Nebraska Furniture Mart), 357K sq ft Scheels megastore, Marriott Hotel, and city convention center.',
      services: ['Public Infrastructure', 'Water/Wastewater', 'Transportation Engineering', 'Site Planning']
    },
    {
      title: 'Regional Water Infrastructure',
      category: 'Water Resources',
      location: 'Central Texas Region',
      image: 'bg-water',
      description: 'Regional water system upgrades and long-term planning',
      scope: 'Surge tank expansion (1M to 4M gallons), 54-inch pipeline installation, TWDB 2026 Regional Water Plan compliance through 2080.',
      services: ['Water Resources', 'Infrastructure Design', 'Regional Planning', 'Environmental Compliance']
    },
    {
      title: 'I-35 Capital Express Central',
      category: 'Transportation',
      location: 'Austin, TX',
      image: 'bg-i35',
      description: 'Multi-billion dollar highway reconstruction through central Austin',
      scope: 'Major reconstruction including I-35 bridges over Lady Bird Lake, safety improvements, congestion reduction, pedestrian and cyclist accommodations.',
      services: ['Transportation Engineering', 'Environmental', 'Public Infrastructure', 'Permitting']
    }
  ];
}
