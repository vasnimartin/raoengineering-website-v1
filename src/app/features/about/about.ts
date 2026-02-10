import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
